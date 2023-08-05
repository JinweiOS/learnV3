// 为什么js中可以引入css？
// vite plugin(esbuild)
// webpack loader('css')
// import './assets/main.css'

import { createApp } from 'vue'

// 为什么js中可以引入vue文件？
import App from './Vif.vue'

const app = createApp(App)
app.mount('#app')
