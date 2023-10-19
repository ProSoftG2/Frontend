import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js"

// PrimeVue

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'Primevue/resources/primevue.min.css'


// Toast Service
import ToastService from 'primevue/toastservice';

// PrimeVue Components
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Row from "primevue/row";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Menu from "primevue/menu";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Card from "primevue/card";
import SplitButton from 'primevue/splitbutton';


createApp(App)
    .use(router)
    .use(PrimeVue,{ripple:true})
    .use(ToastService)
    .component('pv-data-table',DataTable)
    .component('pv-column', Column)
    .component('pv-row', Row)
    .component('pv-toolbar', Toolbar)
    .component('pv-input-text', InputText)
    .component('pv-textarea', Textarea)
    .component('pv-button', Button)
    .component('pv-sidebar', Sidebar)
    .component('pv-menu', Menu)
    .component('pv-dialog', Dialog)
    .component('pv-toast', Toast)
    .component('pv-dropdown', Dropdown)
    .component('pv-tag', Tag)
    .component('pv-card', Card)
    .component('pv-split-button', SplitButton)
    .mount('#app')
