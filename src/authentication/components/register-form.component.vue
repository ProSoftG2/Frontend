<script>
import {AuthApiService} from "../services/authApiService.js";

export default {
  name: "register-form",
  data() {
    return {
      firstName: '',
      lastName: '',
      phoneNumber: null,
      dni: null,
      email: '',
      password: '',
      confirmPassword: '',
      isCandidate: true,
      authApi: new AuthApiService()
    };
  },
  methods: {
    setIsCandidate(state) {
      this.isCandidate = state;
    },
    register(event) {
      event.preventDefault();

      if (this.confirmPassword !== this.password) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Passwords do not match",
          life: 3000
        });
        return;
      }

      this.authApi.signUp(
          this.firstName,
          this.lastName,
          this.phoneNumber.toString(),
          this.email,
          this.dni,
          this.password,
          !this.isCandidate
      )
          .then(res => {
            this.$toast.add({
              severity: "success",
              summary: "Success",
              detail: `${res.data.message}. Redirecting to login...`,
              life: 3000
            });
            setTimeout(() => {
              this.$router.push("/login");
            }, 3000);
          })
          .catch(err => {
            this.$toast.add({
              severity: "error",
              summary: "Error",
              detail: err.response.data,
              life: 4000
            });
          })
     }
  }
};
</script>

<template>
  <div class="container">
    <div class="half left">
      <div class="img-container">
        <img src="https://i.imgur.com/VuZwPb1.jpg" alt="Imagen" />
      </div>
    </div>
    <div class="half right">
      <div class="p-card p-shadow-2 p-mb-6" style="width: 80%;">
        <div class="p-card-body">
          <div class="p-fieldset p-grid p-nogutter">
            <div class="p-col-12 p-md-6">
              <h2 class="p-mb-4">Personal Information</h2>
              <p class="p-mb-4">Use a permanent address where you can receive mail.</p>
              <div class="p-formgroup-inline">
                <div class="p-field">
                  <label for="first-name">First name</label>
                  <pv-inputText v-model="firstName" id="first-name" class="p-inputtext-sm" />
                </div>
                <div class="p-field">
                  <label for="last-name">Last name</label>
                  <pv-inputText v-model="lastName" id="last-name" class="p-inputtext-sm" />
                </div>
                <div class="p-field">
                  <label for="phone-number">Phone number</label>
                  <pv-inputText v-model="phoneNumber" id="phone-number" class="p-inputtext-sm" />
                </div>
                <div class="p-field">
                  <label for="dni">DNI</label>
                  <pv-inputText v-model="dni" id="dni" class="p-inputtext-sm" />
                </div>
                <div class="p-field">
                  <label for="email">Email address</label>
                  <pv-inputText v-model="email" id="email" type="email" class="p-inputtext-sm" />
                </div>
                <div class="p-field">
                  <label for="password">Create password</label>
                  <pv-inputText v-model="password" id="password" class="p-inputtext-sm" />
                </div>
                <div class="p-field">
                  <label for="password">Confirm Password</label>
                  <pv-inputText v-model="confirmPassword" id="confirmPassword" class="p-inputtext-sm" />
                </div>
                <router-link aria-label="go to login" class="link" v-on:click="visible = false"  to="/login">
                  <div class="p-field p-text-center">
                    <pv-button label="Register" class="p-button-sm p-button-primary" style="width: 100%;" />
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  display: flex;
}

.half {
  flex: 1;
}

.left {
  background-color: #f0f0f0;
}

.right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-container {
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.p-formgroup-inline .p-field {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
}

.p-formgroup-inline .p-field label {
  flex: 1;
  font-weight: bold;
}

.p-formgroup-inline .p-field .p-inputtext-sm {
  flex: 2;
}
.p-field {
  margin-bottom: 10px;
}
.p-button-sm {
  margin-top: 10px;
}
</style>