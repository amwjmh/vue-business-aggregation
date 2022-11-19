<script lang="tsx">
import { ElForm } from 'element-plus'
import { findIndex, set } from 'lodash'
import { defineComponent, computed, watch, onMounted, PropType, ref, unref } from 'vue'
import { FormProps } from './types'
export default defineComponent({
    name: 'Form',
    props: {
        schema: {
            type: Array as PropType<FormSchema[]>,
            default: () => []
        },
        isCol: {
            type: Boolean,
            default: true
        },
        model: {
            type: Object as PropType<Recordable>,
            default: () => ({})
        },
        autoSetPlaceholder: {
            type: Boolean,
            default: true
        },
        isCustom: {
            type: Boolean,
            default: true
        },
        labelWidth: {
            type: String || Number,
            default: 'auto'
        }
    },
    emits: ['register'],
    setup (props, { slots, expose, emit }) {
        // el-from 实例
        const elFormRef = ref<ComponentRef<typeof ElForm>>()
        // useFormw传入的props
        const outsideProps = ref<FormProps>({})

        const mergeProps = ref<FormProps>({})

        const getProps = computed(() => {
            const propsObj = { ...props }
            Object.assign(propsObj, unref(mergeProps))
            return propsObj
        })
        const formModel = ref<Recordable>({})

        onMounted(() => {
            emit('register', unref(elFormRef)?.$parent)
        })

        const setValues = (data: Recordable = {}) => {
            formModel.value = Object.assign(unref(formModel), data)
        }

        const setProps = (props: FormProps = {}) => {
            mergeProps.value = Object.assign(unref(mergeProps), props)
            outsideProps.value = props
        }
        const delSchema = (field: string) => {
            const { schema } = unref(getProps)
            const index = findIndex(schema, (v: FormSchema) => v.field === field)
            if (index > -1) {
                schema.splice(index, 1)
            }
        }

        const addSchema = (formSchema: FormSchema, index?: number) => {
            const { schema } = unref(getProps)
            if (index !== void 0) {
                schema.splice(index, 0, formSchema)
                return
            }
            schema.push(formSchema)
        }
        const setSchema = (schemaProps: FormSetPropsType[]) => {
            const { schema } = unref(getProps)
            for (const v of schema) {
                for (const item of schemaProps) {
                    if (v.field === item.field) {
                        set(v, item.path, item.value)
                    }
                }
            }
        }

        const getElFormRef = (): ComponentRef<typeof ElForm> => {
            return unref(elFormRef) as ComponentRef<typeof ElForm>
        }
        expose({
            setValues,
            formModel,
            setProps,
            delSchema,
            addSchema,
            setSchema,
            getElFormRef
        })
        watch(
            () => unref(getProps).schema,
            (schema = []) => {
                formModel.value = initModel(schema, unref(formModel))
            }
        )
    }
})
</script>

<style scoped></style>
