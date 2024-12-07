<template>
  <v-card class="gray200 py-md-8 ma-0 px-0" flat>
    <v-container class="mt-0 pt-0" fluid>
      <!-- Desktop -->
      <v-layout>
        <AdminSidebar class="hidden-sm-and-down" />
        <AdminMobileSidebar class="hidden-md-and-up" />
        
        <v-card class="overflow-auto" color="transparent" width="100%" flat>
          <v-layout column>
            <router-view />
          </v-layout>
        </v-card>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import AdminSidebar from "@/components/sidebars/AdminSidebar.vue";
import AdminMobileSidebar from "@/components/sidebars/AdminMobileSidebar.vue";

export default {
  name: "GospelGatewayAdmin",

  components: {
    AdminSidebar,
    AdminMobileSidebar,
  },

  computed: {
    // isMobileLayout
    isMobileLayout() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
  },
};
</script>
