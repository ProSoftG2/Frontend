import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/soho-light/theme.css'
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import router from "./router/index.js";
import {createPinia} from "pinia";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
const pinia = createPinia();
createApp(App)
    .use (PrimeVue, {ripley: true})
    .use(router)
    .use(pinia)
    .use(ToastService)
    .component ('pv-inputText', InputText)
    .component ('pv-button', Button)
    .component('pv-toast', Toast)
    .mount('#app')

