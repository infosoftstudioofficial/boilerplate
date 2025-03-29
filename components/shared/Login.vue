<template>
<v-layout wrap justify-center align-center>
  <v-flex xs12 sm8 md5 lg4>
    <v-card class="elevation-12 px-2 pt-10">
      <v-layout wrap justify-center align-center>
        <v-flex xs12 class="my-5 break-word primary-text-color text-center">
       
          <img src="~/assets/images/infosoft.png" />

          <span class="global-text-style" :style="$vuetify.breakpoint.smAndDown ? 'font-size: 1.7rem;' : 'font-size: 3rem;'">
          Infosoft</span><br/>
          <span class="global-text-style my-0 py-0">Software development team under Mini Clean Business Solutions</span><br/>
          <span class="global-text-style font-weight-bold my-0 py-0">PHILGEPS Platinum Certified</span>
        </v-flex>
        <v-flex xs12 v-if="message">
          <span class="red--text text-center align-center ml-5">{{ message }}</span>
        </v-flex>
        <v-flex xs12>
          <v-card-text @submit.prevent="login">
            <v-text-field
              outlined
              v-model="form.email"
              label="Email Address"
              prepend-inner-icon="person"
              :error-messages="errors['email']"
              />
            <v-text-field
              outlined
              v-model="form.password"
              label="Password"
              prepend-inner-icon="lock"
              :append-icon="show ? 'visibility_off' : 'visibility'"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
              :error-messages="errors['password']"
            />
            <v-flex>
              <v-btn block large @click="login" class=" global-bg-color white--text">
                LOGIN
            </v-btn>
            </v-flex>
          </v-card-text>
        </v-flex>
      </v-layout>
      
      <v-card-actions>
        <NuxtLink to="/register" class="ml-2">
          Register
        </NuxtLink>
        <v-spacer></v-spacer>

        <NuxtLink to="/forgotpassword" class="mr-2">
          Forgot password
        </NuxtLink>

      </v-card-actions>
      <v-card-actions>
        <v-spacer class="mx-5" />
        <span class="text-right"
        :class="$vuetify.breakpoint.lgAndDown ? 'ml-3 pl-3 caption' : 'ml-2 mr-1 overline'">
          Developed by &nbsp;
        </span>

          <v-avatar
            size="70">
          <v-img
            height="100px"
            width="100px"
            contain
            class="mb-0 px-0 mx-0 mr-2"
            @click="newLink('https://infosoftstudio.com/')"
            :src="'/images/infosoft.png'"/>
          </v-img>
        </v-avatar>
      </v-card-actions>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
  import Global from '~/plugins/mixins/global'
  import { isEmpty } from 'lodash'
  export default {
    mixins: [Global],
    data: () => ({
      form: {
        email: 'admin@admin.com',
        password: 'Infosoft143'
      },
      errors: {},
      show: false,
      message: ''
    }),
    methods: {
      proceedToForgotPass () {
        this.goTo('/forgotpassword')
      },
      proceed () {
        this.goTo('/graphqlsample')
      },
      login () {
        // one method used in nuxt/auth is this.$auth.loginWith (Set current strategy to strategyName and attempt login.
        // Usage varies by current strategy.)
  
        if (!isEmpty(this.form.email) && !isEmpty(this.form.password)) {
          // this.loading = true
          // this.$auth.loginWith('local', {
          //   data: {
          //     ...this.form
          //   }
          // })
          // .then(res => {
          //   this.SET_USER(res.data)
          //   localStorage.setItem('token', res.data.success)
          //   if (res.data.user) {
          //     // if user: false in nuxt.config.js do set user manually
          //     this.$auth.setUser(res.data.user)
          //     this.goTo('/dashboard')
          //   }
          // })
          // .catch(err => {
          //   if (err) {
          //     this.loading = false
          //     if (err.response) {
          //       if (err.response.data.errors) {
          //         this.errors = err.response.data.errors
          //       }
          //     } else {
          //       console.log('err:', err)
          //     }
          //   }
          // }).finally(() => {
          //   this.loading = false
          // })
          if (this.form.email === 'admin@admin.com' && this.form.password === 'Infosoft143') {
            this.goTo('/dashboard')
          } else {
            this.validateForm()
          }
        } else {
          this.validateForm()
        }
      },
      newLink (payload) {
        if (process.client) {
          window.open(payload, '_blank')
        }
      },
      validateForm() {
        this.errors = {}

        if (isEmpty(this.form.email)) {
          this.$set(this.errors, 'email', ['Email is required'])
        }

        if (isEmpty(this.form.password)) {
          this.$set(this.errors, 'password', ['Password is required'])
        }
        
        if (!isEmpty(this.errors.email) || !_.isEmpty(this.errors.password)) {
          // If there are errors, we should not proceed with the next validation
          this.message = ''
          return
        }

        if (this.form.email !== 'admin@admin.com' || this.form.password !== 'Infosoft143') {
          this.message = 'Invalid login credentials.'
        } else {
          this.message = ''
        }
      }
    }
  }
</script>
