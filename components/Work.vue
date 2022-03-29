<template>
  <v-row>
    <v-col v-for="company in companies" :key="company.name" cols="6">
      <v-card :color="company.color" flat class="rounded">
        <v-card-text>
          <div class="text-overline mb-3">
            <v-row justify="space-between">
              <v-col cols="auto">
                {{ company.from }} - {{ company.to }}
              </v-col>
              <v-col cols="auto">
                {{ company.location }}
              </v-col>
            </v-row>
          </div>
          <p class="text-h5 text--primary">
            {{ company.role }}
          </p>
          <ul>
            <li v-for="(resp, respIndex) in company.responsibilities" :key="respIndex">
              {{ resp }}
            </li>
          </ul>
          <v-row class="mt-4" align="center" justify="space-between">
            <v-col cols="6" class="pl-6">
              <v-img :src="logoSrc(company.logo)" max-width="250" max-height="50" contain position="left" />
            </v-col>
            <v-col cols="auto">
              <v-btn x-small text fab :href="company.url" target="_blank">
                <v-icon >
                  mdi-open-in-new
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'WorkSection',

  data: () => ({
    selected: undefined,
    companies: [{
      name: 'Provana',
      color: '#2d4ea214',
      from: 'Feb 2022',
      to: 'Present',
      role: 'Senior customer success manager',
      location: 'US, Remote',
      logo: 'provana.webp',
      responsibilities: [
        'Manage a team of 5-6 people including support, implementation, and copyrighter to drive the success strategy for clients.',
        'Foster strong relationships with C-Suite and 50+ client accounts to develop and nurture long-term growth'
      ],
      url: 'https://www.provana.com/'
    }, {
      name: 'Techpacker',
      color: '#0dd5b21a',
      from: 'April 2019',
      to: 'Present',
      role: 'Senior customer success manager',
      location: 'US, Remote',
      logo: 'techpacker.png',
      responsibilities: [
        'Manage a team of 5-6 people including support, implementation, and copyrighter to drive the success strategy for clients.',
        'Foster strong relationships with C-Suite and 50+ client accounts to develop and nurture long-term growth'
      ],
      url: 'https://techpacker.com/'
    }, {
      name: 'Fashion Snoops',
      color: 'grey lighten-4',
      from: 'July 2018',
      to: 'March 2019',
      role: 'Project Manager',
      location: 'US, Remote',
      logo: 'fashion-snoops.png',
      responsibilities: [
        'Manage a team of 5-6 people including support, implementation, and copyrighter to drive the success strategy for clients.',
        'Foster strong relationships with C-Suite and 50+ client accounts to develop and nurture long-term growth'
      ],
      url: 'https://www.fashionsnoops.com/'
    }, {
      name: 'Threadsol',
      color: '#ef4b371c',
      from: 'Jan 2017',
      to: 'May 2018',
      role: 'Implementation Consultant',
      location: 'APAC, Onsite',
      logo: 'threadsol.png',
      responsibilities: [
        'Manage a team of 5-6 people including support, implementation, and copyrighter to drive the success strategy for clients.',
        'Foster strong relationships with C-Suite and 50+ client accounts to develop and nurture long-term growth'
      ],
      url: 'https://coats.com/en/Acquisitions/Companies/ThreadSol'
    }]
  }),

  methods: {
    logoSrc (logo) {
      return require(`@/assets/logos/${logo}`)
    }
  }
}
</script>
