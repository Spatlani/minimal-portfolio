<template>
  <v-sheet>
    <section class="my-16">
      <v-row>
        <v-col md="6">
          <v-row>
            <v-col cols="12" class="text-h3 ">
              Ruchi Raj
            </v-col>
            <v-col cols="12" class="font-weight-bold">
              Onboarding Specialist and Customer Success Manager
            </v-col>
            <v-col cols="12" class="text-justify body-2">
              Result-driven and detailed oriented professional holding 5+ years of experience with various SAAS platforms
              handling customers' success and building relationships across the globe with a consulting approach. Pursuing
              the opportunity at Techpacker to boost premium customer satisfaction with 90% positive feedback and
              automate the non-enterprise customer onboarding and journey
            </v-col>
            <v-col cols="12" class="text-justify body-2">
              <v-btn color="primary" elevation="0" class="text-capitalize" :href="mailingAddress">
                Get in touch!
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section class="my-16">
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
        <v-col cols="auto">
          <v-row>
            <v-col cols="auto" class="text-h3 font-weight-bold">
              256
            </v-col>
            <v-col cols="8">
              Successfull Implementations in 7 Countries
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>

    <section class="my-16">
      <shadow-heading text="Onboardings" />
      <v-row>
        <v-col>
          <v-card flat height="400" rounded>
            <GmapMap :center="mapCenter" :zoom="4" style="width: 100%; height: 100%">
              <GmapMarker
                :key="index"
                v-for="(m, index) in implementations"
                :position="m.position"
                :clickable="true"
                @click="center=m.position"
              />
            </GmapMap>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <section class="my-16">
      <shadow-heading text="Work" />
      <v-row>
        <v-col cols="6">
          <v-card color="blue lighten-5" flat height="200">
            asd
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card color="red lighten-5" flat height="200">
            asd
          </v-card>
        </v-col>
      </v-row>
    </section>

    <section class="my-16">
      <v-row justify="center" align="center" class="text-center">
        <v-col cols="12" class="font-weight-bold">
          Stay Conencted
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
export default {
  name: 'IndexPage',

  components: {
    ShadowHeading
  },

  data: () => ({
    mapCenter: {
      lat: 21.4763781213036,
      lng: 93.9826542277434
    },
    implementations: [{
      position: {
        lat: 11.1085,
        lng: 77.3411
      }
    }, {
      position: {
        lat: 12.8797,
        lng: 121.7740
      }
    }, {
      position: {
        lat: 14.0583,
        lng: 108.2772
      }
    }, {
      position: {
        lat: 23.6850,
        lng: 90.3563
      }
    }, {
      position: {
        lat: 13.7563,
        lng: 100.5018
      }
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
  }
}
</script>
