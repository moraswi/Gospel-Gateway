<template>
  <div class="px-md-4">
    <TheHeader title="Service program"> </TheHeader>

    <v-data-table
      :headers="headers"
      :items="formattedFeedback"
      item-key="membername"
      items-per-page="15"
      class="mt-7"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Service Program</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn class="btn orange white--text" depressed>export</v-btn>
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

    <!-- overlay -->
    <v-overlay :value="overlay" z-index="1000">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import TheHeader from "@/components/headers/TheHeader";

export default {
  membername: "ServiceProgramPage",

  components: {
    TheHeader,
  },

  data: () => ({
    overlay: false,

    editServiceProgramDialog: false,
    deleteServiceProgramDialog: false,
    headers: [
      { text: "Member name", align: "start", value: "membername" },
      { text: "Description", value: "description" },
      { text: "Branch name", value: "branchname" },
      { text: "Date", value: "date" },
      { text: "Action", value: "action" },
    ],
    formattedFeedback: [
      {
        membername: "John Doe",
        description: "description of the event ",
        branchname: "01123212",
        date: "12/21/1321",
        action: "icon",
      },
      {
        membername: "Jane Smith",
        description: "description",
        branchname: "jane@example.com",
        date: "12/21/1321",
        action: "icon",
      },
      {
        membername: "Bob Johnson",
        description: "description",
        branchname: "01321312",
        date: "12/21/1321",
        action: "icon",
      },
      // Add more branchname items as needed
    ],
  }),

  async created() {
    this.overlay = true;
    await Promise.all([
      this.$store.dispatch(
        "event/getEventByChurchIdReq",
        this.getUserDetails.churchId
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
    // getEventByChurchId
    getEventByChurchId() {
      return this.$store.getters["event/getEventByChurchId"];
    },

    // getUserDetails
    getUserDetails() {
      return this.$store.getters["user/getUserDetails"];
    },
  },

  methods: {
    editServiceProgram() {
      this.editServiceProgramDialog = !this.editServiceProgramDialog;
    },

    deleteServiceProgram() {
      this.deleteServiceProgramDialog = !this.deleteServiceProgramDialog;
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
