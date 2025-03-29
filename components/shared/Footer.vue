<template>
<v-footer absolute>
  <v-layout wrap justify-center align-center
    :class="$vuetify.breakpoint.smAndDown ? 'caption' : ''"
    class="text-center"
  >
    <v-flex xs12>
      ©  {{ new Date().getFullYear() }}-{{ new Date().getFullYear() + 1 }} — <strong>All Rights Reserved</strong>
    </v-flex>
    
    <li class="caption">Developed by</li>
    <v-img 
      priority="high"
      @click="newLink('https://infosoftstudio.com/')"
      class="mx-2 pointer"
      :src="imgs.infosoft_logo" style="max-width: 80px; max-height: 100px;" />
      
    <li class="caption">Powered by Infosfot</li>
  </v-layout>
</v-footer>
</template />
<script>
  import Global from '~/plugins/mixins/global'
  import imagePath from '~/plugins/mixins/Imagepath'
  export default {
    mixins: [
      Global,
      imagePath
    ],
    props: {
      colspan: String
    },
    methods: {
      newLink (payload) {
        if (process.client) {
          window.open(payload, '_blank')
        }
      }
    }
  }
</script>
