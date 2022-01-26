<template>
  <section class="modal-container">
    <div class="modal">
      <header class="header header__flex">
        change picture
      </header>
      <form @submit.prevent="uploadImage()">
        <label for="input" class="input-group">
          <i class="lni lni-plus input-group__icon"></i>
        <input
        class="input-group__file"
          type="file"
          id="input"
          accept="image/png, image/jpeg"
          @change="handleFileChange"  
        />
        </label>
      <button class="btn btn--cta btn--full-width" type="submit">
        submit
        <i class="btn__icon btn__icon--rotate lni lni-spinner" v-if="loading"></i>
      </button>
      <br />
      <a href="#cancel" @click.prevent="$emit('close')" class="btn btn--text-only btn--full-width">cancel</a>
      </form>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import Axios from 'axios'

export default {
  name: 'EditProfile',
  data() {
    return {
      url: '',
      image: '',
      loading: false
    }
  },
  methods: {
    ...mapActions(['updateUserSetting']),
    handleFileChange(event) {
      this.image = event.target.files[0]
    },
    uploadImage() {
      this.loading = true

      let formData = new FormData()

      formData.append('upload_preset', 'slotImages')

      formData.append('folder', 'profile')

      formData.append('file', this.image)

      this.$axios.post('https://api.cloudinary.com/v1_1/booluw/upload', formData).then((response) => {
        this.url = response.data.url
        this.updateUserSetting(this.url).then(() => {
          this.$emit('uploaded')
        }).catch(error => {
          this.$swal({
            'title': 'An error occured',
            'text': `${ error }`,
            'icon': 'error'
          })
        })
      }).catch(error => {
        this.loading = false
        this.$swal({
          'title': 'An error occured',
          'text': `${ error }`,
          'icon': 'error'
        })
      })
    }
  }
}
</script>