<template>
  <client-only>
    <v-layout wrap justify-center align-center>
      <v-flex xs12 sm7 md8 lg9>
        <shared-account-validation :isReviewed="isReviewed"/>
      </v-flex>
    </v-layout>
  </client-only>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data: () => ({
      loading: false,
      isReviewed: false
    }),
    methods: {
      ...mapActions('events', ['POST_API']),
      sendvalidationtoken () {
          this.isReviewed = true
        // let payload = {
        //   api: 'forgot/password',
        //   data: {
        //     token: this.$nuxt._route.params.id
        //   }
        // }
        // this.loading = true
        // this.POST_API(payload).then(res => {
        //   this.isReviewed = true
        // }).catch(err => {
        //   if (err) {
        //     this.isReviewed = false
        //   }
        // }).finally(() => {
        //   this.loading = false
        // })
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.sendvalidationtoken()
      })
    }
  }
</script>
