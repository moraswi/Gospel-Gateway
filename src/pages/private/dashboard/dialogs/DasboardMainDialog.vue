<template>
  <div>
    <!-- desktop -->
    <!-- v-if="$vuetify.breakpoint.name != 'xs'" -->
    <!-- v-model="investmentProcessing.showInvestmentDialog" -->

    <v-dialog
      v-model="dialog"
      class="br-16 bs-none"
      max-width="600px"
      overlay-color="black600"
      overlay-opacity="0.25"
      content-class="elevation-0"
      persistent
    >
      <!-- Step 1 -->
      <!-- <StatisticsPeopleDialog v-show="investmentProcessing.investmentDialogStep == 1" /> -->
      <!-- <StatisticsPeopleDialog /> -->
      <!-- <StatisticsOfferingDialog /> -->
      <!-- <StatisticsAnnouncementDialog /> -->
      <!-- <StatisticsBranchDialog /> -->
      <!-- <StatisticsEventsDialog /> -->
      <!-- <StatisticsSpentDialog /> -->
      <!-- <StatisticsVideoDialog /> -->
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

// import StatisticsPeopleDialog from "@/pages/private/dashboard/dialogs/StatisticsPeopleDialog.vue";
// import StatisticsOfferingDialog from "@/pages/private/dashboard/dialogs/StatisticsOfferingDialog.vue";
// import StatisticsAnnouncementDialog from "@/pages/private/dashboard/dialogs/StatisticsAnnouncementDialog.vue";
// import StatisticsBranchDialog from "@/pages/private/dashboard/dialogs/StatisticsBranchDialog.vue";
// import StatisticsEventsDialog from "@/pages/private/dashboard/dialogs/StatisticsEventsDialog.vue";
// import StatisticsSpentDialog from "@/pages/private/dashboard/dialogs/StatisticsSpentDialog.vue";
// import StatisticsVideoDialog from "@/pages/private/dashboard/dialogs/StatisticsVideoDialog.vue";

export default {
  name: "AllianceuiInvestmentDialog",

  data() {
    return {
      dialog: false,
    };
  },

  components: {
    // StatisticsPeopleDialog,
    // StatisticsOfferingDialog,
    // StatisticsAnnouncementDialog,
    // StatisticsBranchDialog,
    // StatisticsEventsDialog,
    // StatisticsSpentDialog,
    // StatisticsVideoDialog,
  },

  computed: {
    ...mapState({ investmentProcessing: "investmentProcessing" }),

    // showInvestmentDialog
    showInvestmentDialog() {
      return (
        this.investmentProcessing.showInvestmentDialog &&
        this.$vuetify.breakpoint.name != "xs"
      );
    },

    // showMobileAlertDialogStep2
    // showMobileAlertDialogStep2() {
    //   return (
    //     this.investmentProcessing.investmentDialogStep == 2 &&
    //     this.$vuetify.breakpoint.name == "xs"
    //   );
    // },

    // showMobileSuccessDialogStep6
    // showMobileSuccessDialogStep6() {
    //   return (
    //     this.investmentProcessing.investmentDialogStep == 6 &&
    //     this.$vuetify.breakpoint.name == "xs"
    //   );
    // },
  },

  watch: {
    // showInvestmentDialog
    "investmentProcessing.showInvestmentDialog"(val) {
      this.setShowInvestmentDialog(val);
    },
  },

  mounted() {},

  methods: {
    ...mapMutations({
      // setShowInvestmentDialog
      setShowInvestmentDialog: "investmentProcessing/setShowInvestmentDialog",

      // setShowInvestmentMobileDialog
      setShowInvestmentMobileDialog: "investmentProcessing/setShowInvestmentMobileDialog",

      // resetState
      resetState: "investmentProcessing/resetState",
    }),

    close() {
      // resetState
      setTimeout(() => {
        this.resetState();
      }, 1000);
      this.setShowInvestmentMobileDialog(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-dialog {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
}
</style>
