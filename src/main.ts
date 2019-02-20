import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

// 引入i18n配置文件
import { messages } from './i18n/index';

// 引入工具类
import {util} from './assets/util/index';

// 在入口文件中引入基本样式
import './assets/styles/reset.css';
import './assets/styles/border.css';

Vue.config.productionTip = false;

// http://localhost:8080/?lang=en  国际化
const lang = util.getQueryString ('lang') || 'zh';

// i18n
const i18n = new VueI18n({
  locale: lang, // 语言标识
  messages,
});
new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount('#app');
