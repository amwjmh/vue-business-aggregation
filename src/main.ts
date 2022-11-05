import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 路由
import { setupRouter } from './router'
import setupElementPlus from './plugins/elementPlus'
import './permission'
// createApp(App).mount('#app')

const setupAll = async () => {
  const app = createApp(App)
  setupElementPlus(app)
  setupRouter(app)
  app.mount('#app')
}
setupAll()
