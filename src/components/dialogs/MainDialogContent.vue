<template>
  <v-layout :class="cardBg" class="relative br-16" fill-height>
    <!-- Content -->
    <v-card
      :class="useDesktopOnMobileClass"
      class="bg-none br-16 px-3 px-sm-9 py-sm-8"
      width="100%"
      flat
    >
      <!-- Title -->
      <h1
        class="ff-1 fsn fw-800 fs-18 fs-sm-24 fs-xl-28 lh-22 lh-sm-28 lh-xl-34 black500--text mt-7 mt-sm-5 mt-xl-10"
      >
        {{ title }}
      </h1>

      <!-- Main -->
      <div class="mt-5 mt-sm-6">
        <slot name="main"></slot>

        <!-- White Space -->
        <v-card class="bg-none" width="100%" :height="mainWhiteSpaceHeight" flat></v-card>
      </div>
    </v-card>

    <!-- Bottom Card -->
    <v-card
      :class="bottomCardBg"
      class="bg-none right-0 bottom-0 left-0 relative z-index-2"
      flat
    >
      <div class="box-shadow-3 gray50 pa-6 px-sm-9 pt-sm-5 pb-sm-8 pb-xl-11">
        <slot name="bottom"></slot>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: "MainDialogContent",

  props: {
    title: {
      type: String,
      default: "Title",
    },

    mainWhiteSpaceHeight: {
      type: Number,
      default: 82,
    },

    useDesktopOnMobile: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },

  computed: {
    // cardBg
    cardBg() {
      if (this.useDesktopOnMobile) {
        return "main-card";
      }

      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "bg-none";
        default:
          return "main-card";
      }
    },

    // bottomCardBg
    bottomCardBg() {
      if (this.useDesktopOnMobile) {
        return "bottom-card absolute";
      }

      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "fixed z-index-2";
        default:
          return "bottom-card absolute";
      }
    },

    // useDesktopOnMobileClass
    useDesktopOnMobileClass() {
      if (this.useDesktopOnMobile) {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return "py-3";
          default:
            return "";
        }
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-card {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}
</style>
