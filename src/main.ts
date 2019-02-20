import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible';

// 在入口文件中引入基本样式
import './assets/styles/reset.css';
import './assets/styles/border.css';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
