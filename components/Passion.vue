<template>
  <v-row>
    <v-col v-for="(p, pIndex) in passion" :key="pIndex" md="3" sm="12">
      <v-card height="380" color="grey lighten-5" rounded flat>
        <v-card-text>
          <v-row align="center" justify="center">
            <v-col cols="12">
              <v-img height="200" :src="imgSrc(p.image)" :lazy-src="imgSrc(p.image)" />
            </v-col>
            <v-col cols="12" class="font-weight-medium caption text-justify">
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
      image: 'kraftsquare.jpg',
      url: 'https://kraftsquare.com/'
    }, {
      description: 'I offer sessions on personality and image enhancement to the students/members of NGOs and other social organizations.',
      image: 'katha-2.jpg',
      url: 'https://www.katha.org/'
    }, {
      description: 'I write guest posts for Textile Scholars',
      image: 'textile-scholars.jpg',
      url: 'https://textilesscholars.blogspot.com/2021/06/categories-of-fabric-wastes-in-apparel.html'
    }, {
      description: 'During my college, I joined as 2nd member and took it to 30+ along with a lean HR team. Assisted in building the whole team of Newgen across all the profiles including tech, marketing design, and finance',
      image: 'newgen-2.jpeg',
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
