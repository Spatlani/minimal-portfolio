<template>
  <v-row justify="center" align="stretch">
    <v-col v-for="item in items" :key="item.title" md="4" cols="12">
      <v-card outlined :height="height">
        <v-card-text class="text-center">
          <v-row no-gutters>
            <v-col cols="12" class="pb-0">
              <v-avatar>
                <v-img contain height="48" :src="imageSrc(item.image)" :lazy-src="imageSrc(item.image)" />
              </v-avatar>
            </v-col>
            <v-col cols="12" class="subtitle-2">
              <a :href="item.link" target="_blank" class="text-decoration-none text--primary">
                {{ item.title }}
              </a>
            </v-col>
            <v-col cols="12" class="caption mb-2">
              {{ item.designation }}
            </v-col>
            <v-col cols="12" class="text--primary text-justify">
              {{ item.description }}
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TestimonialItem',

  data: () => ({
    items: [{
      title: 'Melissa Moylan',
      image: 'mellisa.jpg',
      designation: 'VP, Creative Director - Womenswear at Fashion Snoops Inc.',
      link: 'https://www.linkedin.com/in/melissa-moylan-9754741/',
      description: 'Ruchi not only has a strong understanding of the fashion industry on a global scale, but she is an absolute pleasure to work with. She made several connections that benefited my company including securing fashion week, tradeshow and media partnerships. She facilitated my company\'s launch in the Indian market and it is very clear that because of her, our series of meetings and trend presentations were seamless. I\'m pleased to recommend her.'
    }, {
      title: 'Ramit Tyagi',
      image: 'ramit.jpg',
      designation: 'Director Talent Acquisition at UKG',
      link: 'https://www.linkedin.com/in/ramittyagi/',
      description: 'Ruchi is a sincere and a thorough professional, always positive and committed to her responsibilities. She is an excellent team player with a zeal to learn new things and perform to the best of her abilities. I wish her all the very best. Cheers.'
    }, {
      title: 'Deepti Kakkar',
      image: 'deepti.jpg',
      designation: 'Academic Head, Katha',
      link: 'https://www.linkedin.com/in/deepti-kakkar-a27578102/',
      description: 'Ms. Ruchi is a motivational speaker. She took a session on Soft skills and personality development with our professional students. Session was very useful for children. They learned so many important things. Your presentation was excellent. Session was motivating and meaningful.'
    }]
  }),

  computed: {
    height () {
      return this.$vuetify.breakpoint.xs ? 'auto' : '380'
    }
  },

  methods: {
    imageSrc (image) {
      return require(`@/assets/images/${image}`)
    }
  }
}
</script>
