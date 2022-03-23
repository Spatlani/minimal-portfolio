import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBcE-7v8JSUmQauD1nS-K0Bn10tklFwHJg',
    libraries: 'places',
    map_ids: '1c6b55e248ababf8',
    mapId: '1c6b55e248ababf8'
  },
  installComponents: true
})
