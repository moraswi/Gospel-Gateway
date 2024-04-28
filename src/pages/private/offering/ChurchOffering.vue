<template>
  <div class="px-md-4">
    <TheHeader title="Church offering"> </TheHeader>

    <v-layout class="mt-3 hidden-sm-and-up" align-center>
      <v-btn class="mr-2 red white--text" height="25" rounded>spend</v-btn>
      <v-btn class="mr-2 green white--text" height="25" rounded>add offering</v-btn>
    </v-layout>

    <v-data-table
      :headers="headers"
      :items="formattedFeedback"
      item-key="date"
      items-per-page="13"
      class="mt-1 mt-md-7"
    >
      <!-- card or cash -->
      <template v-slot:[`item.type`]="{ item }">
        <v-chip
          v-if="item.type === 'Add offerring'"
          class="ma-2"
          color="green"
          text-color="white"
        >
          Offering
        </v-chip>

        <v-chip v-else class="ma-2" color="red" text-color="white"> Spent </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import TheHeader from "@/components/headers/Header";

export default {
  name: "OfferingPage",

  components: {
    TheHeader,
  },

  data: () => ({
    headers: [
      { text: "Date", align: "start", value: "date" },
      { text: "Description", value: "email" },
      { text: "Type", value: "type" },
      { text: "Amount", value: "amount" },
    ],
    formattedFeedback: [
      { date: "12/02/1221", email: "description", type: "Add offerring", amount: 10 },
      { date: "02/12/1221", email: "description", type: "Add offerring", amount: 10 },
      { date: "12/02/1231", email: "description", type: "Add offerring", amount: 10 },
      { date: "12/02/1221", email: "description", type: "Spent", amount: 10 },
      { date: "02/12/1221", email: "description", type: "Spent", amount: 10 },
      { date: "12/02/1231", email: "description", type: "Spent", amount: 10 },
      { date: "12/02/1221", email: "description", type: "Add offerring", amount: 10 },
      { date: "02/12/1221", email: "description", type: "Spent", amount: 10 },
      { date: "12/02/1231", email: "description", type: "Spent", amount: 10 },
      { date: "12/02/1221", email: "description", type: "Spent", amount: 10 },
      { date: "02/12/1221", email: "description", type: "Add offerring", amount: 10 },
      { date: "12/02/1231", email: "description", type: "Spent", amount: 10 },
      { date: "12/02/1221", email: "description", type: "Spent", amount: 10 },
      { date: "02/12/1221", email: "description", type: "Spent", amount: 10 },
      { date: "12/02/1231", email: "description", type: "Add offerring", amount: 10 },
      { date: "12/02/1221", email: "description", type: "Add offerring", amount: 10 },
      { date: "02/12/1221", email: "description", type: "Spent", amount: 10 },
      { date: "12/02/1231", email: "description", type: "Spent", amount: 10 },
      { date: "12/02/1221", email: "description", type: "Spent", amount: 10 },
      { date: "02/12/1221", email: "description", type: "Spent", amount: 10 },
    ],
  }),
};
</script>

<style lang="scss" scoped>
//
</style>
