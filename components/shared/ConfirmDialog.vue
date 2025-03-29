<template>
  <v-dialog
    :value="dialog"
    persistent
    :scrollable="hasDocuments ? true : false"
    :max-width="dialogWidth ? dialogWidth : 420"
  >
    <v-card class="pb-3">
      <v-card tile flat class="py-1" color="global-bg-color">
      </v-card>
      <v-card-title class="text-h5">
        <v-layout wrap justify-center align-center>
          <v-icon x-large
          :color="color"
          class="text-center justify-center"
          >{{icon ? icon : 'mdi-check-circle-outline'}}</v-icon>
        </v-layout>
      </v-card-title>
      <v-card-text class="text-center break-word">{{ message }}</v-card-text>
      <v-card-text
        :style="cardStyle"
        v-if="hasDocuments">
        <v-layout wrap>
          <v-flex :class="item.flex"
            v-for="(item, index) in docsItems" :key="index">
            <span class="font-weight-regular" v-show="item.title">{{ item.title }}</span>
            <span class="font-weight-regular"v-show="item.file_name">The <span class="font-weight-bold">{{ item.file_name }}</span> file have been changed as of <span class="font-weight-bold">{{ item.date }}.</span></span>
            <span class="font-weight-regular"v-show="item.email">Email sent to <span class="font-weight-bold">{{ item.profession }}</span> with email address <span class="font-weight-bold">{{ item.email }}.</span></span>
            <v-layout wrap class="ml-3">
              <v-flex :class="item.flex"
                v-for="(itemList, indexList) in item.items" :key="indexList">
                <small class="subtitle-2 font-weight-bold">{{ indexList + 1 }}. {{ itemList.text }}</small>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-text
        :style="cardStyle"
        v-if="hasFileDocuments">
        <v-layout wrap>
          <v-flex :class="item.flex"
            v-for="(item, index) in docsItems" :key="index">
            <span class="font-weight-regular" v-show="item.title">{{ item.title }}</span>
            <v-layout wrap class="ml-3">
              <v-btn
                class="global-bg-color white--text"
                depressed
                :href="item.link"
                target="_blank"
                @click="newLink(item.link)"
              >
                Download File<v-icon right>mdi-tray-arrow-down</v-icon>
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <small class="break-word"
          v-show="hasAppTitle">
          <p class="mb-0">Application No:</p>
          <strong class="ml-1">{{ tableAppNo }}</strong>
        </small>
        <v-spacer />
        <v-btn
          v-if="hasClose"
          class="global-text-style"
          text
          @click="$emit('close')"
        >
          
          {{ isCancel ? 'Cancel' : 'Close' }}
        </v-btn>
        <v-btn
          v-if="hasExport"
          class="global-bg-color white--text"
          depressed
          :href="link"
          target="_blank"
          @click="newLink(link)"
        >
          Download Form<v-icon right>mdi-tray-arrow-down</v-icon>
        </v-btn>
        <v-btn
          v-if="haschooseTitle"
          :class="openColor ? openColor : 'global-text-style'"
          text
          :loading="hasChooseLoading"
          :outlined="isOutlined"
          @click="$emit('choose')"
        >
          {{ openTitle }} <v-icon v-if="haschooseIcon" right>{{ chosenIcon }}</v-icon>
        </v-btn>
        <v-btn
          v-if="hasConfirm"
          :class="confirmClass ? confirmClass : 'white--text global-bg-color'"
          depressed
          :loading="hasConfirmLoading"
          :outlined="isOutlined"
          :width="btnWidth ? btnWidth : ''"
          @click="$emit('proceed')"
        ><template v-slot:loader>
          <span v-if="hasSlotLoader">{{ slotLoaderTitle }}</span>
        </template>
          {{ isConfirm ? 'Confirm' : 'Proceed' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
  	props: {
      dialog: {
        type: Boolean,
        default: false
      },
      message: String,
      color: String,
      hasClose: {
        type: Boolean,
        default: false
      },
      icon: String,
      isConfirm: {
        type: Boolean,
        default: false
      },
      hasConfirm: {
        type: Boolean,
        default: false
      },
      dialogWidth: {
        type: Number,
        default: 400
      },
      hasExport: {
        type: Boolean,
        default: false
      },
      link: String,
      isOutlined: {
        type: Boolean,
        default: false
      },
      btnWidth: Number,
      hasDocuments: {
        type: Boolean,
        default: false
      },
      hasFileDocuments: {
        type: Boolean,
        default: false
      },
      docsItems: {
        type: [Array, Object]
      },
      haschooseTitle: {
        type: Boolean,
        default: false
      },
      openTitle: String,
      icon: String,
      confirmClass: String,
      count: Number,
      hasAppTitle: {
        type: Boolean,
        default: false
      },
      tableAppNo: String,
      tableAppType: String,
      openColor: String,
      chosenIcon: String,
      hasConfirmLoading: {
        type: Boolean,
        default: false
      },
      hasChooseLoading: {
        type: Boolean,
        default: false
      },
      haschooseIcon: {
        type: Boolean,
        default: false
      },
      isCancel: {
        type: Boolean,
        default: false
      },
      hasSlotLoader: {
        type: Boolean,
        default: false
      },
      slotLoaderTitle: String
  	},
    methods: {
      newLink (payload) {
        if (process.client) {
          window.open(payload, '_blank')
        }
      }
    },
    computed: {
      cardStyle () {
        if (this.count > 7) {
          return 'height: 500px'
        } else {
          return 'height: 200px'
        }
      }
    }
  }
</script>
