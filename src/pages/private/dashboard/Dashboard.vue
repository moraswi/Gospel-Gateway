<template>
  <div class="px-md-4">
    <TheHeader title="Dashboard"> </TheHeader>

    <!-- StatisticsCard -->
    <v-row class="mt-5">
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="10 000" card-name="People" @click="openAddPeopleDialog" />
      </v-col>
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="R 1 100000" card-name="Offering" @click="openAddOfferingDialog" />
      </v-col>
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="R 1 000" card-name="Spent" @click="openAddSpentDialog" />
      </v-col>
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="100" card-name="Members" @click="openAddPeopleDialog" />
      </v-col>
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="0" card-name="Events" @click="openAddEventsDialog" />
      </v-col>
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="0" card-name="Branches" @click="openAddBranchesDialog" />
      </v-col>
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="3" card-name="Announcements" @click="openAddAnnouncementDialog" />
      </v-col>
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="23" card-name="Videos" @click="openAddVideoDialog" />
      </v-col>
      <!-- <v-col cols="12" md="3">
              <StatisticsCard statistic="15" card-name="Meetings"/>
          </v-col>
          <v-col cols="12" md="3">
              <StatisticsCard statistic="10" card-name="Members & Roles"/>
          </v-col> -->
    </v-row>

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
            v-for="(branch, index) in branches"
            :key="index"
            class="pa-2"
            :style="{ backgroundColor: index % 2 == 0 ? '#e6ebf1' : 'white' }"
          >
            <h4>{{ branch.branchName }}</h4>
            <label>{{ branch.branchArea }}</label>
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

    <DasboardMainDialog />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import DasboardMainDialog from "@/pages/private/dashboard/dialogs/DasboardMainDialog.vue";
import StatisticsCard from "@/components/cards/StatisticsCard.vue";
import TheHeader from "@/components/headers/TheHeader";

export default {
  name: "DashboardPage",

  components: {
    DasboardMainDialog,
    StatisticsCard,
    TheHeader,
  },

  data: () => ({
  
    branches: [
      {
        branchName: "Branch Name",
        branchArea: "Branch Area",
      },
      {
        branchName: "Dihlopaneng",
        branchArea: "Gauteng",
      },
      {
        branchName: "Dihlopaneng",
        branchArea: "Gauteng",
      },
      {
        branchName: "Dihlopaneng",
        branchArea: "Gauteng",
      },
      {
        branchName: "Dihlopaneng",
        branchArea: "Gauteng",
      },
      {
        branchName: "Dihlopaneng",
        branchArea: "Gauteng",
      },
    ],
  }),

  methods: {
    ...mapMutations({
      // setShowStatisticsDialog
      setShowStatisticsDialog:"dashboard/setShowStatisticsDialog",
      // setDashboardStep
      setDashboardStep:"dashboard/setDashboardStep",

      // resetState
      resetState: "dashboard/resetState",
    }),
    cancel() {
      // this.setShowDeclinedDialog(false);
      // this.setShowDeclinedMobileDialog(false);
    },

    openAddPeopleDialog(){
      this.setDashboardStep(1)
      this.setShowStatisticsDialog(true);
    },

    openAddOfferingDialog(){
      this.setDashboardStep(2)
     this.setShowStatisticsDialog(true);
    },

    openAddSpentDialog(){
      this.setDashboardStep(3)
     this.setShowStatisticsDialog(true);
    },

    openAddEventsDialog(){
      this.setDashboardStep(4)
     this.setShowStatisticsDialog(true);
    },

    openAddBranchesDialog(){
      this.setDashboardStep(5)
     this.setShowStatisticsDialog(true);
    },

    openAddAnnouncementDialog(){
      this.setDashboardStep(6)
     this.setShowStatisticsDialog(true);
    },

    openAddVideoDialog(){
      this.setDashboardStep(7)
     this.setShowStatisticsDialog(true);
    }
  },
};
</script>

<style lang="scss" scoped>
.custom-card {
  border-left: 6px solid orange; /* Adjust the thickness as needed */
}
</style>
<!-- src/components/admin/adminstration/dialogs/new-stokvel-dialog-steps/DeclinedDialogStep1.vue -->
