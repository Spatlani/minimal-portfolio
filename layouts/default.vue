<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      right
      app
    >
      <v-list>
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
    </v-navigation-drawer>
    <v-app-bar
      color="white"
      flat
      fixed
      app
    >
      <v-toolbar-title class="text-h3 py-2 px-10" v-text="title" />
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app absolute>
      <span>&copy; {{ new Date().getFullYear() }} All Rights Reserved</span>
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
        title: 'Onboardings',
        to: '#onboardings'
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
