import ElementPlus from 'element-plus'
import type { App } from 'vue'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
export default function setupElementPlus (app: App<Element>) {
    app.use(ElementPlus, {
        locale: zhCn,
        size: 'default'
    })
}
