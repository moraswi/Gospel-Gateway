<template>
  <div class="px-md-4">
    <TheHeader title="People"> </TheHeader>

    <v-data-table
      :headers="headers"
      :items="formattedFeedback"
      item-key="name"
      items-per-page="13"
      class="mt-7 table-elevated"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>member and users</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn class="btn orange white--text mr-2" depressed>export</v-btn>
          <v-btn class="btn green white--text" depressed>Add Member</v-btn>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card class="pa-4">
              <h1 class="font-h4">Edit a user</h1>
              <v-select
                v-model="select"
                :items="items"
                label="Select if he is a member"
                class="mt-4"
              ></v-select>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red white--text" @click="editPeopleDetails()"
                  >Cancel</v-btn
                >
                <v-btn
                  color="btn green white--text"
                  @click="editPeopleDetails()"
                  >Subite</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <!-- card or cash -->
      <template v-slot:[`item.member`]="{ item }">
        <v-chip
          v-if="item.member === 'Yes'"
          class="ma-2"
          color="green"
          text-color="white"
        >
          Yes
        </v-chip>

        <v-chip v-else class="ma-2" color="red" text-color="white"> No </v-chip>
      </template>

      <template v-slot:[`item.action`]="{ item }">
        <v-icon
          small
          class="mr-2"
          color="orange"
          @click="editPeopleDetails(item)"
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
  name: "PeoplePage",

  components: {
    TheHeader,
  },

  data: () => ({
    overlay: false,

    dialog: false,

    headers: [
      { text: "Name", align: "start", value: "name" },
      { text: "Email", value: "email" },
      { text: "Phone Number", value: "phonenumber" },
      { text: "Member", value: "member" },
      { text: "Branch Name", value: "branchname" },
      { text: "Action", value: "action" },
    ],
    formattedFeedback: [
      {
        name: "John Doe",
        email: "john@example.com",
        phonenumber: "0342142421",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        phonenumber: "012321212",
        member: "No",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "Bob Johnson",
        email: "bob@example.com",
        phonenumber: "0232321221",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "John Doe",
        email: "john@example.com",
        phonenumber: "0342142421",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        phonenumber: "012321212",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "Bob Johnson",
        email: "bob@example.com",
        phonenumber: "0232321221",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "John Doe",
        email: "john@example.com",
        phonenumber: "0342142421",
        member: "No",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        phonenumber: "012321212",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "Bob Johnson",
        email: "bob@example.com",
        phonenumber: "0232321221",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "John Doe",
        email: "john@example.com",
        phonenumber: "0342142421",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        phonenumber: "012321212",
        member: "No",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "Bob Johnson",
        email: "bob@example.com",
        phonenumber: "0232321221",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "John Doe",
        email: "john@example.com",
        phonenumber: "0342142421",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        phonenumber: "012321212",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "Bob Johnson",
        email: "bob@example.com",
        phonenumber: "0232321221",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "John Doe",
        email: "john@example.com",
        phonenumber: "0342142421",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        phonenumber: "012321212",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "Bob Johnson",
        email: "bob@example.com",
        phonenumber: "0232321221",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
      {
        name: "John Doe",
        email: "john@example.com",
        phonenumber: "0342142421",
        member: "Yes",
        branchname: "HOG",
        action: "icon",
      },
    ],
    select: { state: "Florida", abbr: "FL" },
    items: [
      { state: "Florida", abbr: "FL" },
      { state: "Georgia", abbr: "GA" },
      { state: "Nebraska", abbr: "NE" },
      { state: "California", abbr: "CA" },
      { state: "New York", abbr: "NY" },
    ],
  }),

  methods: {
    editPeopleDetails() {
      // this.dialog = true;
      this.dialog = !this.dialog;
    },
  },
};
</script>

<style lang="scss" scoped>
.table-elevated {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>
