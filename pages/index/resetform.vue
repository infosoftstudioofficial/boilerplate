<template>
  <client-only>
    <v-layout wrap justify-center align-center>
      <v-flex xs12 sm7 md8 lg9>
        <v-container fluid fill-height>
          <v-layout wrap justify-center align-center>
            <v-flex xs12 sm8 md7>
              <v-card class="px-5 global-card-border" flat color="#F0F2F5">
                <v-card-title>Reset your Password</v-card-title>
                <v-card-text class="mb-12 text-justify" :class="titleClass">We have sent a reset password request to <span class="accent--text">{{ reset_email }}</span>. Please check your email.</v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    large
                    :loading="loading"
                    @click="submit()"
                    class="mb-2 px-5 white--text global-bg-color"
                  >continue to login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </client-only>
</template>
<script>
  import Global from "~/plugins/mixins/global"
  import imagePath from '~/plugins/mixins/Imagepath'
  import { mapGetters } from 'vuex'
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
      ...mapGetters('login', ['reset_email']),
      titleClass () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return 'subtitle-1 ml-5'
        } else {
          return 'subtitle-2'
        }
      }
    },
    methods: {
      submit () {
        this.goTo('/')
      },
      backHome () {
        this.goTo('/')
      }
    }
  }
</script>
