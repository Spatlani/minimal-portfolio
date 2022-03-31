<template>
  <v-row>
    <v-col>
      <v-card flat height="400" rounded>
        <GmapMap :center="mapCenter" :zoom="4" :options="mapStyle" style="width: 100%; height: 100%">
          <GmapMarker
            v-for="(m, index) in implementations"
            :key="index"
            :position="m.position"
            @mouseover="openInfoWindow(index)"
            @mouseout="closeInfoWindow"
            :clickable="true"
            :icon="m.icon"
            @click="openInfoWindow(index)"
          >
            <gmap-info-window :options="infoWindow.options" :position="infoWindow.position" :opened="infoWindow.open === index" @closeclick="closeInfoWindow">
              <div v-html="infoWindow.template" />
            </gmap-info-window>
          </GmapMarker>
        </GmapMap>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import styles from '@/store/map-styles.json'

export default {
  data: () => ({
    activeInfoWindow: null,
    infoWindow: {
      options: {
        maxWidth: 300,
        pixelOffset: { width: 0, height: -10 }
      },
      position: { lat: 0, lng: 0 },
      open: false,
      template: ''
    },
    mapCenter: {
      lat: 21.4763781213036,
      lng: 93.9826542277434
    },
    implementations: [{
      icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      position: {
        lat: 11.1085,
        lng: 77.3411
      },
      city: 'Tiruppur',
      country: 'India',
      image: 'tiruppur.jpeg'
    }, {
      icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      position: {
        lat: 12.8797,
        lng: 121.7740
      },
      city: 'Manila',
      country: 'Philippines',
      image: 'philippines.jpeg'
    }, {
      icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      position: {
        lat: 14.0583,
        lng: 108.2772
      },
      city: 'Ho Chi Minh',
      country: 'Vietnam',
      image: 'vietnam.jpeg'
    }, {
      icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      position: {
        lat: 23.6850,
        lng: 90.3563
      },
      city: 'Dhaka',
      country: 'Bangladesh',
      image: 'bangladesh.jpg'
    }, {
      icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      position: {
        lat: 13.7563,
        lng: 100.5018
      },
      city: 'Bangkok',
      country: 'Thailand',
      image: 'bangkok.jpg'
    }],
    mapStyle: { styles }
  }),

  methods: {
    openInfoWindow (index) {
      const { position, city, country, image } = this.implementations[index]
      this.infoWindow.position = position
      const imageSrc = require(`@/assets/images/${image}`)
      this.infoWindow.template = `<br><img src="${imageSrc}" style="max-height: 150px; max-width: 200px;" /><br><b>${city}, ${country}</b>`
      this.infoWindow.open = index
    },

    closeInfoWindow () {
      this.infoWindow.open = false
    }
  }
}
</script>
