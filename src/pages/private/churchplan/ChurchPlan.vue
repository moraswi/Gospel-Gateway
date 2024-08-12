<template>
  <div class="px-md-4">
    <TheHeader title="Church plan" color="red"> </TheHeader>

    <v-data-table
      :headers="headers"
      :items="formattedFeedback"
      item-key="name"
      items-per-page="15"
      class="mt-7"
    >
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
  name: "ChurchPlanPage",

  components: {
    TheHeader,
  },

  data: () => ({
    overlay: false,

    headers: [
      { text: "Name", align: "start", value: "name" },
      { text: "Description", value: "description" },
      { text: "Contact", value: "contact" },
      { text: "Date", value: "date" },
      { text: "Action", value: "action" },
    ],
    formattedFeedback: [
      {
        name: "John Doe",
        description: "description of the event ",
        contact: "01123212",
        date: "12/21/1321",
      },
      {
        name: "Jane Smith",
        description: "description",
        contact: "jane@example.com",
        date: "12/21/1321",
      },
      {
        name: "Bob Johnson",
        description: "description",
        contact: "01321312",
        date: "12/21/1321",
      },
      // Add more contact items as needed
    ],
  }),
};
</script>
