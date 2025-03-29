<template>
  <v-app dark>
    <v-container fluid :fill-height="$vuetify.breakpoint.lgAndUp">
      <v-layout wrap align-center justify-center>
        <v-flex xs12 class="my-5 break-word primary-text-color text-center">
       
          <img src="~/assets/images/infosoft.png" />

          <span class="global-text-style" :style="$vuetify.breakpoint.smAndDown ? 'font-size: 1.7rem;' : 'font-size: 3rem;'">
          Infosoft</span><br/>
          <span class="global-text-style my-0 py-0">Software development team under Mini Clean Business Solutions</span><br/>
          <span class="global-text-style font-weight-bold my-0 py-0">PHILGEPS Platinum Certified</span>
        </v-flex>
        <v-card class="pa-10 elevation-15">
          <v-card-title class="my-2">
            
            {{ !isReviewed ? 'Account Verification' : 'Account Verified'}}
          </v-card-title>
          <v-card-text
            class="mt-2 title"
            v-if="!isReviewed">
            Your account is under review. Please wait for your account to be verified.
          </v-card-text>
          <v-card-text
            class="mt-2 title"
            v-if="isReviewed">
            Your account has been reviewed. Please account is now verified.Please click "continue" to login.
          </v-card-text>
          <v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                v-if="!isReviewed"
                depressed
                color="#fbb730"
                class="white--text"
                @click="logout()">
                <v-icon>keyboard_arrow_left</v-icon>Home page
              </v-btn>
              <v-btn
                v-if="isReviewed"
                depressed
                color="#fbb730"
                class="white--text"
                @click="login()">
                <v-icon>keyboard_arrow_left</v-icon>Continue
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import { mapMutations } from 'vuex'
  import Global from '~/plugins/mixins/global'
  export default {
    mixins: [Global],
    layout: 'empty',
    props: {
      error: {
        type: Object,
        default: null
      },
      isReviewed: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
      }
    },
    methods: {
      ...mapMutations('user', ['RESET_USER']),
      logout() {
        this.goTo('/')
      },
      login () {
        this.goTo('/dashboard')
      }
    }
  }
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
