<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      right
      temporary
      app
    >
      <v-row align="center" justify="center" class="fill-height">
        <v-list class="height-max-content">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-content>
              <v-list-item-title class="text-h5 py-4 font-weight-bold" v-text="item.title" />
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
    >
      <v-row align="center" justify="space-between" no-gutters>
        <v-col cols="auto">
          <v-toolbar-title class="text-h3 pa-2" v-text="title" />
        </v-col>
        <v-col cols="auto">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app absolute>
      <v-row class="caption" justify="space-between" no-gutters>
        <v-col cols="auto">
          Made with ❤️ in India
        </v-col>
        <v-col cols="auto">
          &copy; {{ new Date().getFullYear() }} All Rights Reserved
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import goTo from 'vuetify/lib/services/goto'

export default {
  name: 'DefaultLayout',
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
        title: 'Passion',
        to: '#passion'
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
        offset: -70,
        duration: 500,
        easing: 'easeInOutCubic'
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
