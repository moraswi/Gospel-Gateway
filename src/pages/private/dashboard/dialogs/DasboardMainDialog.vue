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
      <!-- add dialog -->
      <addStatisticsPeopleDialog v-show="dashboard.dashboardStep == 1" />
      <addStatisticsOfferingDialog v-show="dashboard.dashboardStep == 2" />
      <addStatisticsSpentDialog v-show="dashboard.dashboardStep == 3" />
      <addStatisticsEventsDialog v-show="dashboard.dashboardStep == 4" />
      <addStatisticsBranchDialog v-show="dashboard.dashboardStep == 5" />
      <addStatisticsAnnouncementDialog v-show="dashboard.dashboardStep == 6" />
      <addStatisticsVideoDialog v-show="dashboard.dashboardStep == 7" />

      <!-- edit dialog -->
      <editStatisticsBranchDialog v-show="dashboard.dashboardStep == 8" />
      <editStatisticsEventsDialog v-show="dashboard.dashboardStep == 9" />
      <editStatisticsOfferingDialog v-show="dashboard.dashboardStep == 10" />
      <editStatisticsVideoDialog v-show="dashboard.dashboardStep == 11" />

      <!-- add dialog -->
      <addChurchPlan v-show="dashboard.dashboardStep == 12" />
      <deleteStatisticsBranchDialog v-show="dashboard.dashboardStep == 13" />
      <deleteStatisticsEventsDialog v-show="dashboard.dashboardStep == 14" />
      <deleteStatisticsVideoDialog v-show="dashboard.dashboardStep == 15" />
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

// add dialogs
import addStatisticsPeopleDialog from "@/pages/private/dashboard/dialogs/addDialog/addStatisticsPeopleDialog.vue";
import addStatisticsOfferingDialog from "@/pages/private/dashboard/dialogs/addDialog/addStatisticsOfferingDialog.vue";
import addStatisticsSpentDialog from "@/pages/private/dashboard/dialogs/addDialog/addStatisticsSpentDialog.vue";
import addStatisticsEventsDialog from "@/pages/private/dashboard/dialogs/addDialog/addStatisticsEventsDialog.vue";
import addStatisticsBranchDialog from "@/pages/private/dashboard/dialogs/addDialog/addStatisticsBranchDialog.vue";
import addStatisticsAnnouncementDialog from "@/pages/private/dashboard/dialogs/addDialog/addStatisticsAnnouncementDialog.vue";
import addStatisticsVideoDialog from "@/pages/private/dashboard/dialogs/addDialog/addStatisticsVideoDialog.vue";
import addChurchPlan from "@/pages/private/dashboard/dialogs/addDialog/addChurchPlan.vue";

// edit dialogs
import editStatisticsBranchDialog from "@/pages/private/dashboard/dialogs/editDialog/editStatisticsBranchDialog.vue";
import editStatisticsEventsDialog from "@/pages/private/dashboard/dialogs/editDialog/editStatisticsEventsDialog.vue";
import editStatisticsOfferingDialog from "@/pages/private/dashboard/dialogs/editDialog/editStatisticsOfferingDialog.vue";
import editStatisticsVideoDialog from "@/pages/private/dashboard/dialogs/editDialog/editStatisticsVideoDialog.vue";

// delete dialog
import deleteStatisticsAnnouncementDialog from "@/pages/private/dashboard/dialogs/deleteDialog/deleteStatisticsAnnouncementDialog.vue";
import deleteStatisticsBranchDialog from "@/pages/private/dashboard/dialogs/deleteDialog/deleteStatisticsBranchDialog.vue";
import deleteStatisticsEventsDialog from "@/pages/private/dashboard/dialogs/deleteDialog/deleteStatisticsEventsDialog.vue";
import deleteStatisticsVideoDialog from "@/pages/private/dashboard/dialogs/deleteDialog/deleteStatisticsVideoDialog.vue";

export default {
  name: "DashboardMainDialog",

  data() {
    return {
      dialog: false,
    };
  },

  components: {
    // add dialog
    addStatisticsPeopleDialog,
    addStatisticsOfferingDialog,
    addStatisticsSpentDialog,
    addStatisticsEventsDialog,
    addStatisticsBranchDialog,
    addStatisticsAnnouncementDialog,
    addStatisticsVideoDialog,
    addChurchPlan,

    // edit dialog
    editStatisticsBranchDialog,
    editStatisticsEventsDialog,
    editStatisticsOfferingDialog,
    editStatisticsVideoDialog,

    // delete dialog
    deleteStatisticsAnnouncementDialog,
    deleteStatisticsBranchDialog,
    deleteStatisticsEventsDialog,
    deleteStatisticsVideoDialog,
  },

  computed: {
    ...mapState({ dashboard: "dashboard" }),

    showStatisticsDialog() {
      return (
        this.dashboard.showStatisticsDialog &&
        this.$vuetify.breakpoint.name != "xs"
      );
    },
  },

  watch: {},

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
