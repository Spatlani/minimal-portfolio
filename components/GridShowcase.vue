<template>
  <v-row justify="center">
    <v-col v-for="item in items" :key="item.logo" md="2" cols="4">
      <v-card height="200" outlined>
        <v-card-text class="pa-2">
          <v-img :height="height" contain :src="logoSrc(item.logo)" :lazy-src="logoSrc(item.logo)" />
          <p class="caption mb-0 text-center">
            {{ item.title }}
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'GridShowcase',

  data: () => ({
    items: [{
      logo: 'zendesk.svg',
      title: 'Help-desk, knowledge database, and customer queries'
    }, {
      logo: 'hubspot.png',
      title: 'CRM for managing the on-boarding and campaigns'
    }, {
      logo: 'intercom.svg',
      title: 'CRM'
    }, {
      logo: 'monday.webp',
      title: 'Project management, implementation'
    }, {
      logo: 'mandrill.png',
      title: 'Subscription status'
    }, {
      logo: 'stripe.svg',
      title: 'Manage subscriptions and payments'
    }, {
      logo: 'jira.webp',
      title: 'Bugs and features'
    }, {
      logo: 'trello.svg',
      title: 'Assigning tasks to team'
    }, {
      logo: 'salesforce.svg',
      title: 'Fetch leads to initiate product demonstration and transfer product knowledge'
    }, {
      logo: 'shopify.png',
      title: 'Managing my own website kraftsquare.com'
    }, {
      logo: 'figma.png',
      title: 'Design the mockups for the changes as per client experiences.'
    }, {
      logo: 'ghost.png',
      title: 'Product updates'
    }, {
      logo: 'office.png',
      title: 'Microsoft office'
    }, {
      logo: 'teams.png',
      title: 'Microsoft teams'
    }, {
      logo: 'slack.png',
      title: 'Team communication'
    }]
  }),

  computed: {
    height () {
      return this.$vuetify.breakpoint.xs ? '50' : '100'
    }
  },

  methods: {
    logoSrc (logo) {
      return require(`@/assets/logos/${logo}`)
    },

    ...mapActions({
      showDialog: 'dialog/showDialog'
    })
  }
}
</script>
