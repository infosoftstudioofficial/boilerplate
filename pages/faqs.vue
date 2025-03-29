<template>
  <v-container fluid fill-height>
    <client-only>
      <shared-toolbar />
      <shared-navigation :items="items" />
      <v-main>
        <shared-faqs />
      </v-main>
    </client-only>
  </v-container>
</template>
<script>
import Global from '~/plugins/mixins/global'
import { isEmpty, trim } from 'lodash'
export default {
  mixins: [Global],
  data() {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-home', name: 'dashboard' },
        { title: 'FAQ', icon: 'mdi-frequently-asked-questions', name: 'faqs' }
      ]
    }
  },
  created() {
    // if (process.client) {
    //   let user = null
    //   let success = null
    //   const token = localStorage.getItem('token')
    //   if (!isEmpty(localStorage.vuex)) {
    //     user = JSON.parse(localStorage.vuex).user.user
    //     success = JSON.parse(localStorage.vuex).user.user.success
    //   }
    //   if (!isEmpty(user)) {
    //     if (trim(token) === trim(success)) {
    //       this.goTo('/faqs')
    //     } else {
    //       this.goTo('/')
    //     }
    //   } else {
    //       this.goTo('/')
    //   }
    // }
  }
}
</script>
