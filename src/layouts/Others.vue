<template>
  <section>
    <header class="header">
      <div class="header__flex">
        <a href="#back" @click="goBack()" class="header__link">
          <i class="lni lni-chevron-left"></i>
        </a>
        {{ title }}
      </div>
    </header>
    <router-view  />
  </section>  
</template>

<script>
import { bus } from '../main'

export default {
  name: 'otherPagesLayout',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    goBack() {
      window.history.go(-1)
    }
  },
  created() {
      bus.$on('pageTitle', (data) => {
        this.title = data
      })
  }
}
</script>
