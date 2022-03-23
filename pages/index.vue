<template>
  <v-sheet>
    <section class="py-10 my-16" id="about">
      <v-row>
        <v-col md="8">
          <v-row>
            <v-col cols="12" class="text-h3 font-weight-medium">
              Hi, I am Ruchi Raj
            </v-col>
            <v-col cols="12" class="text-h6 font-weight-bold">
              Onboarding Specialist and Customer Success Manager
            </v-col>
            <v-col cols="12" class="text-justify body-2">
              Result-driven and detailed oriented professional holding 5+ years of experience with various SAAS platforms
              handling customers' success and building relationships across the globe with a consulting approach. Pursuing
              the opportunity at Techpacker to boost premium customer satisfaction with 90% positive feedback and
              automate the non-enterprise customer onboarding and journey.
            </v-col>
            <v-col cols="12" class="text-justify body-2">
              <v-btn color="yellow lighten-2" elevation="0" class="text-capitalize" :href="mailingAddress">
                Get in touch!
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
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

    <section class="py-10 my-16" id="onboardings">
      <shadow-heading text="Onboardings" />
      <v-row>
        <v-col>
          <v-card flat height="400" rounded>
            <google-map />
          </v-card>
        </v-col>
      </v-row>
    </section>

    <section class="py-10 my-16" id="work">
      <shadow-heading text="Work" />
      <v-row>
        <v-col cols="6">
          <v-card color="#0dd5b21a" flat>
            <v-card-text>
              <div class="text-overline mb-3">
                <v-row justify="space-between">
                  <v-col cols="auto">
                    April 2019 - Present
                  </v-col>
                  <v-col cols="auto">
                    US, Remote
                  </v-col>
                </v-row>
              </div>
              <p class="text-h5 text--primary">
                Senior customer success manager
              </p>
              <ul>
                <li>
                  Manage a team of 5-6 people including support, implementation, and copyrighter to drive the success strategy for clients.
                </li>
                <li>
                  Foster strong relationships with C-Suite and 50+ client accounts to develop and nurture long-term growth
                </li>
              </ul>
              <v-row class="mt-4" justify="space-between">
                <v-col cols="6">
                  <v-img :src="logoSrc('techpacker')" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card color="grey lighten-4" flat>
            <v-card-text>
              <div class="text-overline mb-3">
                <v-row justify="space-between">
                  <v-col cols="auto">
                    July 2018 - March 2019
                  </v-col>
                  <v-col cols="auto">
                    US, Remote
                  </v-col>
                </v-row>
              </div>
              <p class="text-h5 text--primary">
                Project Manager
              </p>
              <ul>
                <li>
                  Manage a team of 5-6 people including support, implementation, and copyrighter to drive the success strategy for clients.
                </li>
                <li>
                  Foster strong relationships with C-Suite and 50+ client accounts to develop and nurture long-term growth
                </li>
              </ul>
              <v-row class="mt-4" justify="space-between">
                <v-col cols="6" class="ml-2">
                  <v-img contain position="left" :src="logoSrc('fashion-snoops')" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <section class="py-10 my-16" id="contact">
      <v-row justify="center" align="center" class="text-center">
        <v-col cols="12" class="font-weight-bold">
          Stay Connected
        </v-col>
        <v-col cols="12">
          <span class="caption grey--text">
            New Delhi, India
          </span>
          <p class="text-h6">
            rajruchi7@gmail.com
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
import GoogleMap from '@/components/GoogleMap.vue'

export default {
  name: 'IndexPage',

  components: {
    ShadowHeading,
    GoogleMap
  },

  data: () => ({}),

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
