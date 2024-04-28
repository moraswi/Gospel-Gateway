<template>
  <div>
    <v-card class="main-card py-4 px-2">
      <h1 class="font-h4">{{ title }}</h1>
    </v-card>
  </div>
</template>

<script>
export default {
  membername: "HeaderPage",

  props: {
    title: String,
  },

  data: () => ({}),
};
</script>
<style lang="scss" scoped>
//
.main-card {
  background: #fcfcfc;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
  //box-shadow: 5px 10px red;
  border-radius: 16px;
}
</style>
