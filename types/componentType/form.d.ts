import { AxiosPromise } from 'axios'

declare global {
    declare type ColProps = {
        span?: number
        xs?: number
        sm?: number
        md?: number
        lg?: number
        xl?: number
        tag?: string
    }
    declare type FormValueType = string | number | string[] | number[] | boolean | undefined | null

    declare type FormSchema = {
        field: string
        label?: string
        labelMessage?: string
        colProps?: ColProps
        componentProps?: { slots?: Recordable } & ComponentProps
        formItemProps?: FormItemProps
        component?: ComponentName
        value?: FormValueType
        hidden?: boolean
        api?: <T = any>() => AxiosPromise<T>
    }
    declare type FormSetPropsType = {
        field: string
        path: string
        value: any
      }
}
