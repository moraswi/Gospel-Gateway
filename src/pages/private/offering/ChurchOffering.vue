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

    <!-- date -->
      <template v-slot:[`item.date`]="{ item }">
        <FormattedDate :date="item.date" />
      </template>

      <!-- createdat -->
      <template v-slot:[`item.createdat`]="{ item }">
        <FormattedDate :date="item.createdat" />
      </template>

      <!-- updatedat -->
      <template v-slot:[`item.updatedat`]="{ item }">
        <FormattedDate :date="item.updatedat" />
      </template>

      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Offering</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <!-- export -->
          <!-- <v-btn class="btn orange white--text mr-2" @click="exportData" depressed>export</v-btn> -->

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
import FormattedDate from '@/components/AppShared.vue';

export default {
  name: "OfferingPage",

  components: {
    TheHeader,
    DashboardMainDialog,
    FormattedDate
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
        description: offering.description,
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

      // setSelectedOfferingId
      setSelectedOfferingId: "offering/setSelectedOfferingId",

      // setAmount
      setAmount: "offering/setAmount",

      // setDate
      setDate: "offering/setDate",

      // setDescription
      setDescription: "offering/setDescription",

      // setTransactionType
      setTransactionType: "offering/setTransactionType",

      // setBranchId
      setBranchId: "offering/setBranchId",

      // setCreatedat
      setCreatedat: "offering/setCreatedat",

      // setUpdatedat
      setUpdatedat: "offering/setUpdatedat",

      // resetState
      resetState: "dashboard/resetState",
    }),

    // editOffering
    editOffering(item) {
      this.setAmount(item.amount);
      this.setDate(item.date);
      this.setDescription(item.description);
      this.setTransactionType(item.type);
      this.setBranchId(item.branchId);
      this.setCreatedat(item.createdat);
      this.setUpdatedat(item.updatedat);
      this.setSelectedOfferingId(item.id);
      this.setDashboardStep(10);
      this.setShowStatisticsDialog(true);
    },

    // openAddOfferingDialog
    openAddOfferingDialog() {
      this.setDashboardStep(2);
      this.setShowStatisticsDialog(true);
    },

    exportData() {
      const data = this.matGetOfferingByBranchId;
      const csvContent = this.convertToCSV(data);
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "offerings.csv");
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },

     convertToCSV(data) {
      const header = ['Date Offered/Spent', 'Description', 'Type', 'Created At', 'Updated At', 'Amount'];
      const rows = data.map(item => [
        item.date,
        item.description,
        item.type,
        item.createdat,
        item.updatedat,
        item.amount
      ]);

      const csv = [
        header.join(','), // Header row
        ...rows.map(e => e.join(',')) // Data rows
      ].join('\n');

      return csv;
    },

    formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString(); // Customize the date format as needed
},

  },
};
</script>

<style lang="scss" scoped>
//
</style>
