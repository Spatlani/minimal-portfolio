<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      right
      temporary
      app
    >
      <v-row align="center" justify="center" :class="{ 'fill-height': $vuetify.breakpoint.smAndUp }">
        <v-list class="height-max-content">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold" :class="{ 'text-h6 py-3' : $vuetify.breakpoint.xs, 'text-h5 py-2' : !$vuetify.breakpoint.xsAndUp }" v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-row>
    </v-navigation-drawer>
    <v-app-bar
      color="white"
      flat
      fixed
      app
      outlined
      elevate-on-scroll
    >
      <v-toolbar-title class="text-h3 pa-2" @click="scrollTo('#top')" v-text="title" />
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main id="top">
      <Nuxt />
    </v-main>
    <v-footer dark app absolute>
      <v-row class="caption" justify="space-between" no-gutters>
        <v-col cols="auto">
          Made with ❤️ in India
        </v-col>
        <v-col cols="auto">
          &copy; {{ new Date().getFullYear() }} All Rights Reserved
        </v-col>
      </v-row>
    </v-footer>
    <work-dialog />
  </v-app>
</template>

<script>
import goTo from 'vuetify/lib/services/goto'
import WorkDialog from '@/components/Dialog.vue'

export default {
  name: 'DefaultLayout',

  components: {
    WorkDialog
  },

  data () {
    return {
      drawer: false,
      items: [{
        title: 'About',
        to: '#about'
      }, {
        title: 'Implementations',
        to: '#implementations'
      }, {
        title: 'Work',
        to: '#work'
      }, {
        title: 'Tools',
        to: '#tools'
      }, {
        title: 'Passion',
        to: '#passion'
      }, {
        title: 'Recommendations',
        to: '#recommendations'
      }, {
        title: 'Education',
        to: '#education'
      }, {
        title: 'Certifications',
        to: '#certifications'
      }, {
        title: 'Contact',
        to: '#contact'
      }],
      title: 'RR'
    }
  },

  methods: {
    scrollTo (target) {
      const options = {
        offset: 0,
        duration: 500,
        easing: 'easeInOutCubic',
        behavior: 'smooth'
      }
      return goTo(target, options)
    }
  }
}
</script>

<style>
.height-max-content {
  height: max-content;
}
</style>
