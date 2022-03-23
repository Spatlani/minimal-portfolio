import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBcE-7v8JSUmQauD1nS-K0Bn10tklFwHJg',
    libraries: 'places'
  }
})
