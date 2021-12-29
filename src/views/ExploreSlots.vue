<template>
  <div class="alert">
    <img src="@/assets/img/under_construction.svg" class="alert__img" />
    <h2 class="alert__heading">oops, page is not yet live</h2>
    <p class="alert__paragraph">
      we are currently working to make this page live.
      <router-link to="/" class="alert__link">visit the home page</router-link>
      to continue browsing other slots.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ExplorePage'
}
</script>
