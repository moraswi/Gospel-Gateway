<template>
    <v-card class="py-4" width="200" height="120" >
        <v-layout class="text-center" column >
         <h1 class=" font-h2 justify-center align-center">{{ topText }}</h1>
         <p class="font-p justify-center">{{ bottomText }}</p>
        </v-layout>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      topText: {
        type: String,
        required: true
      },
      bottomText: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>

</style>