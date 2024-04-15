<template>
  <v-card class="custom-card px-7 py-0" width="100%">
    <v-layout row>
      <div>
        <v-icon color="grey" small>mdi-earth</v-icon>
        <h1 class="font-h4 mt-n1">{{ title }}</h1>
        <p class="font-p mt-n1">{{ bottomText }}</p>
      </div>
      <v-spacer></v-spacer>
      <div class="text-right">
        <h4 class="font-p">{{ churchName }}</h4>
        <p class="font-p4  mt-n0">{{ topText }}</p>
        <p class="font-p4 mt-n4">{{ date }}</p>
      </div>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    churchName: {
      type: String,
      required: true
    },
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
