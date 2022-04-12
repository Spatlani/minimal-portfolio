<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="7">
      <v-row>
        <v-col cols="12" class="text-h6 font-weight-medium pb-0">
          Hi, I am Ruchi Raj. <br> Implementation specialist and customer success manager.
        </v-col>
        <v-col cols="12" class="text-h4 font-weight-bold pb-0">
          Transparent communication disciplines the chaos.
        </v-col>
        <v-col cols="12" class="text-justify body-2">
          This belief keeps me on my toes and remains a constant source of motivation throughout my role as a customer success manager.
          I have 5 + years of experience in customer success, including customer on-boarding, training, and implementation of the SaaS software onsite in 10+ countries including Thailand, the Philippines, Vietnam, Bangladesh, India, and offsite in Australia, the US, New Zealand, and Europe.
        </v-col>
        <v-col cols="12" class="text-justify body-2">
          Reducing churn and maintaining the analysis of customer usage for scaling up has been a crucial part of my role. Problem-solving was always my hobby and it gradually shaped my career steer towards this side of the business. I love helping people and believe that it’s better to empower than to sympathize, so I offer sessions on image enhancement in my free hours to NGOs and other social organizations.
        </v-col>
        <v-col cols="12" class="subtitle-1 text--secondary py-0">
          I believe in Fast | Fail | Forward
        </v-col>
        <v-col cols="12" class="body-2">
          <v-btn color="black white--text" elevation="0" class="text-capitalize mr-2" @click="scrollTo('#work')">
            See my work
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
    <v-col cols="12" md="5">
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

    <v-col cols="12" class="text-center pa-0">
      <svg class="arrows">
        <path stroke-linecap="round" class="a1" d="M0 0 L20 22 L40 0"></path>
      </svg>
    </v-col>
  </v-row>
</template>

<script>
import goTo from 'vuetify/lib/services/goto'

export default {
  name: 'AboutSection',

  props: {
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
    scrollTo (target) {
      const options = {
        offset: 0,
        duration: 500,
        easing: 'easeInOutCubic',
        behavior: 'smooth'
      }
      return goTo(target, options)
    },

    logoSrc (logo) {
      return require(`@/assets/logos/${logo}.png`)
    },

    imgSrc (img) {
      return require(`@/assets/images/${img}`)
    }
  }
}
</script>

<style>
.arrows {
  width: 80px;
  height: 80px;
  bottom: 20px;
}

.arrows path {
  stroke: #000000;
  fill: transparent;
  stroke-width: 3px;
  animation: arrow 2s infinite;
  -webkit-animation: arrow 2s infinite;
}

@keyframes arrow {
  0% {opacity:0; transform:translateY(10px)}
  80% {opacity:1; transform:translateY(50px)}
  100% {opacity:0; transform:translateY(50px)}
}

@-webkit-keyframes arrow /*Safari and Chrome*/ {
  0% {opacity:0; transform:translateY(10px)}
  80% {opacity:1; transform:translateY(50px)}
  100% {opacity:0; transform:translateY(50px)}
}

.arrows path.a1 {
  animation-delay:-0.5s;
  -webkit-animation-delay:-0.5s; /* Safari and Chrome */
}
</style>
