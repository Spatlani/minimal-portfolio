<template>
  <GmapMap :center="mapCenter" :zoom="4" style="width: 100%; height: 100%">
    <GmapMarker
      :key="index"
      v-for="(m, index) in implementations"
      :position="m.position"
      :clickable="true"
      @click="center=m.position"
    />
  </GmapMap>
</template>

<script>
export default {
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
  })
}
</script>

<style>
.bg-text {
  height: 4em;
}
.bg-text .row {
  position: relative;
}
.bg-text::before {
  content: attr(data-bg-text);
  position: absolute;
  height: max-content;
  line-height: 1.4;
  opacity: 0.02;
  color: var(--v-secondary-lighten5);
  font-size: 6em;
  margin-top: 16px;
  margin-left: -1em;
  white-space: nowrap;
  overflow: hidden;
}
</style>
