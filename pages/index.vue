<template>
  <v-sheet>
    <section id="about" class="py-10 my-16">
      <about :mailing-address="mailingAddress" />
    </section>

    <section class="py-10 my-16">
      <v-row>
        <v-col cols="3">
          <v-row>
            <v-col cols="auto" class="text-h3 font-weight-bold">
              5+
            </v-col>
            <v-col cols="1">
              Years Experience
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-row>
            <v-col cols="auto" class="text-h3 font-weight-bold">
              102
            </v-col>
            <v-col cols="1">
              Happy Clients
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-row>
            <v-col cols="auto" class="text-h3 font-weight-bold">
              7
            </v-col>
            <v-col cols="9">
              On-Site implementation in 5 Countries
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-row>
            <v-col cols="auto" class="text-h3 font-weight-bold">
              256
            </v-col>
            <v-col cols="7">
              Online onboardings in 20 Countries
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>

    <section id="onboardings" class="py-10 my-16">
      <shadow-heading text="Onboardings" />
      <google-map />
    </section>

    <section id="work" class="py-10 my-16">
      <shadow-heading text="Work" />
      <work />
    </section>

    <section id="internship" class="py-10 my-16">
      <shadow-heading text="Internships" />
      <internship />
    </section>

    <section id="passion" class="py-10 my-16">
      <shadow-heading text="Passion" />
      <passion />
    </section>

    <section id="contact" class="py-10 my-16">
      <v-row justify="center" align="center" class="text-center">
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
          <v-btn color="success" fab text :href="linkedin" target="_blank">
            In
          </v-btn>
          <v-btn color="success" fab text :href="medium" target="_blank">
            Med
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
import Passion from '@/components/Passion.vue'
import GoogleMap from '@/components/GoogleMap.vue'
import Internship from '~/components/Internship.vue'

export default {
  name: 'IndexPage',

  components: {
    ShadowHeading,
    About,
    Work,
    Internship,
    Passion,
    GoogleMap
  },

  data: () => ({
    activeWork: 0
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
