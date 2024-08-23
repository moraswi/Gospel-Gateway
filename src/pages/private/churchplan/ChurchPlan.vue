<template>
  <div class="px-md-4">
    <TheHeader title="Church plan" color="red"> </TheHeader>

    <v-toolbar flat class="mt-10">
      <v-toolbar-title>Church plan</v-toolbar-title>
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
        @click="openAddChurchPlanDialog"
      >
        <v-icon size="medium" color="white">mdi-plus</v-icon>
      </v-btn>

      <!-- dialog -->
      <v-dialog v-model="editOfferingDialog" max-width="500px">
        <v-card class="pa-4">
          <h1 class="font-h4">Edit Offering</h1>
          <v-text-field class="mt-5" label="Amount" outlined></v-text-field>

          <v-text-field class="" label="Date" outlined></v-text-field>

          <v-text-field class="" label="Description" outlined></v-text-field>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red white--text" @click="editOffering()"
              >Cancel</v-btn
            >
            <v-btn color="btn green white--text" @click="editOffering()"
              >Subite</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="mapGetChurchPlanByBranchId"
      item-key="title"
      items-per-page="15"
      class="mt-7"
    >
      <template v-slot:[`item.action`]="{ item }">
        <v-icon
          small
          class="mr-2"
          color="orange"
          @click="editPeopleDetails(item.id)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          class="mr-2"
          color="red"
          @click="deleteChurchPlanReq(item.id)"
        >
          mdi-delete
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
  title: "ChurchPlanPage",

  components: {
    TheHeader,
    DashboardMainDialog,
  },

  data: () => ({
    overlay: false,

    headers: [
      { text: "Title", align: "start", value: "title" },
      { text: "Description", value: "description" },
      { text: "Contact", value: "contact" },
      { text: "Date", value: "date" },
      { text: "Action", value: "action" },
    ],
    formattedFeedback: [
      {
        title: "John Doe",
        description: "description of the event ",
        contact: "01123212",
        date: "12/21/1321",
      },
    ],
  }),

  async created() {
    this.overlay = true;

    await Promise.all([
      this.$store.dispatch(
        "churchPlan/getChurchPlanByBranchIdReq",
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

    // getChurchPlanByBranchId
    getChurchPlanByBranchId() {
      return this.$store.getters["churchPlan/getChurchPlanByBranchId"];
    },

    // mapGetChurchPlanByBranchId
    mapGetChurchPlanByBranchId() {
      return this.getChurchPlanByBranchId.map((churchPlan) => ({
        id: churchPlan.id,
        date: churchPlan.date,
        title: churchPlan.title,
        description: churchPlan.description,
        contact: churchPlan.contact,
      }));
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

    // openAddChurchPlanDialog
    openAddChurchPlanDialog() {
      this.setDashboardStep(12);
      this.setShowStatisticsDialog(true);
    },

    // deleteChurchPlanReq
    async deleteChurchPlanReq(churchPlanId) {
      try {
        this.overlay = true;

        const response = await this.$store.dispatch(
          "churchPlan/deleteChurchPlanReq",
          churchPlanId
        );

        if (response.status == 200) {
          this.$store.dispatch(
            "churchPlan/getChurchPlanByBranchIdReq",
            this.getUserDetails.branchId
          ),
            this.$swal.fire({
              icon: "success",
              title: "Successful!",
              showConfirmButton: true,
            });
        } else {
          this.$swal.fire({
            icon: "error",
            title: "Something went wrong! Try again",
            showConfirmButton: true,
          });
        }
      } catch (error) {
        this.$swal.fire({
          icon: "error",
          title: "Something went wrong!",
          showConfirmButton: true,
        });
      } finally {
        this.overlay = false;
      }
    },
  },
};
</script>
