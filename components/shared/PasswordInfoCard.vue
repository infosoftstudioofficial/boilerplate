<template>
  <v-flex 12>
    <v-card-subtitle>Your password must contain the following below:</v-card-subtitle>
      <v-layout wrap class="ml-5">
        <v-flex xs12>
          <v-icon>mdi-circle-small</v-icon>
          <span class="mb-2" :class="twelve_char ? 'text-decoration-line-through' : ''">Longer than 12 characters</span>
          <v-icon v-if="twelve_char" :class="twelve_char ? 'green--text' : ''" class="ml-2 mb-2">mdi-check-bold</v-icon>
        </v-flex>
        <v-flex xs12>
          <v-icon>mdi-circle-small</v-icon>
          <span class="mb-2"  :class="contains_number ? 'text-decoration-line-through' : ''">Contains number</span>
          <v-icon v-if="contains_number" :class="contains_number ? 'green--text' : ''" class="ml-2 mb-2">mdi-check-bold</v-icon>
        </v-flex>
        <v-flex xs12>
          <v-icon>mdi-circle-small</v-icon>
          <span class="mb-2"  :class="contains_uppercase ? 'text-decoration-line-through' : ''">Contains capital letter</span>
          <v-icon v-if="contains_uppercase" :class="contains_uppercase ? 'green--text' : ''" class="ml-2 mb-2">mdi-check-bold</v-icon>
        </v-flex>
        <v-flex xs12>
          <v-icon>mdi-circle-small</v-icon>
          <span class="mb-2" :class="contains_lowercase ? 'text-decoration-line-through' : ''">Contains lowercase letter</span>
          <v-icon v-if="contains_lowercase" :class="contains_lowercase ? 'green--text' : ''" class="ml-2 mb-2">mdi-check-bold</v-icon>
        </v-flex>
        <v-flex xs12>
          <v-icon>mdi-circle-small</v-icon>
          <span class="mb-2"  :class="contains_special_char ? 'text-decoration-line-through' : ''">Contains special character</span>
          <v-icon v-if="contains_special_char" :class="contains_special_char ? 'green--text' : ''" class="ml-2 mb-2">mdi-check-bold</v-icon>
        </v-flex>
      </v-layout>
  </v-flex>
</template>
<script>
  export default {
    props: {
      twelve_char: {
        type: Boolean,
        default: false
      },
      contains_number: {
        type: Boolean,
        default: false
      },
      contains_uppercase: {
        type: Boolean,
        default: false
      },
      contains_lowercase: {
        type: Boolean,
        default: false
      },
      contains_special_char: {
        type: Boolean,
        default: false
      }
    }
  }
</script>