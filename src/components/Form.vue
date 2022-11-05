<script lang="tsx">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
    name: 'Form',
    props: {
        schema: {
            type: Array as PropType<FormSchema>
        }
    },
    setup () {

    }
})
</script>

<style scoped>

</style>
