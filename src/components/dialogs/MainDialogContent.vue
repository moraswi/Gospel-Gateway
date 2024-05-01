<template>
  <v-card class="grey rounded-lg">
    <!-- Content -->
    <v-card class="transparent br-16 px-3 px-sm-9 pb-sm-5 pt-sm-2" width="100%" flat>
      <!-- Title -->
      <h1
        class="ff-1 fsn fw-800 fs-18 fs-sm-24 fs-xl-28 lh-22 lh-sm-28 lh-xl-34 black500--text mt-7 mt-sm-5 mt-xl-10"
      >
        {{ title }}
      </h1>

      <!-- Main -->
      <v-card
        max-height="400"
        class="mt-5 mt-sm-6 transparent"
        style="overflow-y: auto"
        flat
      >
        <slot name="main"></slot>
      </v-card>
    </v-card>

    <!-- Bottom Card -->
    <v-card
      :class="bottomCardBg"
      class="right-0 bottom-0 left-0 relative z-index-2 red"
      flat
    >
      <div class="box-shadow-3 gray50 pa-6 px-sm-9 pt-sm-5 pb-sm-8 pb-xl-11">
        <slot name="bottom"></slot>
      </div>
    </v-card>
  </v-card>
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
