<template>
  <v-card class="py-2" width="100%" height="120">
    <v-layout class="text-center" column>
      <v-layout class="px-2">
        <v-spacer></v-spacer>
        <v-btn fab width="25" height="25" depressed @click="handleClick">
          <v-icon size="medium">mdi-plus</v-icon></v-btn
        >
      </v-layout>
      <h1 class="font-h2 justify-center align-center">{{ statistic }}</h1>
      <p class="font-p justify-center">{{ cardName }}</p>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    statistic: {
      type: String,
      required: true,
    },
    cardName: {
      type: String,
      required: true,
    },
  },

  methods:{
    handleClick(){
      this.$emit('click');
    }
  }
};
</script>
