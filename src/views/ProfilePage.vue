<template>
  <section>
    <header class="header" style="display: block; box-shadow: none;border: none;">
      <div class="header__flex" style="justify-content: space-between">
        <a href="#back" @click="goBack()" class="header__link">
          <i class="lni lni-chevron-left"></i>
        </a>
        <div class="dropdown">
          <a href="#" @click.prevent class="dropdown__toggler">
            <i class="lni lni-more-alt"></i>
          </a>
          <div class="dropdown__content">
            <router-link to="/edit-profile" class="dropdown__link">
              <i class="lni lni-pencil"></i>
              Edit profile
            </router-link>
            <router-link to="/setting" class="dropdown__link">
              <i class="lni lni-cog"></i>
              Settings
            </router-link>
          </div>
        </div>
      </div>
    </header>
    <section class="section profile">
      <section class="profile__hero">
        <div class="profile__skew"></div>
        <div class="row justify-content-center align-items-center">
          <div class="col-7">
            <img :src="user.img" class="profile__img" alt="User avatar" />
          </div>
        </div>
      </section>
      <section class="profile__bio">
        <h1 class="profile__heading">{{ user.fullname }}</h1>
        <h3 class="profile__heading profile__heading--small">@{{ user.displayName }}</h3>
      </section>
    </section>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProfilePage',
  data() {
    return {
      user: {}
    }
  },
  methods: {
    ...mapActions(['fetchCurrentUser']),
    goBack() {
      window.history.go(-1)
    }
  },
  mounted() {
    this.fetchCurrentUser().then(response => {
      this.user = response
    })
  }
}
</script>