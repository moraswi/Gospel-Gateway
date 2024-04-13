
<template>
  <v-card
    class="gray200 py-md-8 ma-0 px-0"
    min-height="100vh"
    flat
  >
    <!-- :max-height="maxHeight" -->
    <!--  -->
    <v-container class="mt-0 pt-0" fluid>
      <!-- Desktop -->
      <v-layout v-if="!isMobileLayout">
         <AdminSidebar class="hidden-sm-and-down" /> 

        <v-card
          class="overflow-auto"
          color="transparent"
          width="100%"
          height="1053"
          flat
        >
          <v-layout column>
            <router-view />
          </v-layout>
        </v-card>
      </v-layout> 

      <v-layout v-else>
        <v-card class="ma-0 pa-0" color="transparent" width="100%" flat>
          <v-layout column>
            <router-view />
          </v-layout>
        </v-card>
      </v-layout>

     <GetAQuoteDialog />
    </v-container>
  </v-card>
</template>

<script>
import AdminSidebar from "@/components/sidebars/AdminSidebar.vue";
// import GetAQuoteDialog from "@/components/shared/dialogs/get-a-quote/GetAQuoteDialog.vue";

export default {
  name: 'GospelGatewayAdmin',

    components: {
    AdminSidebar,
    // GetAQuoteDialog,
  },

  data: () => ({

  }),

    // computed: {
    // maxHeight
    // maxHeight() {
    //   switch (this.$vuetify.breakpoint.name) {
    //     case "xs":
    //       return "1000000";
    //     default:
    //       return "1117";
    //   }
    // },

    // isMobileLayout
  //   isMobileLayout() {
  //     return this.$vuetify.breakpoint.mdAndDown;
  //   },
  // },

}
</script>

<!-- <style>
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style> -->




