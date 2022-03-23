<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      right
      floating
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
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
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
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} All Rights Reserved</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Work',
          to: '#work'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Passion',
          to: '#passion'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Contact',
          to: '#contact'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Ruchi Raj'
    }
  }
}
</script>
