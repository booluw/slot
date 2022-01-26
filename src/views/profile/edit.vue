<template>
  <section>
    <form @submit.prevent="uploadImage()">
      <input
        type="file"
        accept="image/png, image/jpeg"
        @change="handleFileChange"  
      />
    <button class="btn" type="submit">Upload Image</button>
    </form>

    <img :src="url" />
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
      image: ''
    }
  },
  methods: {
    ...mapActions(['updateUserSetting']),
    handleFileChange(event) {
      this.image = event.target.files[0]
    },
    uploadImage() {
      let formData = new FormData()
      formData.append('upload_preset', 'slotImages')
      formData.append('folder', 'profile')
      formData.append('file', this.image)
      this.$http.post('https://api.cloudinary.com/v1_1/booluw/upload', formData).then((response) => {
        this.url = response.data.url
        this.updateUserSetting(this.url)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>