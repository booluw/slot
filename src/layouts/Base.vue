<template>
  <section>
    <header class="header">
      <router-link to="/profile" class="header__profile">
        <i class="lni lni-user"></i>
      </router-link>
      <div class="header__logo">slot</div>
      <a href="#latest" @click.prevent="showOffers()" class="header__link">
        <i class="lni lni-offer"></i>
      </a>
    </header>
    <router-view />
    <nav class="nav">
      <ul class="nav__list">
        <li>
          <router-link to="/" class="nav__link" exact-active-class="nav__link--active">
            <i class="lni lni-home"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/explore" class="nav__link" exact-active-class="nav__link--active">
            <i class="lni lni-rss-feed"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/settings" class="nav__link" exact-active-class="nav__link--active">
            <i class="lni lni-cog"></i>
          </router-link>
        </li>
        <li>
          <a href="#leave" @click.prevent="logUserOut()" class="nav__link nav__link--log-out" exact-active-class="nav__link--active">
            <i class="lni lni-power-switch"></i>
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'BaseLayout',
  data() {
    return {
      showOffers() {
        alert('dunno what to do')
      },
      logUserOut() {
        alert('Hello World')
      }
    }
  }
}
</script>
