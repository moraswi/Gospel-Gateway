
<template>
  <v-card
    class="gray200 py-md-8 ma-0 px-0"
    flat
  >
    <!-- :max-height="maxHeight" -->
    <!--  -->
    <v-container class="mt-0 pt-0" fluid>
      <!-- Desktop -->
      <v-layout>
         <AdminSidebar class="hidden-sm-and-down" /> 

        <v-card
          class="overflow-auto"
          color="transparent"
          width="100%"
          flat
        >
          <v-layout column>
            <router-view />
          </v-layout>
        </v-card>
      </v-layout> 

      <!-- <v-layout v-else>
        <v-card class="ma-0 pa-0" color="transparent" width="100%" flat>
          <v-layout column>
            <router-view />
          </v-layout>
        </v-card>
      </v-layout> -->

     <!-- <GetAQuoteDialog /> -->
    </v-container>
  </v-card>
</template>

<script>
import AdminSidebar from "@/components/sidebars/AdminSidebar.vue";

export default {
  name: 'GospelGatewayAdmin',

    components: {
    AdminSidebar
  },

  computed:{
        // isMobileLayout
        isMobileLayout() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
  }

}
</script>




