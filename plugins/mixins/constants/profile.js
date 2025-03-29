import { mapGetters } from 'vuex'
import { isEmpty, isUndefined, isNull } from 'lodash'
export default {
  computed: {
    ...mapGetters('events', ['user']),
    name_initials () {
      if (!isEmpty(this.user)) {
        if (!isUndefined(this.user.client)) {
          return this.user.client ? `${this.user.client.first_name} ${this.user.client.last_name}` : this.user.user.name
        } else {
          return this.user.user.client ? this.user.user.client.name : this.user.user.name
        }
      } else {
        return ''
      }
    },
    name () {
      if (!isEmpty(this.user)) {
        if (!isUndefined(this.user.client)) {
          return this.user.client ? `${this.user.client.first_name} ${this.user.client.middle_name ? this.initialLetter(this.user.client.middle_name) : ''}${this.user.client.middle_name ? '.' : ''} ${this.user.client.last_name} ${ !isNull(this.user.client.suffix) ? this.user.client.suffix : ''}` : this.user.user.name
        } else {
          return this.user.user.client ? this.user.user.client.name : this.user.user.name
        }
      } else {
        return ''
      }
    },
    email () {
      if (!isEmpty(this.user)) {
        return this.user ? this.user.email : ''
      }
    },
    role_name () {
      if (!isEmpty(this.user)) {
        return this.user.role ? this.user.role.role : ''
      }
    },
    roleId () {
      // let user = null
      // if (process.client) {
      //   const token = localStorage.getItem('token')
      //   if (!isEmpty(localStorage.vuex)) {
      //     user = JSON.parse(localStorage.vuex).user.user
      //   }
      //   if (!isEmpty(user) && token) {
      //     return Number(JSON.parse(localStorage.vuex).user.user.user.role_id)
      //   } else {
      //     return null
      //   }
      // } else {
      //   return null
      // }
      return null
    }
  }
}
