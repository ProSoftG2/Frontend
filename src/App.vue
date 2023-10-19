<script>

import {defineComponent} from "vue";
import LoginForm from "./authentication/components/login-form.component.vue";
import RegisterForm from "./authentication/components/register-form.component.vue";
import PasswordForgotForm from "./authentication/components/password-forgot-form.component.vue";
import RecoverPasswordForm from "./authentication/components/password-recovery-form.component.vue";

export default defineComponent({
  components: {RecoverPasswordForm, PasswordForgotForm, RegisterForm, LoginForm}
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
