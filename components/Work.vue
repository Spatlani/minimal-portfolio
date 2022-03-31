<template>
  <v-row>
    <v-col v-for="company in companies" :key="company.name" md="6">
      <v-card :color="company.color" flat class="rounded" height="360">
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
          <v-row justify="center">
            <v-col cols="12">
              <ul>
                <li v-for="(resp, respIndex) in company.responsibilities.slice(0, 3)" :key="respIndex">
                  {{ resp }}
                </li>
              </ul>
            </v-col>
            <v-col cols="auto" class="pa-0">
              <v-btn color="white" elevation="0" class="text-lowercase" x-small @click="showDialog(company)">
                Read more
              </v-btn>
            </v-col>
          </v-row>

          <v-row align="center" justify="space-between">
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
import { mapActions } from 'vuex'

export default {
  name: 'WorkSection',

  data: () => ({
    selected: undefined,
    companies: [{
      name: 'Provana',
      color: 'deep-purple lighten-5',
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
      color: 'teal lighten-5',
      from: 'April 2019',
      to: 'Present',
      role: 'Senior implementation manager',
      location: 'US, Remote',
      logo: 'techpacker.png',
      responsibilities: [
        'Manage a team of 5-6 people including support, implementation, and copyrighter to drive the success strategy for clients.',
        'Foster strong relationships with C-Suite and 50+ client accounts to develop and nurture long-term growth.',
        'Achieved almost 100% automation in onboarding for non-enterprise users (1000+) working on the knowledge base/ resources/onboarding campaigns in almost 3 years',
        'Ensure successful product adoption by clients.',
        'Designed and conducted training sessions for enterprise customers (individual and teams) and led the onboarding process, receiving 90% positive feedback.',
        'Exceeded team’s annual goal of keeping client response rates by reducing them to 1 hour.',
        'Successful 100+ off-site implementations in Europe, the US, Asian regions, Australia, etc.',
        'Increased customer retention by 25% across my client list by enhancing the feedback process and customer advocacy, working on getting the bugs fixed, and achieving relevant feature additions as per clients\' requests.',
        'Increased customer satisfaction by 10% by proactively maintaining customer relationships.',
        'Reduced the query tickets from 500+ to 50 within the first 3 months.',
        'Written a mini-research guide article on Top sustainable fashion materials for 2021.',
        'Published 2 customer success case studies with enterprise customers',
        'Led the product calls (cross-functionally) with tech, product development, and sales team for product enhancements and sprint planning.'
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
        'Managed all the content and guidelines for the ASW for FashionSnoops',
        'Partnered with FDCI for a workshop in Lotus India Fashion Week.',
        'Partnered with the Association for Designers in India (ADI) for workshops, both in Delhi and Bangalore, and prepared all content for the same.',
        'Developed relations with the Institute of Art and Design (IIAD) for the workshop and prepared the forecast report to be presented.',
        'Convinced Apparel exports Promotion Council (AEPC) for a workshop for their members',
        'Collaborated with Images group and prepared the major content for the first coffee table book launch on shirts in India called "Shirtopedia" which got published on the name of the VP of FS.'
      ],
      url: 'https://www.fashionsnoops.com/'
    }, {
      name: 'Threadsol',
      color: 'deep-orange lighten-5',
      from: 'Jan 2017',
      to: 'May 2018',
      role: 'Implementation Consultant',
      location: 'APAC, Onsite',
      logo: 'threadsol.png',
      responsibilities: [
        'Achieved successful implementations of the flagship product Intellocut in 8 factories on-site in Vietnam, Bangladesh, The Philippines, India, China, Bangkok, etc.',
        'Trained 250+ users in Southeast Asian countries.',
        'Reduced the churn by 20% by identifying discrepancies in customers’ data and creating the format of the tool to monitor them',
        'Created the product documentation of almost 20 new modules',
        'Successfully handled queries as SPOC for 12 enterprise clients (each having 20+ users)'
      ],
      url: 'https://coats.com/en/Acquisitions/Companies/ThreadSol'
    }]
  }),

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
