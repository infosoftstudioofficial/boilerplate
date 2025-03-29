<template>
  <div class="text-center form-z-index">
    <client-only>
      <v-menu
        v-model="menu"
        offset-x
        transition="slide-y-transition"
        persistent
        bottom
        right
        :close-on-click="false"
        :close-on-content-click="false"
        :nudge-bottom="60"
        max-width="450px"
      >
        <template v-slot:activator="{ on }">
          <v-toolbar-items  
            v-on="on"
            class="ma-0 pa-0 pointer"
            >
            <v-list
              class="ma-0 pa-0">
              <v-list-item
               class="ma-0 pa-0">
              <v-avatar
                class="pa-1 global-bg-color"
                size="42"
              >
                <span v-if="wordCount(name_initials) > 3" class="pa-2 white--text caption">{{ initialLetter(name_initials) }}</span>
                <span v-if="wordCount(name_initials) < 4" class="pa-2 white--text text-h7">{{ initialLetter(name_initials) }}</span>
              </v-avatar>
              <v-icon right v-show="!menu">keyboard_arrow_down</v-icon>
              <v-icon right v-show="menu">keyboard_arrow_up</v-icon>
            </v-list-item>
            </v-list>
          </v-toolbar-items>
        </template>
        <v-card>
          <v-list>  
            <v-list-item>
              <v-avatar
                class="pa-1 global-bg-color white--text"
                size="70">
                <span v-if="wordCount(name) > 3" class="pa-2 white--text caption">{{  
                initialLetter(name) }}</span>
                <span v-if="wordCount(name) < 4" class="pa-2 white--text text-h7">{{ initialLetter(name) }}</span>
              </v-avatar>
              </v-avatar>
              <v-list-item-content class="pl-3">
                <v-list-item-title class="font-weight-medium">{{ textCapitalize(name) }}</v-list-item-title>
                <v-list-item-subtitle class="caption">{{ role_name === 'Applicant' ? textCapitalize(applicant_role_type) : role_name }}</v-list-item-subtitle>
                <v-list-item-subtitle class="caption">{{ email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item class="pointer log-menu"
              v-if="roleId !== 3 && roleId !== 2 && roleId !== 5 && roleId !== 6 && roleId !== 7 && roleId !== 8 && roleId !== 9"
              @click.enter="viewChangePass">
              <v-list-item-action>
                <v-icon large>mdi-lock</v-icon>
              </v-list-item-action>
              <v-list-item-title class="grey--text font-weight-medium">Change Password</v-list-item-title>
            </v-list-item>

            <v-list-item class="pointer log-menu"
              v-if="roleId === 3"
              @click.enter="goToProfile">
              <v-list-item-action>
                <v-icon large>mdi-account-box</v-icon>
              </v-list-item-action>
              <v-list-item-title class="grey--text font-weight-medium">My Profile</v-list-item-title>
            </v-list-item>

            <v-list-item class="pointer log-menu"
              @click="dialog = true, menu = false">
              <v-list-item-action>
                <v-icon large>mdi-logout-variant</v-icon>
              </v-list-item-action>
              <v-list-item-title class="grey--text font-weight-medium">Log out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </client-only>

  <shared-confirm-dialog
    :dialog="dialog"
    @proceed="logout()"
    @close="dialog = false"
    message="Are you sure you want to log out ?"
    color="global-bg-color"
    :hasConfirm="true"
    :hasClose="true"
    :isOutlined="true"
    icon="mdi-logout"
  />

  <shared-password-dialog
    :dialog="passDialog"
    :dialogWidth="600"
    @change="changePassword"
    @close="closePassDialog"
    color="global-bg-color"
    icon="mdi-lock"
    :accountErrors="accountErrors"
    :loading="passLoading"
  />
    <shared-snackbar
      :snack="snackbar"
      :color="color"
      :message="snackMsg"
      @close="snackbar = false"
    />

    <shared-confirm-dialog
      :dialog="confirmDialog"
      @close="confirmDialog = false"
      :message="confirmMessage"
      :color="colorStatus"
      :hasClose="true"
      :icon="confirmIcon"
    />
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import Global from '~/plugins/mixins/global'
  import profile from '~/plugins/mixins/constants/profile'
  import { isString, omit } from 'lodash'
  export default {
    mixins: [
      Global,
      profile
    ],
    data: () => ({
      dialog: false,
      menu: false,
      passDialog: false,
      accountErrors: {},
      passLoading: false,
      snackbar: false,
      color: '',
      snackMsg: ''
    }),
    computed: {
      ...mapGetters('events', ['user'])
    },
    methods: {
      ...mapActions('events', ['POST_API']),
      viewChangePass () {
        this.menu = false
        this.passDialog = true
      },
      closePassDialog () {
        this.passDialog = false
      },
      changePassword (val) {
        this.snackbar = false
        if (val.password && val.confirm_password) {
          let payload = {
            api: 'admin/change/password',
            ...val,
            id: this.user.user.id
          }
          // edit here
          this.POST_API(payload).then(res => {
            this.closePassDialog()
            this.snackbar = true
            this.color = 'success'
            this.snackMsg = 'Password changed successfully.'
            if (res.data) {
              this.$set(this.user, 'is_password_weak', res.data.is_password_weak)
            }
          }).catch(err => {
            if (err) {
              if (err.response) {
                if (err.response.status !== 422 && err.response.status !== 400 && err.response.status !== 409) {
                  this.passDialog = false
                  let inputs = {
                    api: 'admin/change/password',
                    id: this.user.user.id
                  }
                  this.errorResponses(err, JSON.stringify(inputs))
                } else {
                  if (err.response.data.error) {
                    this.passDialog = true
                    if (err.response.data.error === 'Old password is incorrect.') {
                      this.accountErrors['old_password'] = err.response.data.error
                      if (isString(err.response.data.error)) {
                        let errData = omit(this.accountErrors, 'password', 'confirm_password')
                        this.accountErrors = errData
                      }
                    } else {
                      this.accountErrors = err.response.data.error
                    }
                  } else {
                    this.snackbar = true
                    this.color = 'error'
                    this.snackMsg = 'There must be a problem updating your password. Please refer to your system administrator.'
                  }
                }
              }
            }
          }).finally(() => {
          })
        } else {
          this.passDialog = true
          this.accountErrors['password'] = 'Password field is required'
          this.accountErrors['confirm_password'] = 'Confirm Password field is required'
        }
      },
      goToProfile () {
        this.menu = false
        this.goTo('/dashboard')
      },
      logout () {
        this.$nextTick(function () {
          this.Logout()
        })
        this.goTo('/')
      }
    }
  }
</script>
