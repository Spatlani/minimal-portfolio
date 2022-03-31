<template>
  <v-sheet>
    <section id="about" class="py-10 my-16">
      <about :mailing-address="mailingAddress" :linkedin="linkedin" />
    </section>

    <section class="py-10 my-16">
      <v-row align="center">
        <v-col cols="12" sm="6" md="3">
          <v-row align="center">
            <v-col cols="4" class="text-h4 font-weight-bold">
              5+
            </v-col>
            <v-col cols="8">
              Years Experience
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-row align="center">
            <v-col cols="4" class="text-h4 font-weight-bold">
              300+
            </v-col>
            <v-col cols="8">
              Happy Clients
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-row align="center">
            <v-col cols="4" class="text-h4 font-weight-bold">
              10+
            </v-col>
            <v-col cols="8">
              On-Site implementation in 5 Countries
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-row align="center">
            <v-col cols="4" class="text-h4 font-weight-bold">
              250+
            </v-col>
            <v-col cols="8">
              Online onboardings in 20 Countries
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>

    <section id="implementations" class="py-10 my-16">
      <shadow-heading text="Implementations" />
      <google-map />
    </section>

    <section id="work" class="py-10 my-16">
      <shadow-heading text="Work" />
      <work />
    </section>

    <section id="tools" class="py-10 my-16">
      <shadow-heading text="Tools" />
      <grid-showcase />
    </section>

    <section id="internship" class="py-10 my-16">
      <shadow-heading text="Internships" />
      <expansion-panel :items="companies" />
    </section>

    <section id="passion" class="py-10 my-16">
      <shadow-heading text="Passion" />
      <passion />
    </section>

    <section id="recommendations" class="py-10 my-16">
      <shadow-heading text="Recommendations" />
      <expansion-panel :items="education" />
    </section>

    <section id="education" class="py-10 my-16">
      <shadow-heading text="Education" />
      <expansion-panel :items="education" />
    </section>

    <section id="certifications" class="py-10 my-16">
      <shadow-heading text="Certifications" />
      <expansion-panel :items="certifications" />
    </section>

    <section id="contact" class="py-10 my-16">
      <v-row justify="center" align="center" class="text-center">
        <v-col md="8" cols="12">
          <v-card flat color="grey lighten-4" class="pa-4">
            <v-card-title primary-title>
              <p class="mx-auto mb-1">
                Drop a message!
              </p>
            </v-card-title>
            <v-card-text>
              Let's work together and I'll help you strategize your next project.
            </v-card-text>
            <v-card-actions>
              <v-btn elevation="0" class="mx-auto text-capitalize" outlined :href="mailingAddress">
                Get in touch!
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" class="font-weight-bold">
          Stay Connected
        </v-col>
        <v-col cols="12">
          <span class="caption grey--text">
            New Delhi, India
          </span>
          <p class="text-h6">
            <a :href="mailingAddress" class="text-decoration-none text--primary">
              rajruchi7@gmail.com
            </a>
          </p>
        </v-col>
        <v-col cols="12">
          <v-btn
            small
            text
            fab
            :href="linkedin"
            target="_blank"
          >
            <v-img max-height="20" max-width="20" contain :src="logoSrc('linkedin')" />
          </v-btn>
          <v-btn
            small
            text
            fab
            :href="medium"
            target="_blank"
          >
            <v-img max-height="20" max-width="20" contain :src="logoSrc('medium')" />
          </v-btn>
        </v-col>
      </v-row>
    </section>
  </v-sheet>
</template>

<script>
import ShadowHeading from '@/components/ShadowHeading.vue'
import About from '@/components/About.vue'
import Work from '@/components/Work.vue'
import GridShowcase from '@/components/GridShowcase.vue'
import Passion from '@/components/Passion.vue'
import GoogleMap from '@/components/GoogleMap.vue'
import ExpansionPanel from '@/components/ExpansionPanel.vue'

export default {
  name: 'IndexPage',

  components: {
    ShadowHeading,
    About,
    Work,
    GridShowcase,
    ExpansionPanel,
    Passion,
    GoogleMap
  },

  data: () => ({
    activeWork: 0,
    companies: [{
      name: 'Shahi Exports',
      color: 'grey lighten-5',
      from: 'June 2016',
      role: 'Intern',
      location: 'New Delhi, India',
      logo: 'shahi.png',
      responsibilities: 'Created 5 training modules for the entirely new cell "Supervisor Development Cell" which is currently live In Shahi Exports pan india',
      url: 'https://www.shahi.co.in/'
    }, {
      name: 'Raymond Limited',
      color: '#d6233812',
      from: 'August 2015',
      role: 'Intern',
      location: 'New Delhi, India',
      logo: 'raymond.png',
      url: 'https://www.raymond.in/'
    }, {
      name: 'Newgen Payments',
      color: '#39116f14',
      from: 'Feb 2015',
      role: 'HR',
      location: 'New Delhi, India',
      logo: 'newgen.png',
      url: 'https://www.newgenpayments.com/'
    }],
    education: [{
      name: 'National Institute of Fashion Technology',
      color: 'grey lighten-5',
      from: '2013',
      to: '2017',
      role: 'Bachelors in Fashion Technology (8.0 CGPA)',
      location: 'New Delhi, India',
      logo: 'nift.svg',
      responsibilities: [
        'Most innovative Graduation Project Award, NIFT Delhi, Govt. Of India (Nominated for patent filing)',
        'AIR rank 9 in NIFT entrance',
        'Placement co-ordinator',
        'Member of Social Club at NIFT, Delhi'
      ],
      url: 'https://www.nift.ac.in/delhi/'
    }, {
      name: 'Patna Women\'s College',
      color: 'grey lighten-5',
      from: '2013',
      role: 'Diploma in Office Management',
      location: 'Patna, India'
    }, {
      name: 'BD Public School',
      color: 'grey lighten-5',
      from: '2012',
      role: 'XII - CBSE (80%)',
      location: 'Patna, India'
    }, {
      name: 'Carmel High School',
      color: 'grey lighten-5',
      from: '2010',
      role: 'X - ICSE (94%)',
      responsibilities: [
        'State level winner in karate championship (Jharkhand)',
        'Top scorer in English and Hindi',
        'Winner in card making competition for Indian Army',
        'Discipline Head at School'
      ],
      location: 'Patna, India'
    }],
    certifications: [{
      name: 'LinkedIn',
      color: 'grey lighten-5',
      role: 'Design thinking: Customer experience'
    }, {
      name: 'UNO',
      color: 'grey lighten-5',
      role: 'Certification in Humanitarian '
    }, {
      name: 'IAPO (2020)',
      color: 'grey lighten-5',
      role: 'Certification in Image Consultation '
    }, {
      name: 'CSA',
      color: 'grey lighten-5',
      role: 'Associate member of Customer Success Association '
    }]
  }),

  computed: {
    mailingAddress () {
      return 'mailto:rajruchi7@gmail.com'
    },

    linkedin () {
      return 'https://www.linkedin.com/in/ruchi-raj-437521b2/'
    },

    medium () {
      return 'https://medium.com/@ruchiraj'
    }
  },

  methods: {
    logoSrc (logo) {
      return require(`@/assets/logos/${logo}.png`)
    }
  }
}
</script>
