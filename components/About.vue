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
        <v-col cols="12" class="title text--secondary py-0">
          I believe in Fast | Fail | Forward
        </v-col>
        <v-col cols="12" class="text-justify body-2">
          Transparent communication disciplines the chaos. This belief keeps me on my toes and remains a constant source of motivation throughout my role as a customer success manager.
          I have 5 + years of experience in customer success, including customer on-boarding, training, and implementation of the SaaS software onsite in 10+ countries including Thailand, the Philippines, Vietnam, Bangladesh, India, and offsite in Australia, the US, New Zealand, and Europe.
        </v-col>
        <v-col cols="12" class="text-justify body-2">
          Reducing churn and maintaining the analysis of customer usage for scaling up has been a crucial part of my role. Problem-solving was always my hobby and it gradually shaped my career steer towards this side of the business. I love helping people and believe that it’s better to empower than to sympathize, so I offer sessions on image enhancement in my free hours to NGOs and other social organizations.
        </v-col>
        <v-col cols="12" class="body-2">
          <v-btn color="black white--text" elevation="0" class="text-capitalize mr-2" :href="mailingAddress">
            Get in touch!
          </v-btn>
          <v-btn
            small
            text
            fab
            :href="linkedin"
            target="_blank"
          >
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
            <template #placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                />
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
      'bangkok.jpg',
      'philippines.jpeg',
      'bangkok-3.jpg',
      'ruchi.jpeg',
      'bangkok-5.jpg',
      'katha.jpg',
      'bangkok-4.jpg',
      'bangladesh.jpg'
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
