<template>
  <h1 class="bg-text d-flex align-center" :data-bg-text="text">
    <v-container class="pa-0">
      <v-row class="no-gutters">
        <v-col cols="8">
          {{ text }}
        </v-col>
      </v-row>
    </v-container>
  </h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },

    loading: {
      type: Boolean,
      default: false
    }
  }
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
  opacity: 0.03;
  color: var(--v-secondary-lighten5);
  font-size: 6em;
  margin-top: 16px;
  margin-left: -1em;
  white-space: nowrap;
  overflow: hidden;
}
</style>
