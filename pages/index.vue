<template>
  <v-sheet>
    <section id="about">
      <v-container>
        <about :mailing-address="mailingAddress" :linkedin="linkedin" />
      </v-container>
    </section>

    <section>
      <v-container>
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
      </v-container>
    </section>

    <section id="work">
      <v-container>
        <shadow-heading text="Work" />
        <work />
      </v-container>
    </section>

    <section id="implementations">
      <v-container>
        <shadow-heading text="Implementations" />
        <google-map />
      </v-container>
    </section>

    <section id="tools">
      <v-container>
        <shadow-heading text="Tools" />
        <grid-showcase />
      </v-container>
    </section>

    <section id="internship">
      <v-container>
        <shadow-heading text="Internships" />
        <expansion-panel :items="companies" />
      </v-container>
    </section>

    <section id="passion">
      <v-container>
        <shadow-heading text="Passion" />
        <passion />
      </v-container>
    </section>

    <section id="recommendations">
      <v-container>
        <shadow-heading text="Recommendations" />
        <testimonial />
      </v-container>
    </section>

    <section id="education">
      <v-container>
        <shadow-heading text="Education" />
        <expansion-panel :items="education" />
      </v-container>
    </section>

    <section id="certifications">
      <v-container>
        <shadow-heading text="Certifications" />
        <expansion-panel :items="certifications" />
      </v-container>
    </section>

    <section id="contact" class="grey darken-4">
      <v-container>
        <v-row justify="center" align="center" class="white--text text-center">
          <v-col md="8" cols="12">
            <v-card flat dark color="black" class="pa-4">
              <v-card-title primary-title>
                <p class="mx-auto mb-1">
                  Drop a message!
                </p>
              </v-card-title>
              <v-card-text>
                Let's work together and I'll help you strategize your next project.
              </v-card-text>
              <v-card-actions>
                <v-btn color="white black--text" elevation="0" class="mx-auto text-capitalize" :href="mailingAddress">
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
              <a :href="mailingAddress" class="text-decoration-none white--text">
                rajruchi7@gmail.com
              </a>
            </p>
          </v-col>
          <v-col cols="12">
            <v-btn
              color="white"
              small
              fab
              :href="linkedin"
              target="_blank"
            >
              <v-img max-height="20" max-width="20" contain :src="logoSrc('linkedin')" />
            </v-btn>
            <v-btn
              color="white"
              small
              fab
              :href="medium"
              target="_blank"
            >
              <v-img max-height="20" max-width="20" contain :src="logoSrc('medium')" />
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-sheet>
</template>

<script>
import ShadowHeading from '@/components/ShadowHeading.vue'
import About from '@/components/About.vue'
import Work from '@/components/Work.vue'
import GridShowcase from '@/components/GridShowcase.vue'
import Passion from '@/components/Passion.vue'
import Testimonial from '@/components/Testimonial.vue'
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
    Testimonial,
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
      responsibilities: [
        'Worked on a live-project "Supervisor Development Cell" which was a completely new cell being introduced into Shahi. As a part of the organisational behaviour team, I developed and designed various modules of supervisor development cell.',
        'The modules created are Supervisor monitoring tool, Training modules, Selection criteria, Monitoring tools and Developing a machine matrix for standardising the process.'
      ],
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
      responsibilities: [
        'In the past, at Newgen I joined a startup team as the 2nd member and took it to 30+ along with a lean HR team. I have hired for roles across Digital Marketing, Design, Operations, Technology as well as Finance form all over India.',
        'Assisted building the whole team of Newgen which was a startup across all the profiles including tech, marketing and design and finance.',
        'Creation of JD and optimizing them as per the job portal.',
        'Managing all the portals including Internshala, iimjobs, naukri, letsintern, Hirist, LinkedIn and many such platforms.',
        'End to end recruitment - screening to final interview with the hiring manager.',
        'Participated in online Campus Placements from institutes like IIT , Nit, Amity, Arena and Christ University.',
        'Create and maintain the talent pool for all the profiles including web developers, graphic designers, backend developers, marketing, BD and Finance.',
        'Manage team of virtual interns with their tasks and deadlines.',
        'Team building and performance management by reviews and problem solving.',
        'Conducted employee on-boarding and plan training & development.'
      ],
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

<style>
section {
  padding-top: 6%;
  padding-bottom: 6%;
}
</style>
