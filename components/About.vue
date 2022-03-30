<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="8">
      <v-row>
        <v-col cols="12" class="text-h3 font-weight-medium">
          Hi, I am Ruchi Raj
        </v-col>
        <v-col cols="12" class="text-h6 font-weight-bold">
          Implementation Specialist and Customer Success Manager
        </v-col>
        <v-col cols="12" class="text-justify body-2">
          Result-driven and detailed oriented professional holding 5+ years of experience with various SAAS platforms
          handling customers' success and building relationships across the globe with a consulting approach. Pursuing
          the opportunity at Techpacker to boost premium customer satisfaction with 90% positive feedback and
          automate the non-enterprise customer onboarding and journey.
        </v-col>
        <v-col cols="12" class="body-2">
          <v-btn elevation="0" class="text-capitalize" outlined :href="mailingAddress">
            Get in touch!
          </v-btn>
          <v-btn
            small
            text
            fab
            :href="linkedin"
            target="_blank">
            <v-img max-height="20" max-width="20" contain :src="logoSrc('linkedin')" />
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="4">
      <v-row>
        <v-col
          v-for="image in imageGrid"
          :key="image"
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="imgSrc(image)"
            :lazy-src="imgSrc(image)"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AboutSection',

  props: {
    mailingAddress: {
      type: String,
      default: ''
    },

    linkedin: {
      type: String,
      default: ''
    }
  },

  data: () => ({
    imageGrid: [
      'vietnam.jpeg',
      'bangkok-2.jpg',
      'kraftsquare.jpg',
      'bangkok-3.jpg',
      'ruchi.jpeg',
      'vietnam.jpeg',
      'vietnam.jpeg',
      'vietnam.jpeg',
      'newgen.jpg'
    ]
  }),

  methods: {
    logoSrc (logo) {
      return require(`@/assets/logos/${logo}.png`)
    },

    imgSrc (img) {
      return require(`@/assets/images/${img}`)
    }
  }
}
</script>
