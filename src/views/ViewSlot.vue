<template>
  <section>
    <header class="header">
      <div class="header__flex">
        <a href="#back" @click="goBack()" class="header__link">
          <i class="lni lni-chevron-left"></i>
        </a>
        <div :title="slot.title" style="width: 250px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
          {{ slot.title }}
        </div>
      </div>
    </header>
    <section class="section">
      <section class="article">
        <div class="article__header">
          <div class="article__text article__text--faint">{{ slot.location }}</div>
          <div class="article__text"> {{ moment(slot.date).format("dddd, MMMM Do YYYY") }} </div>
          <div class="article__text"> {{ moment(slot.date).format("h:mm:ss a") }} </div>
        </div>
        <p class="article__paragraph">
          {{ slot.text }}
        </p>
      </section>
    </section>
  </section>  
</template>

<script>
// import { bus } from '../main'
import { mapActions } from 'vuex'

export default {
  name: 'otherPagesLayout',
  data() {
    return {
      slot: {}
    }
  },
  methods: {
    ...mapActions(['fetchSlot']),
    goBack() {
      window.history.go(-1)
    }
  },
  mounted() {
    this.fetchSlot(this.$route.params).then(response => {
      this.slot = response
    })
  }
}
</script>
