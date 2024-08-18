<template>
  <!-- Transact Main -->
  <v-card class="transact-main br-12 px-7 py-6 relative" width="100%" flat>
    <!-- Img -->
    <!-- <v-img
      :src="imgSrc"
      class="absolute transact-main-img"
      height="100%"
      contain
    /> -->

    <!-- Content -->
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  name: "AllianceUiTransactMainCard",

  props: {
    imgSrc: {
      type: String,
      required: true,
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.transact-main {
  background-color: #20505d;
  border-radius: 10px;
}

.transact-main-img {
  top: 0;
  right: 0;
  bottom: 0;

  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
</style>
