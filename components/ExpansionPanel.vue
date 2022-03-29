<template>
  <v-row>
    <v-expansion-panels v-model="selected" popout :flat="selected === undefined">
      <v-expansion-panel v-for="item in items" :key="item.name" :readonly="!item.responsibilities" class="mb-1" :class="{ 'pointer-none': !item.responsibilities }">
        <v-expansion-panel-header v-slot="{ open }" :color="item.color">
          <v-row no-gutters align="center">
            <v-col cols="6">
              <p class="text-h6 text--primary mb-0">
                {{ item.role }}
              </p>
              <v-fade-transition leave-absolute>
                <span v-if="!open" class="text--secondary">
                  {{ item.name }}
                </span>
              </v-fade-transition>
            </v-col>
            <v-col cols="6" class="text--secondary">
              <v-row no-gutters style="width: 100%" justify="end">
                <v-col cols="6">
                  {{ item.from }}
                  <span v-if="item.to">
                    - {{ item.to }}
                  </span>
                </v-col>
                <v-col cols="4">
                  {{ item.location }}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content v-if="item.responsibilities" class="pt-4">
          <ul v-if="isArray(item.responsibilities)" class="text--secondary">
            <li v-for="(resp, respIndex) in item.responsibilities" :key="respIndex">
              {{ resp }}
            </li>
          </ul>
          <p v-else class="text--secondary">
            {{ item.responsibilities }}
          </p>
          <v-row class="mt-4" align="center" justify="space-between" v-if="item.logo">
            <v-col cols="auto" class="pl-6">
              <a :href="item.url" target="_blank" class="text-decoration-none">
                <v-img
                  :src="logoSrc(item.logo)"
                  max-width="250"
                  max-height="50"
                  contain
                  position="left"
                />
              </a>
            </v-col>
            <v-col cols="auto">
              <v-btn x-small text fab :href="item.url" target="_blank">
                <v-icon>
                  mdi-open-in-new
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
  name: 'ExpansionPanel',

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    selected: undefined
  }),

  methods: {
    isArray: Array.isArray,

    logoSrc (logo) {
      return require(`@/assets/logos/${logo}`)
    }
  }
}
</script>

<style>
.pointer-none {
  pointer-events: none;
}
.pointer-none .v-expansion-panel-header__icon {
  opacity: 0;
}
</style>
