import { isEmpty, isUndefined, isNumber, isNull, capitalize } from "lodash"
export default {
  data () {
    return {
      confirmIcon: '',
      colorStatus: '',
      confirmMessage: '',
      confirmDialog: false
    }
  },
  methods: {
    goTo (route) {
      this.$router.push(route)
    },
    wordCount (val) {
      if (!isEmpty(val) || !isUndefined(val)) {
        if (isNumber(val)) {
          const num = val
          const len = Math.floor(Math.log10(num)) + 1
          return len
        } else {
          const lowerLabel = val.toLowerCase()
          const splitLabel = lowerLabel.split(' ')
          return splitLabel.length
        }
      } else {
        return 0
      }
    },
    initialLetter (item) {
      if (!isNull(item) && !isUndefined(item)) {
        const splitName = item.split(' ')
        const initial = splitName.map((word) => {
          if (word) {
            return word[0].toUpperCase()
          } else {
            return word
          }
        })
        const joinName = initial.join('')
        if (isUndefined(joinName)) {
          const joinName = initial.join(' ')
          const replaceName = joinName.replaceAll(' ', '')
          return `${replaceName}`
        } else {
          return `${joinName}`
        }
      } else {
        return ''
      }
    },
    getActive (val, idx) {
      return {
        'active': Number(val) === Number(idx),
        'white--text': Number(val) === Number(idx),
        'menu': Number(val) === Number(idx)
      }
    },
    textCapitalize (value) {
      if (!value) return ''
      value = capitalize(value)
      let str = value.split(' ')
       for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
      }
      return str.join(' ')
    }
  }
}
