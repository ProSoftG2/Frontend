import {createRouter, createWebHistory} from "vue-router";
import Register from "../authentication/pages/register.component.vue";
import Login from "../authentication/pages/login.component.vue";
import ForgotPassword from "../authentication/pages/password-forgot.component.vue";
import RecoverPasswordForm from "../authentication/pages/password-recovery.component.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/register', name: 'Register', component: Register },
        { path: '/login', name: 'Log In', component: Login },
        { path: '/forgot-password', name: 'Forgot Password', component: ForgotPassword},
        { path: '/recover-password', name: 'Password Recovery', component: RecoverPasswordForm},
        {path:'', component:Login},
        {path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
});
export default router;