<template>
  <main class="section section--no-scroll">
    <template v-if="step == 0">
      <textarea class="input-group__textarea" placeholder="how did your day go?" v-model="slot.text">
      </textarea>
      <button class="btn btn--cta btn--full-width" @click="step += 1" :disabled="slot.text.length < 10">Next</button>
    </template>
    <template v-else-if="step == 1">
      <br />
      <label for="" class="input-group" style="width: 100%">
        <i class="input-group__icon lni lni-pencil"></i>
        <input type="text" v-model="slot.title" class="input-group__input" />
      </label>
      <button class="btn btn--cta btn--full-width" @click="submitSlot" :disabled="slot.title.length < 5">add new entry</button>
      <br />
      <a href="#back" @click.prevent="step -= 1" class="btn btn--text-only btn--full-width">go back to edit</a>
    </template>
  </main>
</template>

<script>
import { bus } from '../main'
import { mapActions } from 'vuex'

export default {
  name: 'NewEntryPage',
  data() {
    return {
      slot: {
        text: '',
        title: ''
      },
      step: 0
    }
  },
  methods: {
    ...mapActions(['addNewSlot']),
    submitSlot() {
      this.addNewSlot(this.slot).then( response => {
        console.log(response)
      }).catch( error => {
        console.log(error)
      })
    }
  },
  mounted() {
      bus.$emit('pageTitle' ,'add new entry')
  }
}
</script>
