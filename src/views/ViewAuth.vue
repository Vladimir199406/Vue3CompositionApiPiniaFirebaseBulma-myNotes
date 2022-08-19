<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active': !register }">
          <a @click.prevent="register = false">Login</a>
        </li>
        <li :class="{ 'is-active': register }">
          <a @click.prevent="register = true">Register</a>
        </li>
      </ul>
    </div>
    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">{{ formTitle }}</div>
        <form @submit.prevent="onSubmit">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="e.g. example@gmail.com"
                v-model="credentials.email"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                class="input"
                type="password"
                placeholder="Enter a password"
                v-model="credentials.password"
              />
            </div>
          </div>
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button class="button is-primary">{{ formTitle }}</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
/*
 imports
*/
import { ref, computed, reactive } from "vue";
import { useStoreAuth } from "@/stores/storeAuth";

/*
 data
*/
const register = ref(false);

const credentials = reactive({
  email: "",
  password: "",
});

/*
 store
*/
const storeAuth = useStoreAuth();

/*
 computed
*/
const formTitle = computed(() => {
  return register.value ? "Register" : "Login";
});

/*
 methods
*/
// PROTO moc method below
const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    console.log("TODO: add normal validation");
  } else {
    if (register.value) {
      storeAuth.registerUser(credentials);
    } else {
      console.log("TODO: LOG IN", credentials);
    }
  }
};
</script>
<style>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
