<template>
  <main class="section">
    <template v-if="slots.length > 0">
      <div class="card" v-for="slot in slots" :key="slot.sid">
        <div class="card__header">
          <h3 class="card__heading" @click="openThis()">{{ slot.title }}</h3>
          <i class="lni lni-pencil" @click="editThis()"></i>
        </div>
        <p class="card__paragraph" @click="openThis()">
          {{ slot.text }}
        </p>
        <div class="card__footer">
          <div @click="fromThisLocation()">
            <i class="lni lni-pin"></i> {{ slot.location }}
          </div>
          <div>
            <i class="lni lni-alarm-clock"></i> {{ moment(slot.date).fromNow() }}
          </div>
          <div @click="shareThis()">
            <i class="lni lni-share-alt-1"></i>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="alert">
        <img src="@/assets/img/add_notes.svg" class="alert__img" />
        <h2 class="alert__heading">oops, you've not added any slot yet!</h2>
        <p class="alert__paragraph">
          adding a slot is easy, just <router-link to="/new" class="alert__link">click here</router-link>.
        </p>
      </div>
    </template>
  </main>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      slots: []
    }
  },
  methods: {
    ...mapActions(['fetchAllSlots']),
    openThis() {
      alert('Openning a slot')
    },
    shareThis() {
      alert('Sharing a slot')
    },
    fromThisLocation() {
      alert('Showing all slots from this location')
    },
    editThis() {
      alert('Editting a slot')
    },
    fetchData() {
      this.fetchAllSlots().then( response => {
        console.log('Data retrieved successfully')
        this.slots = response
      })
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>
