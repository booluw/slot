<template>
  <div class="about row justify-content-center align-items-center" style="height: 100vh; margin: 0;">
    <div class="col-md-4" style="padding: 0 2rem;">
      <form class="form form--auth" @submit.prevent="registerNewUser()">
        <div class="form__logo">
          slot <span>experience. write. share.</span>
        </div>
        <label for="name" class="input-group">
          <i class="input-group__icon lni lni-user"></i>
          <input id="name" type="text" class="input-group__input" placeholder="your name" v-model="user.name" required />
        </label>
        <label for="email" class="input-group">
          <i class="input-group__icon lni lni-envelope"></i>
          <input id="email" type="email" class="input-group__input" placeholder="email address" v-model="user.mail" required />
        </label>
        <label for="password" class="input-group">
          <i class="input-group__icon lni lni-lock-alt"></i>
          <input id="password" :type="type ? 'password' : 'text'" class="input-group__input" placeholder="password" v-model="user.password" required />
          <span class="input-group__helper-text" @click="type = !type"> {{ type ? 'Show' : 'Hide'}} </span>
        </label>
        <button type="submit" class="form__btn btn btn--cta" :disabled="loading">
          register account
          <i class="btn__icon btn__icon--rotate lni lni-spinner" v-if="loading"></i>
        </button>
        <p class="form__paragraph" style="margin-block-start: 2rem;">
          <router-link to="/signin">sign in to your account</router-link> <br /> <router-link to="/recover-password">recover password</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      type: true,
      user: {},
      loading: false
    }
  },
  methods: {
    ...mapActions(['registerUser']),
    registerNewUser() {
      this.loading = true
      this.registerUser(this.user).then( response => {
       // this.loading = false
        console.log(response)
      }).catch(error => {
       // this.loading = false
        console.log(error)
      })
    }
  }
}
</script>
