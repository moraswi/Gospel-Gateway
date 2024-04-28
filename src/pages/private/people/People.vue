<template>
  <div class="px-md-4">
    <TheHeader title="Our users"> </TheHeader>

    <v-data-table
      :headers="headers"
      :items="formattedFeedback"
      item-key="name"
      items-per-page="13"
      class="mt-7"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>members and users</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

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
                <v-btn color="red white--text" @click="editItem()">Cancel</v-btn>
                <v-btn color="btn green white--text" @click="editItem()">Subite</v-btn>
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
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import TheHeader from "@/components/headers/Header";

export default {
  name: "PeoplePage",

  components: {
    TheHeader,
  },

  data: () => ({
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
    editItem() {
      // this.dialog = true;
      this.dialog = !this.dialog;
    },
  },
};
</script>

<style lang="scss" scoped>
//
</style>
