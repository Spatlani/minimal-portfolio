<template>
  <v-dialog v-if="dialog" max-width="600" :value="!!dialog" @input="closeDialog">
    <v-card :color="dialog.color" flat class="rounded">
      <v-card-text class="pa-6">
        <div class="text-overline mb-3">
          <v-row justify="space-between">
            <v-col cols="auto">
              {{ dialog.from }} - {{ dialog.to }}
            </v-col>
            <v-col cols="5">
              {{ dialog.location }}
            </v-col>
          </v-row>
        </div>
        <p class="text-h5 text--primary">
          {{ dialog.role }}
        </p>
        <v-row justify="center">
          <v-col cols="12">
            <ul>
              <li v-for="(resp, respIndex) in dialog.responsibilities" :key="respIndex">
                {{ resp }}
              </li>
            </ul>
          </v-col>
        </v-row>

        <v-row align="center" justify="space-between">
          <v-col cols="auto" class="pl-6">
            <a :href="dialog.url" target="_blank" class="text-decoration-none">
              <v-img
                :src="logoSrc(dialog.logo)"
                max-width="250"
                max-height="50"
                contain
                position="left"
              />
            </a>
          </v-col>
          <v-col cols="2">
            <v-btn x-small text fab :href="dialog.url" target="_blank">
              <v-icon>
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-row align="center" justify="center">
          <v-col cols="auto">
            <v-btn color="white red--text" elevation="0" x-small @click="closeDialog">
              Close
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'WorkDialog',

  computed: {
    ...mapGetters({
      dialog: 'dialog/dialog'
    })
  },

  methods: {
    logoSrc (logo) {
      return require(`@/assets/logos/${logo}`)
    },

    closeDialog () {
      this.hideDialog()
    },

    ...mapActions({
      hideDialog: 'dialog/hideDialog'
    })
  }
}
</script>

<style scoped>
.v-card__title {
  word-break: break-word;
}
</style>
