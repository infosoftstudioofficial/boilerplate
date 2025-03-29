<template>
  <client-only>
    <v-layout wrap class="mb-5">
      <v-flex xs12 md11>
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
            <v-flex xs12 md11>
              <v-layout wrap justify-center align-center class="mb-12">
                <v-flex xs12>
                  <v-card-title>Register an Account</v-card-title>
                </v-flex>
                <v-flex xs12>
                  <v-layout wrap>
                    <v-flex xs12>
                      <v-layout wrap>
                        <v-flex xs12>
                          <small>Basic Information</small>
                          <v-layout wrap>
                            <v-flex xs12 md3>
                              <small>First Name<span class="pl-1 red--text title">*</span></small>
                              <v-text-field
                                v-model="form.first_name"
                                solo
                                flat
                                dense
                                placeholder="First Name"
                                background-color="#F0F2F7"
                                color="#223345"
                                class="mx-2"
                                :error-messages="errors['first_name']"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12 md3>
                              <small>Middle Name<span class="pl-1 title"></span></small>
                              <v-text-field
                                v-model="form.middle_name"
                                solo
                                flat
                                dense
                                placeholder="Middle Name"
                                background-color="#F0F2F7"
                                color="#223345"
                                class="mx-2"
                                :error-messages="errors['middle_name']"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12 md3>
                              <small>Last Name<span class="pl-1 red--text title">*</span></small>
                              <v-text-field
                                v-model="form.last_name"
                                solo
                                flat
                                dense
                                placeholder="Last Name"
                                background-color="#F0F2F7"
                                color="#223345"
                                class="mx-2"
                                :error-messages="errors['last_name']"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12 md3>
                              <small>Suffix<span class="pl-1 title"></span></small>
                              <v-autocomplete
                                v-model="form.suffix"
                                :items="suffixes"
                                solo
                                flat
                                dense
                                background-color="#F0F2F7"
                                color="#223345"
                                placeholder="Select Suffix"
                                return-string
                                class="mx-2"
                                required
                                :error-messages="errors['suffix']">
                              </v-autocomplete>
                            </v-flex>
                            <v-flex xs12 md6>
                              <small>Contact No. (Please make sure to use your active contact number for application tracking purposes.)<span class="pl-1 red--text title">*</span></small>
                              <v-text-field
                                v-model="form.contact"
                                solo
                                flat
                                dense
                                placeholder="Contact No."
                                background-color="#F0F2F7"
                                color="#223345"
                                v-mask="'###-###-####'"
                                :masked="true"
                                prefix="+63"
                                class="mx-2"
                                :error-messages="errors['contact']"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12 md3>
                              <small>Gender<span class="pl-1 red--text title">*</span></small>
                              <v-radio-group
                                v-model="form.gender"
                                row
                                :error-messages="errors['gender']"
                                class="my-0 py-2"
                              >
                                <v-radio
                                  label="Male"
                                  value="Male"
                                ></v-radio>
                                <v-radio
                                  label="Female"
                                  value="Female"
                                ></v-radio>
                              </v-radio-group>
                            </v-flex>
                            <v-flex xs12 md3>
                              <small>PSN (PhilSys Number)<span class="pl-1 title"></span></small>
                              <v-text-field
                                v-model="form.psn"
                                solo
                                flat
                                dense
                                v-mask="'####-####-####-####'"
                                placeholder="####-####-####-####"
                                background-color="#F0F2F7"
                                color="#223345"
                                class="mx-2"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex xs12>
                          <small class="subtitle-1 font-weight-medium">Address Information</small>
                          <v-layout wrap>
                            <v-flex xs12>
                              <small class="ml-3">Status of Residence in Davao City
                                <span class="pl-1 red--text">*</span><span class="pl-1 red--text title">*</span></small>
                              <v-radio-group
                                v-model="form.is_resident"
                                class="ml-3 my-0 py-2"
                                row>
                                <v-radio label="Resident" :value="1"></v-radio>
                                <v-radio label="Non-Resident" :value="0"></v-radio>
                              </v-radio-group>
                            </v-flex>
                            <v-flex xs12>
                              <small>Owner’s Address (No.,Street)<span class="pl-1 red--text title">*</span></small>
                              <v-text-field
                                v-model="form.complete_address"
                                solo
                                flat
                                dense
                                placeholder="Complete Address"
                                background-color="#F0F2F7"
                                color="#223345"
                                class="mx-2"
                                :error-messages="errors['complete_address']"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12 md4>
                              <small>Country<span class="pl-1 red--text title">*</span></small>
                              <v-autocomplete
                                v-model="form.country"
                                :items="country"
                                solo
                                flat
                                dense
                                :disabled="form.is_resident === 1"
                                background-color="#F0F2F7"
                                color="#223345"
                                placeholder="Select Country"
                                return-object
                                item-text="name"
                                item-value="name"
                                class="mx-2"
                                required
                                :error-messages="errors['country']">
                              </v-autocomplete>
                            </v-flex>
                            <v-flex xs12 md4>
                              <small>Province<span class="pl-1 red--text title">*</span></small>
                              <v-autocomplete
                                v-model="form.province"
                                :items="provinces"
                                solo
                                flat
                                dense
                                :disabled="form.is_resident === 1 || form.country !== 'PHILIPPINES'"
                                background-color="#F0F2F7"
                                color="#223345"
                                placeholder="Select Province"
                                return-string
                                item-text="province"
                                item-value="province"
                                class="mx-2"
                                required
                                :error-messages="errors['province']">
                              </v-autocomplete>
                            </v-flex>
                            <v-flex xs12 md4>
                              <small>City<span class="pl-1 red--text title">*</span></small>
                              <v-autocomplete
                                v-if="form.is_resident === 0"
                                v-model="form.city"
                                :items="cities"
                                solo
                                flat
                                dense
                                return-string
                                :disabled="form.country !== 'PHILIPPINES'"
                                background-color="#F0F2F7"
                                color="#223345"
                                placeholder="Select City"
                                item-text="city"
                                item-value="city"
                                class="mx-2"
                                :error-messages="errors['city']"
                              >
                              </v-autocomplete>
                              <v-text-field
                                v-model="form.city"
                                solo
                                flat
                                dense
                                v-if="form.is_resident === 1"
                                :disabled="form.is_resident === 1"
                                placeholder="City"
                                background-color="#F0F2F7"
                                color="#223345"
                                class="mx-2"
                                :error-messages="errors['city']"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12 md4
                              v-if="form.is_resident === 1">
                              <small>District<span class="pl-1 red--text title">*</span></small>
                              <v-autocomplete
                                v-model="form.district_id"
                                :items="districtItems"
                                solo
                                flat
                                dense
                                return-object
                                background-color="#F0F2F7"
                                color="#223345"
                                placeholder="Select District"
                                item-text="name"
                                item-value="name"
                                class="mx-2"
                                :error-messages="errors['district']"
                              >
                              </v-autocomplete>
                            </v-flex>
                            <v-flex xs12 md4>
                              <small>Barangay<span class="pl-1 red--text title">*</span></small>
                              <v-autocomplete
                                v-model="form.barangay"
                                :items="barangays"
                                solo
                                flat
                                dense
                                :disabled="form.country !== 'PHILIPPINES'"
                                return-string
                                background-color="#F0F2F7"
                                color="#223345"
                                placeholder="Select Barangay"
                                item-text="name"
                                item-value="name"
                                class="mx-2"
                                :error-messages="errors['barangay']"
                              >
                              </v-autocomplete>
                            </v-flex>
                            <v-flex xs12 md4>
                              <small>Zip Code<span class="pl-1 red--text title">*</span></small>
                              <v-text-field
                                v-model="form.zipcode"
                                solo
                                flat
                                dense
                                background-color="#F0F2F7"
                                color="#223345"
                                class="mx-2"
                                :error-messages="errors['zipcode']"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex xs12>
                      <small class="subtitle-1 font-weight-bold">Account Information</small>
                      <v-layout wrap>
                        <v-flex xs12 md6>
                          <small>Email Address<span class="pl-1 red--text title">*</span></small>
                          <v-text-field
                            solo
                            flat
                            dense
                            autocomplete="off"
                            v-model="form.email"
                            background-color="#F0F2F7"
                            color="#223345"
                            class="mx-2"
                            prepend-inner-icon="email"
                            @keyup.enter="submit()"
                            :error-messages="errors['email']"
                          />
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex xs12>
                      <v-layout wrap>
                        <v-flex xs12>
                          <shared-password-info-card
                            :twelve_char="twelve_char"
                            :contains_number="contains_number"
                            :contains_uppercase="contains_uppercase"
                            :contains_lowercase="contains_lowercase"
                            :contains_special_char="contains_special_char"
                          />
                        </v-flex>
                        <v-flex xs12 md6>
                          <small>Password<span class="pl-1 red--text title">*</span></small>
                          <v-text-field
                            solo
                            flat
                            dense
                            background-color="#F0F2F7"
                            @keyup.enter="submit()"
                            autocomplete="off"
                            :append-icon="show ? 'visibility_off' : 'visibility'"
                            :type="show ? 'text' : 'password'"
                            @click:append="show = !show"
                            v-model="password"
                            light
                            class="mx-2"
                            prepend-inner-icon="lock"
                            :error-messages="errors['password']"
                            :rules="[rules.required, rules.min, rules.strength]"
                            @input="checkPassword(password)"
                            :color="score(password).color"
                          />
                        </v-flex>
                        <v-flex xs12 md6>
                          <small>Confirm Password<span class="pl-1 red--text title">*</span></small>
                          <v-text-field
                            solo
                            flat
                            dense
                            background-color="#F0F2F7"
                            @keyup.enter="submit()"
                            autocomplete="off"
                            :append-icon="show1 ? 'visibility_off' : 'visibility'"
                            :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1"
                            v-model="confirm_password"
                            light
                            class="mx-2"
                            prepend-inner-icon="lock"
                            :error-messages="errors['confirm_password']"
                            :rules="[rules.required, rules.min, rules.strength]"
                            :color="score(confirm_password).color"
                          />
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      large
                      width="100px"
                      :disabled="loading"
                      :loading="loading"
                      @click="submit()"
                      class="mb-2 px-5 global-bg-color white--text"
                    >Submit
                    </v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

      <shared-footer />
    </v-layout>
  </client-only>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  import Country from '~/plugins/mixins/address/country'
  import ProvincesConstants from '~/plugins/mixins/address/provinces'
  import BarangaysConstants from '~/plugins/mixins/address/barangays'
  import constants from '~/plugins/mixins/constants'
  import { isUndefined, isEmpty, findIndex } from 'lodash'
  import security from '~/plugins/mixins/security'
  import zxcvbn from 'zxcvbn'
  export default {
    mixins: [
      Global,
      Country,
      BarangaysConstants,
      ProvincesConstants,
      constants,
      security
    ],
    data: () => ({
      email: '',
      errors: {},
      loading: false,
      show: false,
      show1: false,
      form: {
        is_resident: 1,
        city: 'Davao City'
      },
      dialog: false,
      cities: [],
      barangays: [],
      twelve_char: false,
      contains_number: false,
      contains_uppercase: false,
      contains_lowercase: false,
      contains_special_char: false
    }),
    computed: {
      ...mapGetters('user', ['user']),
      titleClass () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return 'subtitle-1 ml-5'
        } else {
          return 'subtitle-2'
        }
      },
      brgyChoices () {
        if (this.form.district_id) {
          let items = this.brgyItems.filter(item => item.district_id === Number(this.form.district_id.id))
          return items
        } else {
          return []
        }
      }
    },
    watch: {
      form: {
        handler (val) {
          if (val.is_resident === 1) {
            this.$set(this.form, 'country', 'PHILIPPINES')
            this.$set(this.form, 'province', 'DAVAO DEL SUR')
            this.$set(this.form, 'city', 'CITY OF DAVAO')
            this.setProvince()
            if (val.district_id) {
              this.$set(this.form, 'district', val.district_id.name)
              this.barangays = this.brgyChoices
            }
          }
          if (val.province) {
            this.setProvince()
          }
        },
        deep: true
      }
    },
    methods: {
      checkResidency () {
        if (this.form.is_resident === 1) {
          this.$set(this.form, 'country', 'PHILIPPINES')
          this.$set(this.form, 'province', 'DAVAO DEL SUR')
          this.$set(this.form, 'city', 'CITY OF DAVAO')
        } else {
          this.$set(this.form, 'province', '')
          this.$set(this.form, 'city', '')
          this.$set(this.form, 'district_id', '')
        }
      },
      proceed () {
        this.dialog = false
      },
      cancel () {
        this.dialog = false
        this.goTo('index')
      },
      submit () {
        this.$set(this.form, 'password', this.password)
        this.$set(this.form, 'confirm_password', this.confirm_password)
        this.loading = true
        const inputs = new FormData()
        for (const [key, value] of Object.entries(this.form)) {
          inputs.append(key, String(value))
        }
        this.$set(inputs, 'api', 'register')
        this.$set(inputs, 'zipcode', '8000')
        this.$set(inputs, 'password', this.password)
        this.$set(inputs, 'confirm_password', this.confirm_password)
        inputs.append('file_upload', this.form.file_upload)
        this.POST_API(inputs).then(res => {
          this.errors = {}
          this.verify({ api: `verify/${res.data.user.id}` })
        }).catch(err => {
          this.loading = false
          if (err) {
            if (err.response.data.error) {
              this.errors = err.response.data.error
            }
            if (err.response.data.errors) {
              this.errors = err.response.data.errors
            }
          }
        })
      },
      verify (payload) {
        this.POST_API(payload).then(res => {
          this.goTo('index-validate')
        }).catch(err => {
          if (err) {
            console.log(err)
          }
        }).finally(() => {
          this.loading = false
        })
      },
      backHome () {
        this.goTo('/')
      },
      setProvince () {
        if (this.form.province) {
          this.barangays = []
          let index = _.findIndex(this.provinces, { province: String(this.form.province) })
          if (index !== -1) {
            this.cities = []
            for (let index2 of Object.keys(this.provinces[index].cities)) {
              this.cities.push(this.provinces[index].cities[index2])
            }
            let cindex = findIndex(this.cities, { city: String(this.form.city) })
            if (cindex !== -1) {
              this.barangays = this.cities[cindex].barangays
            } else {
              this.barangays = this.brgyChoices
            }
          }
        } else {
          this.barangays = this.brgyChoices
        }
      },
      validateDialog () {
        this.dialog = true
      },
      setFileData (payload) {
        this.$set(this.form, 'file_upload', payload)
        this.$set(this.form, 'name', 'PRC ID and PTR (recent) with 3 signature specimen')
        this.$set(this.form, 'file_name', payload.name)
      }
    },
    created () {
      // this.checkResidency()
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // vm.validateDialog()
      })
    }
  }
</script>
