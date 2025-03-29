import zxcvbn from 'zxcvbn'
export default {
  data: () => ({
    rules: {
      required: value => !!value || 'Enter a password',
      min: v => v.length >= 12 || 'Use 12 characters or more for your password',
      strength: v => zxcvbn(v).score >= 3 || 'Please choose a stronger password. Try a mix of letters, numbers, and symbols.'
    },
    password: '',
    confirm_password: '',
    twelve_char: false,
    contains_number: false,
    contains_uppercase: false,
    contains_lowercase: false,
    contains_special_char: false
  }),
  methods: {
    checkPassword (password) {
      //check password length
      this.twelve_char = password.length >= 12;

      //password regex tests
      const NUMBER = /\d/;
      const UPPERCASE = /[A-Z]/;
      const LOWERCASE = /[a-z]/;
      const SPECIAL_CHAR = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

      this.contains_number = NUMBER.test(password)
      this.contains_uppercase = UPPERCASE.test(password)
      this.contains_lowercase = LOWERCASE.test(password)
      this.contains_special_char = SPECIAL_CHAR.test(password)

      //check password is valid
      this.valid_password =
        this.twelve_char &&
        this.contains_special_char &&
        this.contains_uppercase &&
        this.contains_lowercase &&
        this.contains_number
    },
    score (password) {
      const result = zxcvbn(password)

      switch (result.score) {
        case 4:
          return {
            color: "light-blue",
            value: 100,
            hint: 'Password is Strong'
          }
        case 3:
          return {
            color: "light-green",
            value: 75,
            hint: 'Password is Medium'
          }
        case 2:
          return {
            color: "yellow",
            value: 50,
            hint: 'Password is Average'
          }
        case 1:
          return {
            color: "orange",
            value: 25,
            hint: 'Password is Poor'
          }
        default:
          return {
            color: "red",
            value: 0,
            hint: 'Password is Weak'
          }
      }
    }
  }
}
