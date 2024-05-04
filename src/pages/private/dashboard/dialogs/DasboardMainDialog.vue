<template>
  <div>
    <!-- desktop -->
    <!-- v-if="$vuetify.breakpoint.name != 'xs'" -->
    <!-- v-model="investmentProcessing.showInvestmentDialog" -->

    <v-dialog
      v-model="dashboard.showStatisticsDialog"
      class="br-16 bs-none"
      max-width="600px"
      overlay-color="black600"
      overlay-opacity="0.25"
      content-class="elevation-0"
      persistent
    >
      <StatisticsPeopleDialog v-show="dashboard.dashboardStep == 1"/>
      <StatisticsOfferingDialog v-show="dashboard.dashboardStep == 2"/>
      <StatisticsSpentDialog v-show="dashboard.dashboardStep == 3"/>
      <StatisticsEventsDialog v-show="dashboard.dashboardStep == 4"/>
      <StatisticsBranchDialog v-show="dashboard.dashboardStep == 5"/>
      <StatisticsAnnouncementDialog v-show="dashboard.dashboardStep == 6"/>
      <StatisticsVideoDialog v-show="dashboard.dashboardStep == 7"/>
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

import StatisticsPeopleDialog from "@/pages/private/dashboard/dialogs/StatisticsPeopleDialog.vue";
import StatisticsOfferingDialog from "@/pages/private/dashboard/dialogs/StatisticsOfferingDialog.vue";
import StatisticsSpentDialog from "@/pages/private/dashboard/dialogs/StatisticsSpentDialog.vue";
import StatisticsEventsDialog from "@/pages/private/dashboard/dialogs/StatisticsEventsDialog.vue";
import StatisticsBranchDialog from "@/pages/private/dashboard/dialogs/StatisticsBranchDialog.vue";
import StatisticsAnnouncementDialog from "@/pages/private/dashboard/dialogs/StatisticsAnnouncementDialog.vue";
import StatisticsVideoDialog from "@/pages/private/dashboard/dialogs/StatisticsVideoDialog.vue";

export default {
  name: "DashboardMainDialog",

  data() {
    return {
      dialog: false,
    };
  },

  components: {
    StatisticsPeopleDialog,
    StatisticsOfferingDialog,
    StatisticsSpentDialog,
    StatisticsEventsDialog,
    StatisticsBranchDialog,
    StatisticsAnnouncementDialog,
    StatisticsVideoDialog,
  },

  computed: {
    ...mapState({ dashboard: "dashboard" }),

    showStatisticsDialog(){
      return (
        this.dashboard.showStatisticsDialog &&
        this.$vuetify.breakpoint.name != "xs"
      )
    }
  },

  watch: {
  },

  mounted() {},

  methods: {
    ...mapMutations({
      // setShowStatisticsDialog
      setShowStatisticsDialog: "dashboard/setShowStatisticsDialog",

      // setShowPeopleMobileDialog
      setShowPeopleMobileDialog: "dashboard/setShowPeopleMobileDialog",

      // resetState
      resetState: "dashboard/resetState",
    }),

    close() {
      // resetState
      setTimeout(() => {
        this.resetState();
      }, 1000);
      this.setShowStatisticsDialog(false);
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
