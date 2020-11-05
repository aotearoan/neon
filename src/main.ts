import Vue from 'vue';

import App from './app/App.vue';
import router from './app/router';
import VRuntimeTemplate from 'v-runtime-template';
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false;
Vue.component('VRuntimeTemplate', VRuntimeTemplate);

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {
      'Show {count} more': 'Show {count} more',
    },
  },
  silentTranslationWarn: true,
});

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount('#app');
