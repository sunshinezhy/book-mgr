import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue'
import SpaceBetween from './components/SpaceBetween/index.vue';

import 'ant-design-vue/dist/antd.css';

createApp(App)
.use(store)
.use(router)
.use(Antd)
.component('space-between',SpaceBetween)
.mount('#app');
