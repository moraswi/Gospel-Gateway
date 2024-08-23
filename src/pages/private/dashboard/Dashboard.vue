<template>
  <div class="px-md-4">
    <!-- <TheHeader title="Dashboard"> </TheHeader> -->
    <TheMemberMobileHeader />

    <HeaderMainCard class="hidden-sm-and-down">
      <v-layout column fill-height>
        <h2 class="white--text">
          Hi {{ getUserDetails.firstName }} {{ getUserDetails.lastName }}
        </h2>

        <!-- Enjoy GospelGateway service -->
        <h4 class="white--text mt-2">Enjoy GospelGateway service.</h4>
        <!-- </v-flex> -->
        <v-row class="mt-5">
          <v-col cols="12" xl="2" md="3">
            <StatisticsCard
              statistic="10 000"
              card-name="People"
              :showDeleteButton="false"
              :showEditButton="false"
              :showAddButton="false"
              @click="handlePeopleButtonClick"
            />
          </v-col>
          <v-col cols="12" xl="2" md="3">
            <StatisticsCard
              statistic="R 1 100000"
              card-name="Offering"
              :showDeleteButton="false"
              :showEditButton="false"
              :showAddButton="true"
              @click="handleOfferingButtonClick"
            />
          </v-col>
          <!-- <v-col cols="12" xl="2" md="3">
            <StatisticsCard
              statistic="R 1 000"
              card-name="Spent"
              :showDeleteButton="false"
              :showEditButton="false"
              :showAddButton="true"
              @click="handleOfferingButtonClick"
            />
          </v-col> -->
          <v-col cols="12" xl="2" md="3">
            <StatisticsCard
              statistic="100"
              card-name="Members"
              :showDeleteButton="false"
              :showEditButton="false"
              :showAddButton="false"
              @click="handlePeopleButtonClick"
            />
          </v-col>
          <v-col cols="12" xl="2" md="3">
            <StatisticsCard
              statistic="0"
              card-name="Events"
              :showDeleteButton="false"
              :showEditButton="false"
              :showAddButton="true"
              @click="handleEventsButtonClick"
            />
          </v-col>
          <v-col cols="12" xl="2" md="3">
            <StatisticsCard
              statistic="0"
              card-name="Branches"
              :showDeleteButton="false"
              :showEditButton="false"
              :showAddButton="true"
              @click="handleBranchesButtonClick"
            />
          </v-col>
          <v-col cols="12" xl="2" md="3">
            <StatisticsCard
              statistic="3"
              card-name="Announcements"
              :showDeleteButton="false"
              :showEditButton="false"
              :showAddButton="true"
              @click="handleAnnouncementButtonClick"
            />
          </v-col>
        </v-row>
      </v-layout>
    </HeaderMainCard>

    <v-row class="mt-10">
      <v-col cols="12" md="6">
        <h1 class="font-h4">Branches</h1>
        <v-card
          class="custom-card px-3 py-6 mt-2"
          width="100%"
          height="350"
          style="overflow-y: auto"
        >
          <div
            v-for="(branch, index) in getBranchByChurchId"
            :key="index"
            class="pa-2"
            :style="{ backgroundColor: index % 2 == 0 ? '#e6ebf1' : 'white' }"
          >
            <h4>{{ branch.name }}</h4>
            <label>{{ branch.location }}</label>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <h1 class="font-h4">Sunday Program</h1>
        <v-card class="custom-card px-7 py-6 mt-2" width="100%">
          <v-layout row align-center>
            <div>
              <h1 class="font-h4 mt-n1">member name</h1>
            </div>
            <v-spacer></v-spacer>
            <div class="text-right">
              <h4 class="font-p">preaching</h4>
              <p class="font-p4 mt-1">12/12/2000</p>
            </div>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>

    <DashboardMainDialog />

    <!-- overlay -->
    <v-overlay :value="overlay" z-index="1000">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import DashboardMainDialog from "@/pages/private/dashboard/dialogs/DasboardMainDialog.vue";
import TheMemberMobileHeader from "@/components/headers/TheMobileHeader.vue";
import StatisticsCard from "@/components/cards/StatisticsCard.vue";
import TheHeader from "@/components/headers/TheHeader";
import HeaderMainCard from "@/components/cards/HeaderMainCard.vue";

export default {
  name: "DashboardPage",

  components: {
    DashboardMainDialog,
    TheMemberMobileHeader,
    StatisticsCard,
    TheHeader,
    HeaderMainCard,
  },

  data: () => ({
    overlay: false,
    churchId: 0,
    branches: [
      {
        branchName: "Branch Name",
        branchArea: "Branch Area",
      },
    ],
  }),

  async created() {
    this.overlay = true;

    await Promise.all([
      this.$store.dispatch("branch/getBranchByChurchIdReq", 1),
    ])
      .then(() => {
        this.overlay = false;
      })
      .catch(() => {
        this.overlay = false;
      });
  },

  computed: {
    // getBranchByChurchId
    getBranchByChurchId() {
      return this.$store.getters["branch/getBranchByChurchId"];
    },

    // getUserDetails
    getUserDetails() {
      return this.$store.getters["user/getUserDetails"];
    },
  },

  methods: {
    ...mapMutations({
      // setShowStatisticsDialog
      setShowStatisticsDialog: "dashboard/setShowStatisticsDialog",
      // setDashboardStep
      setDashboardStep: "dashboard/setDashboardStep",

      // resetState
      resetState: "dashboard/resetState",
    }),
    cancel() {
      // this.setShowDeclinedDialog(false);
      // this.setShowDeclinedMobileDialog(false);
    },

    handlePeopleButtonClick(action) {
      switch (action) {
        case "add":
          this.openAddPeopleDialog();
          break;
        // Add more cases if needed
      }
    },

    handleOfferingButtonClick(action) {
      switch (action) {
        case "add":
          this.openAddOfferingDialog();
          break;
        // Add more cases if needed
      }
    },

    handleEventsButtonClick(action) {
      switch (action) {
        case "add":
          this.openAddEventsDialog();
          break;
        // Add more cases if needed
      }
    },

    handleBranchesButtonClick(action) {
      switch (action) {
        case "add":
          this.openAddBranchesDialog();
          break;
        // Add more cases if needed
      }
    },

    handleAnnouncementButtonClick(action) {
      switch (action) {
        case "add":
          this.openAddAnnouncementDialog();
          break;
        // Add more cases if needed
      }
    },

    openAddPeopleDialog() {
      this.setDashboardStep(1);
      this.setShowStatisticsDialog(true);
    },

    openAddOfferingDialog() {
      this.setDashboardStep(2);
      this.setShowStatisticsDialog(true);
    },

    openAddSpentDialog() {
      this.setDashboardStep(3);
      this.setShowStatisticsDialog(true);
    },

    openAddEventsDialog() {
      this.setDashboardStep(4);
      this.setShowStatisticsDialog(true);
    },

    openAddBranchesDialog() {
      this.setDashboardStep(5);
      this.setShowStatisticsDialog(true);
    },

    openAddAnnouncementDialog() {
      this.setDashboardStep(6);
      this.setShowStatisticsDialog(true);
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-card {
  border-left: 6px solid orange; /* Adjust the thickness as needed */
}
</style>
<!-- src/components/admin/adminstration/dialogs/new-stokvel-dialog-steps/DeclinedDialogStep1.vue -->
