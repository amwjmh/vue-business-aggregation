export type FormProps = {
    schema?: FormSchema[]
    isCol?: boolean
    model?: Recordable
    autoSetPlaceholder?: boolean
    isCustom?: boolean
    labelwidth?: string | number
} & Recordable
