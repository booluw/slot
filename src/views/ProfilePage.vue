<template>
  <section>
    <header class="header" style="display: block; box-shadow: none;border: none;">
      <div class="header__flex" style="justify-content: space-between">
        <a href="#back" @click="goBack()" class="header__link">
          <i class="lni lni-chevron-left"></i>
        </a>
        <!--- div class="dropdown">
          <a href="#" @click.prevent class="dropdown__toggler">
            <i class="lni lni-more-alt"></i>
          </a>
          <div class="dropdown__content">
            <a href="#changeImage" @click.prevent="editModal = true" class="dropdown__link">
              <i class="lni lni-image"></i>
              Change Image
            </a>
            <router-link to="/setting" class="dropdown__link">
              <i class="lni lni-cog"></i>
              Settings
            </router-link>
          </div>
        </div --->
      </div>
    </header>
    <section class="section profile">
      <section class="profile__hero">
        <div class="profile__skew"></div>
        <div class="row justify-content-center align-items-center">
          <div class="col-7">
            <img :src="user.img" class="profile__img" :alt="user.displayName" />
          </div>
        </div>
      </section>
      <section class="profile__bio">
        <h1 class="profile__heading">{{ user.fullname || 'John Doe' }}</h1>
        <h3 class="profile__heading profile__heading--small">@{{ user.displayName || 'Dummy' }}</h3>
      </section>
    </section>
    <section class="section profile">
      <h2 class="section__heading">actions</h2>
      <br />
      <div class="section__row-scroll">
        <div class="col-10">
          <a href="#" @click.prevent="editModal = true" class="card card--profile">
            <h3 class="card__heading">change profile picture</h3>
            <i class="lni lni-gallery card__icon"></i>
          </a>
        </div>
        <div class="col-10">
          <router-link to="/settings" class="card card--profile">
            <h3 class="card__heading">change account settings</h3>
            <i class="lni lni-cogs card__icon" style="transform: rotate(-90deg)"></i>
          </router-link>
        </div>
      </div>
    </section>
    <edit-dp @close="editModal = false" @uploaded="handleUpload()" v-if="editModal"/>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import EditDPVue from '../components/settings/EditDP.vue'

export default {
  name: 'ProfilePage',
  components: {
    'edit-dp': EditDPVue
  },
  data() {
    return {
      user: {},
      editModal: false
    }
  },
  methods: {
    ...mapActions(['fetchCurrentUser']),
    goBack() {
      window.history.go(-1)
    },
    handleUpload() {
      this.editModal = false
      this.fetchCurrentUser().then(response => {
        this.user = response
      })  
    }
  },
  mounted() {
    this.fetchCurrentUser().then(response => {
      this.user = response
    })
  }
}
</script>