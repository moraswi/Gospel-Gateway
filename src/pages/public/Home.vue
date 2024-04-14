<template>
    <v-container>
     <h1 class="mt-16  text-red">hope page</h1>
     <v-btn :to="{name:'login'}" >login</v-btn>
     <v-btn :to="{name:'signup'}" >signup</v-btn>
    </v-container>
  </template>
  
  <script>
  
  export default {
    name: 'HomePage',
  
    data: () => ({

    }),
  }
  </script>
