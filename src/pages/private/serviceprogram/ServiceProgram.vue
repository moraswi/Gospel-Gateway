<template>
  <div class="px-md-4">
    <TheHeader title="Service program"> </TheHeader>

    <v-data-table
      :headers="headers"
      :items="getServiceProgramByBranchIdReq"
      item-key="membername"
      items-per-page="15"
      class="mt-7"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <!-- Service Program -->
          <v-toolbar-title>Service Program</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <!-- export -->
          <!-- <v-btn class="btn orange white--text mr-2" depressed>export</v-btn> -->

          <!-- Add -->
          <v-btn
            class="green"
            fab
            width="35"
            height="35"
            depressed
            @click="openAddServiceProgramDialog('add')"
          >
            <v-icon size="medium" color="white">mdi-plus</v-icon>
          </v-btn>



          <!-- edit dialog -->
          <v-dialog v-model="editServiceProgramDialog" max-width="500px">
            <v-card class="pa-4">
              <h1 class="font-h4">Edit Service Program</h1>
              <v-text-field
                class="mt-5"
                label="Member Name"
                outlined
              ></v-text-field>

              <v-text-field class="" label="Date" outlined></v-text-field>

              <v-text-field
                class=""
                label="Branch Name"
                outlined
              ></v-text-field>

              <v-text-field
                class=""
                label="Description"
                outlined
              ></v-text-field>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red white--text" @click="editServiceProgram()"
                  >Cancel</v-btn
                >
                <v-btn
                  color="btn green white--text"
                  @click="editServiceProgram()"
                  >Subite</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- delete dialog -->
          <v-dialog v-model="deleteServiceProgramDialog" max-width="500px">
            <v-card class="pa-4">
              <h1 class="font-h4">Delete Service Program</h1>
              <v-text-field class="mt-5" label="Amount" outlined></v-text-field>

              <v-text-field class="" label="Date" outlined></v-text-field>

              <v-text-field
                class=""
                label="Description"
                outlined
              ></v-text-field>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red white--text" @click="deleteServiceProgram()"
                  >Cancel</v-btn
                >
                <v-btn
                  color="btn green white--text"
                  @click="deleteServiceProgram()"
                  >Subite</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <!-- date -->
      <template v-slot:[`item.date`]="{ item }">
          <FormattedDate :date="item.date" />
      </template>

      <!-- edit action button -->
      <template v-slot:[`item.action`]="{ item }">
        <v-icon
          small
          class="mr-2"
          color="orange"
          @click="editServiceProgram(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          class="mr-2"
          color="red"
          @click="deleteServiceProgram(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <!-- <template v-slot:[`item.action`]="{ item }">
      </template> -->
    </v-data-table>

    <!-- DashboardMainDialog -->
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
  membername: "ServiceProgramPage",

  components: {
    TheHeader,
    DashboardMainDialog,
    FormattedDate,
  },

  data: () => ({
    overlay: false,

    editServiceProgramDialog: false,
    deleteServiceProgramDialog: false,
    headers: [
      { text: "Member name", align: "start", value: "memberName" },
      { text: "Description", value: "description" },
      // { text: "Branch name", value: "branchname" },
      { text: "Date", value: "date" },
      { text: "Action", value: "action" },
    ],
  }),

  async created() {
    this.overlay = true;
    await Promise.all([

    // getServiceProgramByBranchIdReq
      this.$store.dispatch(
        "serviceProgram/getServiceProgramByBranchIdReq",
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
    // getServiceProgramByBranchIdReq
    getServiceProgramByBranchIdReq() {
      return this.$store.getters["serviceProgram/getServiceProgramByBranchIdReq"];
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

    editServiceProgram() {
      this.editServiceProgramDialog = !this.editServiceProgramDialog;
    },

    deleteServiceProgram() {
      this.deleteServiceProgramDialog = !this.deleteServiceProgramDialog;
    },

    // openAddOfferingDialog
    openAddServiceProgramDialog() {
      this.setDashboardStep(14);
      this.setShowStatisticsDialog(true);
    },

  },
};
</script>
<style lang="scss" scoped>
//
.main-card {
  background: #fcfcfc;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
  //box-shadow: 5px 10px red;
  border-radius: 16px;
}
</style>
