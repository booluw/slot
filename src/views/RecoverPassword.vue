<template>
  <div class="about row justify-content-center align-items-center" style="height: 100vh; margin: 0;">
    <div class="col-md-4" style="padding: 0 2rem;">
      <form class="form form--auth" @submit.prevent="recoverUserPassword()">
        <div class="form__logo">
          slot <span>experience. write. share.</span>
        </div>
        <template v-if="!passwordSent">
          <label for="name" class="input-group">
            <i class="input-group__icon lni lni-user"></i>
            <input id="name" type="text" class="input-group__input" placeholder="your name" v-model="user.name" required />
          </label>
          <label for="email" class="input-group">
            <i class="input-group__icon lni lni-envelope"></i>
            <input id="email" type="email" class="input-group__input" placeholder="email address" v-model="user.mail" required />
          </label>
          <button type="submit" class="form__btn btn btn--cta" :disabled="loading">
            recover password
            <i class="btn__icon btn__icon--rotate lni lni-spinner" v-if="loading"></i>
          </button>
        </template>
        <template v-else>
          <p class="form__paragraph" style="margin: 0">
            hello {{ user.name }},<br />
            a password reset link has been sent to <b> {{ user.mail }}</b>. hope to see you soon.
          </p>
        </template>
        <p class="form__paragraph">
          <router-link to="/signin">sign in to your account</router-link> <br /> <router-link to="/register">register account</router-link>
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
      loading: false,
      passwordSent: false
    }
  },
  methods: {
    ...mapActions(['recoverPassword']),
    recoverUserPassword() {
      this.loading = true
      this.recoverPassword(this.user).then( response => {
        this.passwordSent = true
      }).catch(error => {
        switch (error.code) {
          case 'auth/user-not-found': // USER ACCOUNT NOT FOUND
            this.$swal({
              'title': "We couldn't find your account",
              'text': "We could not find an account with the email you provided. You can register a free account",
              'icon': 'error',
              'confirmButtonText': 'Go to register'
            }).then(() => {
              this.$router.push('/register')
            })
            break;

            
          case 'auth/wrong-password': // USER ACCOUNT NOT FOUND
            this.$swal({
              'title': 'Looks like you forgot your password',
              'icon': 'error'
            })
            break;


            
          case 'auth/invalid-emal': // USER ACCOUNT NOT FOUND
            this.$swal({
              'title': 'Your email is invalid',
              'icon': 'error'
            })
            break;
  
          default:
            this.$swal({
              'title': 'An error occured',
              'text': 'Sorry, we could not trace this error to anything on our system.',
              'icon': 'error'
            })
            break;
        }
        this.loading = false
      })
    }
  }
}
</script>
