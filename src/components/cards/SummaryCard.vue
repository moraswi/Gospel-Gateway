<template>
  <v-card class="py-2" width="100%" height="120">
    <v-layout class="text-center" column>
      <v-layout class="px-2">
        <v-spacer></v-spacer>
        <v-btn fab width="25" height="25" depressed>
          <v-icon size="medium">mdi-plus</v-icon></v-btn
        >
      </v-layout>
      <h1 class="font-h2 justify-center align-center">{{ topText }}</h1>
      <p class="font-p justify-center">{{ bottomText }}</p>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    topText: {
      type: String,
      required: true,
    },
    bottomText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
