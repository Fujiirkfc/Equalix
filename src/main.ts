import './assets/styles/global.css'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

let app
app = createApp(App)
app.use(router)
app.use(createPinia())

app.mount('#app')
