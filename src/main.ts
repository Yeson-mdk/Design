import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'; // 导入图标库
//暗黑模式样式
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'
import router from './router'
import 'element-plus/dist/index.css'
import ElementPlusAlert from './plugins/elementPlusAlert'

const app = createApp(App);

// 使用 Element Plus
app.use(ElementPlus);
app.use(router)
app.use(ElementPlusAlert)
// 注册所有图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

// 挂载应用
app.mount('#app');

// import './assets/main.css'





