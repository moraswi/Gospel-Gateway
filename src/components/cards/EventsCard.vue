<template>
  <v-card class="custom-card px-7 py-3" width="100%">
    <v-layout row>
      <div>
        <v-icon color="grey">mdi-earth</v-icon>
        <h1 class="font-h4">{{ title }}</h1>
        <p class="font-p">{{ bottomText }}</p>
      </div>
      <v-spacer></v-spacer>
      <div>
        <h1 class="font-h4">{{ topText }}</h1>
        <p class="font-p">{{ date }}</p>
      </div>
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
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-card {
  border-left: 6px solid orange; /* Adjust the thickness as needed */
}
</style>
