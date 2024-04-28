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
    </v-data-table>
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
    headers: [
      { text: "Member name", align: "start", value: "membername" },
      { text: "Description", value: "description" },
      { text: "Branch name", value: "branchname" },
      { text: "Date", value: "date" },
    ],
    formattedFeedback: [
      {
        membername: "John Doe",
        description: "description of the event ",
        branchname: "01123212",
        date: "12/21/1321",
      },
      {
        membername: "Jane Smith",
        description: "description",
        branchname: "jane@example.com",
        date: "12/21/1321",
      },
      {
        membername: "Bob Johnson",
        description: "description",
        branchname: "01321312",
        date: "12/21/1321",
      },
      // Add more branchname items as needed
    ],
  }),
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
