<template>
  <v-dialog
    :value="dialog"
    persistent
    :max-width="dialogWidth ? dialogWidth : 500"
  >
    <v-card class="pb-2">
      <v-card tile flat class="py-1" color="primary-bg-color">
      </v-card>
      <v-card-title class="text-h5">
        <v-layout wrap justify-center align-center>
          <v-icon x-large
            :color="color"
            class="text-center justify-center"
            >{{icon ? icon : 'mdi-check-circle-outline'}}</v-icon>
          </v-layout>
      </v-card-title>
      <v-card-text class="text-center break-word">Change Password</v-card-text>
      <v-card-text v-show="isPassSecurity" class="text-center break-word subtitle-1 font-weight-bold">{{ passTitle }}</v-card-text>
      <v-card-text>
        <v-layout wrap>
          <v-flex xs12>
            <small>Old Password<span class="pl-1 title"></span></small>
            <v-text-field
              solo
              flat
              dense
              background-color="#F0F2F7"
              color="#223345"
              autocomplete="off"
              :append-icon="showOld ? 'visibility_off' : 'visibility'"
              :type="showOld ? 'text' : 'password'"
              @click:append="showOld = !showOld"
              v-model="form.old_password"
              light
              class="mx-2"
              prepend-inner-icon="lock"
              :error-messages="accountErrors['old_password']"
            />
          </v-flex>
          <v-flex xs12>
            <shared-password-info-card
              :twelve_char="twelve_char"
              :contains_number="contains_number"
              :contains_uppercase="contains_uppercase"
              :contains_lowercase="contains_lowercase"
              :contains_special_char="contains_special_char"
            />
          </v-flex>
          <v-flex xs12 :md6="isPassSecurity">
            <small>Create New Password<span class="pl-1 title"></span></small>
            <v-text-field
              solo
              flat
              dense
              background-color="#F0F2F7"
              :color="score(form.password).color"
              autocomplete="off"
              :append-icon="show ? 'visibility_off' : 'visibility'"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
              v-model="form.password"
              light
              class="mx-2"
              prepend-inner-icon="lock"
              @input="checkPassword(form.password)"
              :error-messages="accountErrors['password']"
            />
          </v-flex>
          <v-flex xs12 :md6="isPassSecurity">
            <small>Confirm Password<span class="pl-1 title"></span></small>
            <v-text-field
              solo
              flat
              dense
              background-color="#F0F2F7"
              :color="score(form.confirm_password).color"
              @keyup.enter="save"
              autocomplete="off"
              :append-icon="show1 ? 'visibility_off' : 'visibility'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
              v-model="form.confirm_password"
              light
              class="mx-2"
              prepend-inner-icon="lock"
              :error-messages="accountErrors['confirm_password']"
            />
          </v-flex>
          <v-flex xs12>
            <v-card-actions class="mt-6">
              <v-spacer />
              <v-btn
                class="primary-text-color"
                text
                @click="close">
                Close
              </v-btn>
              <v-btn
                text
                light
                :disabled="isFieldEmpty"
                :loading="loading"
                @click="save"
                :class="isFieldEmpty ? '' : 'white--text primary-bg-color'">
                <v-icon small right>mdi-content-save</v-icon>
                Save New Password
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
  import securityMixins from '~/plugins/mixins/security'
  export default {
    mixins: [
      securityMixins
    ],
    props: {
      dialog: {
        type: Boolean,
        default: false
      },
      color: String,
      dialogWidth: {
        type: Number,
        default: 400
      },
      icon: String,
      count: Number,
      loading: {
        type: Boolean,
        default: false
      },
      accountErrors: {
        type: Object
      },
      isPassSecurity: {
        type: Boolean,
        default: false
      },
      passTitle: String
    },
    data () {
      return {
        form: {
          password: '',
          confirm_password: ''
        },
        defaultForm: {
          password: '',
          confirm_password: ''
        },
        show: false,
        show1: false,
        showOld: false
      }
    },
    computed: {
      isFieldEmpty () {
        return !this.form.password || !this.form.confirm_password || !this.form.old_password
      }
    },
    methods: {
      close () {
        this.$emit('close')
        this.form = Object.assign({}, this.defaultForm)
      },
      save () {
        this.$emit('change', this.form)
      }
    }
  }
</script>
