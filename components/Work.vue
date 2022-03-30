<template>
  <v-row>
    <v-col v-for="company in companies" :key="company.name" md="6">
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
              <a :href="company.url" target="_blank" class="text-decoration-none">
                <v-img
                  :src="logoSrc(company.logo)"
                  max-width="250"
                  max-height="50"
                  contain
                  position="left"
                />
              </a>
            </v-col>
            <v-col cols="auto">
              <v-btn x-small text fab :href="company.url" target="_blank">
                <v-icon>
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
      role: 'Customer success manager',
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
      role: 'Senior implementation manager',
      location: 'US, Remote',
      logo: 'techpacker.png',
      responsibilities: [
        'Manage a team of 5-6 people including support, implementation, and copyrighter to drive the success strategy for clients.',
        'Foster strong relationships with C-Suite and 50+ client accounts to develop and nurture long-term growth.',
        'Achieved almost 100% automation in onboarding for non-enterprise users (1000+) working on the knowledge base/ resources/onboarding campaigns'
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
        'Successfully introduced the brand to the Indian market.',
        'Implemented the platform successfully in 8 organizations.',
        'Negotiated with Apparel Resources(leading publication in apparel and fashion domain, India), for being their Trend Partner in Global Sourcing event in Bangalore called Apparel Sourcing Week.',
        'Partnered with FDCI for a workshop in Lotus India Fashion Week.'
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
        'Achieved successful implementations of the flagship product Intellocut in 8 factories on-site in Vietnam, Bangladesh, The Philippines, India, China, Bangkok, etc.',
        'Trained 250+ users in Southeast Asian countries.',
        'Reduced the churn by 20% by identifying discrepancies in customers’ data and creating the format of the tool to monitor them'
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
