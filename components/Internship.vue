<template>
  <v-row>
    <v-expansion-panels v-model="selected" popout :flat="selected === undefined">
      <v-expansion-panel v-for="company in companies" :key="company.name">
        <v-expansion-panel-header v-slot="{ open }" :color="company.color">
          <v-row no-gutters align="center">
            <v-col cols="6">
              <p class="text-h6 text--primary mb-0">
                {{ company.role }}
              </p>
              <v-fade-transition leave-absolute>
                <span v-if="!open" class="text--secondary">
                  {{ company.name }}
                </span>
              </v-fade-transition>
            </v-col>
            <v-col cols="6" class="text--secondary">
              <v-row no-gutters style="width: 100%" justify="end">
                <v-col cols="6">
                  {{ company.from }}
                </v-col>
                <v-col cols="4">
                  {{ company.location }}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pt-4">
          <p class="text--secondary">
            {{ company.responsibilities }}
          </p>
          <v-row class="mt-4" align="center" justify="space-between">
            <v-col cols="auto" class="pl-6">
              <a :href="company.url" target="_blank" class="text-decoration-none">
                <v-img
                  :src="logoSrc(company.logo)"
                  max-width="250"
                  max-height="50"
                  contain
                  position="left"
                />
              </a>
            </v-col>
            <v-col cols="auto">
              <v-btn x-small text fab :href="company.url" target="_blank">
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
  name: 'WorkSection',

  data: () => ({
    selected: undefined,
    companies: [{
      name: 'Shahi Exports',
      color: 'grey lighten-5',
      from: 'June 2016',
      role: 'Intern',
      location: 'New Delhi, India',
      logo: 'raymond',
      responsibilities: 'Created 5 training modules for the entirely new cell "Supervisor Development Cell" which is currently live In Shahi Exports pan india',
      url: 'https://www.shahi.co.in/'
    }, {
      name: 'Raymond Limited',
      color: '#d6233812',
      from: 'August 2015',
      role: 'Intern',
      location: 'New Delhi, India',
      logo: 'raymond',
      responsibilities: 'Moj kri mne bhot',
      url: 'https://www.raymond.in/'
    }, {
      name: 'Newgen Payments',
      color: '#39116f14',
      from: 'Feb 2015',
      role: 'HR',
      location: 'New Delhi, India',
      logo: 'newgen',
      responsibilities: 'Shaadi krne gyi thi',
      url: 'https://www.newgenpayments.com/'
    }]
  }),

  methods: {
    logoSrc (logo) {
      return require(`@/assets/logos/${logo}.png`)
    }
  }
}
</script>
