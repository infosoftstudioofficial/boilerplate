<template>
  <v-layout wrap justify-center align-center>
    <v-flex xs12 sm7 md8 lg9>
      <v-container fluid fill-height>
        <v-btn
          fixed
          top
          left
          dark
          text
          style="z-index: 999;"
          class="global-text-color" 
          @click="backHome">
          <v-icon medium class="global-text-color">chevron_left</v-icon>
          Back
        </v-btn>
        <v-layout wrap justify-center align-center>
          <v-flex xs12 md8>
            <v-card class="px-5 elevation-12 global-card-border" flat>
              <v-card-title>Forgot your Password?</v-card-title>
              <v-card-text class="mb-12 text-justify" :class="titleClass">Please enter you email address in the field below, once sent you will receive an email with the
                reset password instructions.</v-card-text>
              <v-layout wrap justify-center align-center class="mb-12">
                <v-flex xs12 md8>
                  <v-text-field
                    outlined
                    autocomplete="off"
                    placeholder="Enter your email here"
                    v-model="email"
                    background-color="white"
                    color="#223345"
                    class="mx-2"
                    prepend-inner-icon="email"
                    @keyup.enter="submit()"
                    :error-messages="errors['email']"
                  />
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      large
                      :loading="loading"
                      :disabled="loading"
                      @click="submit()"
                      class="mb-2 px-5 global-bg-color white--text"
                    >Send Email</v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>
<script>
  import Global from "~/plugins/mixins/global";
  import imagePath from '~/plugins/mixins/Imagepath'
  import { mapMutations, mapActions } from 'vuex'
  export default {
    mixins: [
      imagePath,
      Global
    ],
    data: () => ({
      email: '',
      errors: {},
      loading: false
    }),
    computed: {
      titleClass () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return 'subtitle-1 ml-5'
        } else {
          return 'subtitle-2'
        }
      }
    },
    methods: {
      ...mapMutations('login', ['SET_RESET_EMAIL']),
      ...mapActions('global', ['POST_API']),
      submit () {
        // let payload = {
        //   api: 'forgot/password',
        //   email: this.email
        // }
        // this.loading = true
        // this.SET_RESET_EMAIL(this.email)
        // this.POST_API(payload).then(res => {
        //   this.goTo('/resetform')
        // }).catch(err => {
        //   if (err) {
        //     if (err.response) {
        //       if (err.response.data.error_message) {
        //         if (err.response.data.error_message === 'We cant find a user with that e-mail address.') {
        //           this.$set(this.errors, 'email', 'The given data was invalid.')
        //         } else {
        //           this.$set(this.errors, 'email', err.response.data.error_message)
        //         }
        //       }
        //       if (err.response.data.errors) {
        //         this.errors = err.response.data.errors
        //       }
        //     }
        //   }
        // }).finally(() => {
        //   this.loading = false
        // })
        this.goTo('/resetform')
      },
      backHome () {
        this.goTo('/')
      }
    }
  }
</script>
