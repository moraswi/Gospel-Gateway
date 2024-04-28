<template>
  <div class="px-md-4">
    <TheHeader title="Church plan"> </TheHeader>

    <v-data-table
      :headers="headers"
      :items="formattedFeedback"
      item-key="name"
      items-per-page="15"
      class="mt-7"
    >
    </v-data-table>
  </div>
</template>

<script>
import TheHeader from "@/components/headers/Header";

export default {
  name: "ChurchPlanPage",

  components: {
    TheHeader,
  },

  data: () => ({
    headers: [
      { text: "Name", align: "start", value: "name" },
      { text: "Description", value: "description" },
      { text: "Contact", value: "contact" },
      { text: "Date", value: "date" },
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
