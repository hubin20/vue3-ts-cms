import { createApp } from 'vue'

import App from './App.vue'
import { globalRegister } from '@/global'
import 'normalize.css'
import './assets/css/index.less'

import router from './router'
import store from './store'
import { setupStore } from './store'
// import hbRequest from './service'

const app = createApp(App)

//注册element-plus
app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)

app.mount('#app')
