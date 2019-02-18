<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/">
          <span>Vuetify</span>
          <span class="font-weight-light">MATERIAL DESIGN</span>
        </router-link>
      </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat><router-link to="/calendar">Calendar</router-link></v-btn>
    </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
