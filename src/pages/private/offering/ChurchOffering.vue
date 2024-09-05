<template>
  <div class="px-md-4">
    <TheHeader title="Church offering"> </TheHeader>

    <v-data-table
      :headers="headers"
      :items="matGetOfferingByBranchId"
      item-key="date"
      items-per-page="13"
      class="mt-1 mt-md-7"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Offering</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <!-- export -->
          <v-btn class="btn orange white--text mr-2" depressed>export</v-btn>

          <!-- Add -->
          <v-btn
            class="green"
            fab
            width="35"
            height="35"
            depressed
            @click="openAddOfferingDialog"
          >
            <v-icon size="medium" color="white">mdi-plus</v-icon>
          </v-btn>
        </v-toolbar>
      </template>
      <!-- card or cash -->
      <template v-slot:[`item.type`]="{ item }">
        <v-chip
          v-if="item.type === 'Offering'"
          color="green"
          text-color="white"
        >
          Offering
        </v-chip>

        <v-chip v-else class="ma-2" color="red" text-color="white">
          Spent
        </v-chip>
      </template>

      <!-- edit action button -->
      <template v-slot:[`item.action`]="{ item }">
        <v-icon small class="mr-2" color="orange" @click="editOffering(item)">
          mdi-pencil
        </v-icon>
      </template>
    </v-data-table>

    <DashboardMainDialog />

    <!-- overlay -->
    <v-overlay :value="overlay" z-index="1000">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import TheHeader from "@/components/headers/TheHeader";
import DashboardMainDialog from "@/pages/private/dashboard/dialogs/DasboardMainDialog.vue";

export default {
  name: "OfferingPage",

  components: {
    TheHeader,
    DashboardMainDialog,
  },

  data: () => ({
    overlay: false,

    editOfferingDialog: false,

    headers: [
      { text: "Date Offered/Spent", align: "start", value: "date" },
      { text: "Description", value: "description" },
      { text: "Type", value: "type" },
      { text: "Created At", value: "createdat" },
      { text: "Updated At", value: "updatedat" },
      { text: "Amount", value: "amount" },
      { text: "Action", value: "action" },
    ],
    formattedFeedback: [
      {
        date: "12/02/1221",
        description: "description",
        type: "Add offerring",
        createdat: "12/02/1221",
        updatedat: "12/02/1221",
        amount: 10,
        action: "icon",
      },
    ],
  }),

  async created() {
    this.overlay = true;

    await Promise.all([
      this.$store.dispatch(
        "offering/getOfferingByBranchIdReq",
        this.getUserDetails.branchId
      ),
    ])
      .then(() => {
        this.overlay = false;
      })
      .catch(() => {
        this.overlay = false;
      });
  },

  computed: {
    // getUserDetails
    getUserDetails() {
      return this.$store.getters["user/getUserDetails"];
    },

    // getOfferingByBranchId
    getOfferingByBranchId() {
      return this.$store.getters["offering/getOfferingByBranchId"];
    },

    // matGetOfferingByBranchId
    matGetOfferingByBranchId() {
      return this.getOfferingByBranchId.map((offering) => ({
        id: offering.id,
        date: offering.date,
        description: "description",
        type: offering.transactionType,
        createdat: offering.createdat,
        updatedat: offering.updatedat,
        amount: offering.amount,
        action: "icon",
      }));
    },
  },

  methods: {
    ...mapMutations({
      // setShowStatisticsDialog
      setShowStatisticsDialog: "dashboard/setShowStatisticsDialog",
      // setDashboardStep
      setDashboardStep: "dashboard/setDashboardStep",
      // setSelectedOfferingId
      setSelectedOfferingId: "offering/setSelectedOfferingId",
      // resetState
      resetState: "dashboard/resetState",
    }),

    editOffering(item) {
      this.setSelectedOfferingId(item.id);
      this.setDashboardStep(10);
      this.setShowStatisticsDialog(true);
    },

    openAddOfferingDialog() {
      this.setDashboardStep(2);
      this.setShowStatisticsDialog(true);
    },
  },
};
</script>

<style lang="scss" scoped>
//
</style>
