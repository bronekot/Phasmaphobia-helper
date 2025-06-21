import { createPinia } from 'pinia';
import piniaPersistedstate from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';
import App from './app.vue';
import './assets/css/main.scss';

const app = createApp(App);

const pinia = createPinia();

pinia.use(piniaPersistedstate);

app.use(pinia);

app.mount('#app');
