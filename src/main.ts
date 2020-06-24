import Vue from 'vue';
// @ts-ignore
import VueCodemirror from 'vue-codemirror';
import 'codemirror/mode/vue/vue.js';

import App from './app/App.vue';
import './registerServiceWorker';
import router from './app/router';
import VRuntimeTemplate from 'v-runtime-template';

Vue.config.productionTip = false;
Vue.use(VueCodemirror);
Vue.component('VRuntimeTemplate', VRuntimeTemplate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
