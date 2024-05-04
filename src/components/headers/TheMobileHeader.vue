<template>
  <div class="mobile-nav-bg sticky top-0 z-index-10 hidden-md-and-up">
    <!-- Main -->
    <v-card
      class="bg-img px-4"
      color="transparent"
      width="100%"
      height="59"
      flat
    >
      <v-layout fill-height justify-space-between align-center>
        <!-- Left -->
        <div>
          <slot></slot>
        </div>

        <!-- Right -->
        <div>
          <v-layout align-center>
            <v-btn  @click="setShowMobileAdminSidebar(true)">open</v-btn>
          </v-layout>
        </div>
      </v-layout>
    </v-card>
  </div>
</template>

<script>

import { mapMutations } from "vuex";

export default {
  name: "AllianceUiTheMemberMobileHeader",

  data() {
    return {
    };
  },

  mounted() {},

  methods: {
    ...mapMutations({
      // setShowMobileAdminSidebar
      setShowMobileAdminSidebar: "headers/setShowMobileAdminSidebar",
    }),
  },
};
</script>

<style lang="scss" scoped>
.mobile-nav-bg {
  background: linear-gradient(106.54deg, #1778f2 38.55%, #05489d 95.51%);
}

.bg-img {
  background-size: auto;
  background-position: top right;
}
</style>
