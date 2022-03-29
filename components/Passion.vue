<template>
  <v-row>
    <v-col v-for="(p, pIndex) in passion" :key="pIndex" md="3" sm="12">
      <v-card color="grey lighten-5" rounded flat>
        <v-card-text>
          <v-row class="mt-4" align="center" justify="center">
            <v-col cols="12">
              <v-img :src="imgSrc(p.image)" :lazy-src="imgSrc(p.image)" />
            </v-col>
            <v-col cols="12" class="font-weight-bold caption text-justify">
              {{ p.description }}
              <v-btn
                v-if="p.url"
                x-small
                text
                fab
                :href="p.url"
                target="_blank">
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
export default {
  name: 'PassionSection',

  data: () => ({
    passion: [{
      description: 'I am working on creating a community for women to promote Indian handicrafts and enhance the chances of employment to them by my homegrown brand KraftSquare.',
      image: 'IMG-20190716-WA0035.jpg',
      url: 'https://kraftsquare.com/'
    }, {
      description: 'I offer sessions on personality and image enhancement to the students/members of NGOs and other social organizations.',
      image: 'IMG-20190716-WA0035.jpg'
    }, {
      description: 'I write guest posts for Textile Scholars',
      image: 'IMG-20190716-WA0035.jpg',
      url: 'https://techpacker.com/'
    }, {
      description: 'During my college, I joined as 2nd member and took it to 30+ along with a lean HR team. Assisted in building the whole team of Newgen across all the profiles including tech, marketing design, and finance',
      image: 'IMG-20190716-WA0035.jpg',
      url: 'https://www.newgenpayments.com/'
    }]
  }),

  methods: {
    imgSrc (img) {
      return require(`@/assets/images/${img}`)
    }
  }
}
</script>
