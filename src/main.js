// 为什么js中可以引入css？
// vite plugin(esbuild)
// webpack loader('css')
// import './assets/main.css'

import { createApp } from 'vue'

// 为什么js中可以引入vue文件？
import Main from './Main.vue'
import ChildComp from '@/component/Child.vue'
import ElementPlus from 'element-plus'
import '@/theme/index.css'
const app = createApp(Main)
// 全局注册
app.component('ChildComp', ChildComp)
app.use(ElementPlus)
app.mount('#app')
