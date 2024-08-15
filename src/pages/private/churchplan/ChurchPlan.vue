<template>
  <div class="px-md-4">
    <TheHeader title="Church plan" color="red"> </TheHeader>

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
  title: "ChurchPlanPage",

  components: {
    TheHeader,
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
    await Promise.all([
      this.$store.dispatch("churchPlan/getChurchPlanByBranchIdReq", 1),
    ]);
  },

  computed: {
    getChurchPlanByBranchId() {
      return this.$store.getters["churchPlan/getChurchPlanByBranchId"];
    },

    mapGetChurchPlanByBranchId() {
      return this.getChurchPlanByBranchId.map((churchPlan) => ({
        date: churchPlan.date,
        title: churchPlan.title,
        description: churchPlan.description,
        contact: churchPlan.contact,
      }));
    },
  },
};
</script>
