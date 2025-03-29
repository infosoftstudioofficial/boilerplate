<template>
  <v-flex xs12>
    <v-img
      priority="high"
      width="100%"
      :height="heightClass"
      contain
      alt="INFOSOFT"
      :src="no_bg_logo">
    </v-img>
  <p class="mb-12 mt-3 font-weight-medium text-center"
    :style="fontStyle"
    :class="titleClass">Infosoft</p>
  </v-flex>
</template>
<script>
  import imagePath from '~/plugins/mixins/Imagepath'
  export default {
    mixins: [
      imagePath
    ],
    props: {
      fontStyle: String
    },
    computed: {
      heightClass () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return '150px'
        } else {
          return '100px'
        }
      },
      titleClass () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return 'title'
        } else {
          return 'subtitle-1'
        }
      }
    }
  }
</script>
