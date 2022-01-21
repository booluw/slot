<template>
  <main class="section section--no-scroll">
    <template v-if="toEditData">
      <textarea class="input-group__textarea" placeholder="how did your day go?" v-model="toEditData.text">
      </textarea>
      <button class="btn btn--cta btn--full-width" @click="saveEdit()" :disabled="toEditData.text.length < 5 || loading">
        save edit
        <i class="btn__icon btn__icon--rotate lni lni-spinner" v-if="loading"></i>
      </button>
      <br />
      <router-link to="/" class="btn btn--text-only btn--full-width">cancel</router-link>
    </template>
    <template v-else>
      No data recieved
    </template>
  </main>
</template>

<script>
import { bus } from '../main'
import { mapState, mapActions } from 'vuex'

export default {
 name: 'EditSlotPage',
 computed: {
   ...mapState(['toEditData'])
 },
 data() {
   return {
     loading: false
   }
 },
 methods: {
   ...mapActions(['editSlot']),
   saveEdit() {
     this.loading = true
     this.editSlot(this.toEditData).then(() => {
      this.loading = false
      this.$router.push('/')
    }).catch( error => {
      this.$swal({
        'title': 'An error occured',
        'text': error.message,
        'icon': 'error'
      })
   })
   }
},
  mounted() {
    if(this.toEditData) {
      bus.$emit('pageTitle' ,`edit '${ this.toEditData.title }'`)
    } else {
      this.$router.push('/')
    }
  }
}
</script>