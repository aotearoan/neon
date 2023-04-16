// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './src/app/App.vue';
import router from './src/app/router';
import { RegisterIcons } from './src/common/utils/RegisterIcons';

RegisterIcons.register();

const app = createApp(App);

app.use(router);
app.mount('#app');
