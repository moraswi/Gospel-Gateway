<template>
  <div class="white default-layout">
    <v-container fluid>
      <router-view />
    </v-container>

    <!-- Get A Quote Dialog -->
    <!-- <GetAQuoteDialog /> -->
  </div>
</template>

<script>
// import GetAQuoteDialog from "@/components/shared/dialogs/get-a-quote/GetAQuoteDialog.vue";

export default {
  name: "GospelGatewayDefault",
  components: {
    // GetAQuoteDialog,
  },
  data() {
    return {
      //
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.default-layout {
  min-height: 100vh;
}
</style>
