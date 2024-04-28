<template>
  <div class="px-md-4">
    <!-- <div class="rounded pr-2 " style="background-color: #20505d;"> -->
        <v-layout align-center>
            <div>
              <h1 class="font-h3">Church offering</h1>
             </div>
             <v-spacer></v-spacer>
          <v-btn class="hidden-xs-only green white--text" rounded>Offering</v-btn>
      </v-layout>
    <!-- </div> -->

    <v-layout class="mt-3 hidden-sm-and-up" align-center>
    <v-btn class="mr-2 red white--text" height="25" rounded>spend</v-btn>
    <v-btn class="mr-2 green white--text" height="25"  rounded>add offering</v-btn>
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

        <v-chip v-else class="ma-2" color="red" text-color="white">
          Spent
        </v-chip>
      </template>
  </v-data-table>
  </div>
</template>

<script>

export default {
  name: 'OfferingPage',

  data: () => ({

    headers: [
    { text: 'Date', align: 'start', value: 'date' },
    { text: 'Description', value: 'email' },
    { text: 'Type', value: 'type' },
    { text: 'Amount', value: 'amount' }
  ],
  formattedFeedback: [
    { date: '12/02/1221', email: 'description',  type:"Add offerring", amount: 10 },
    { date: '02/12/1221', email: 'description',  type:"Add offerring", amount: 10 },
    { date: '12/02/1231', email: 'description',  type:"Add offerring", amount: 10 },
    { date: '12/02/1221', email: 'description',  type:"Spent", amount: 10 },
    { date: '02/12/1221', email: 'description',  type:"Spent", amount: 10 },
    { date: '12/02/1231', email: 'description',  type:"Spent", amount: 10 },
    { date: '12/02/1221', email: 'description',  type:"Add offerring", amount: 10 },
    { date: '02/12/1221', email: 'description',  type:"Spent", amount: 10 },
    { date: '12/02/1231', email: 'description',  type:"Spent", amount: 10 },
    { date: '12/02/1221', email: 'description',  type:"Spent", amount: 10 },
    { date: '02/12/1221', email: 'description',  type:"Add offerring", amount: 10 },
    { date: '12/02/1231', email: 'description',  type:"Spent", amount: 10 },
    { date: '12/02/1221', email: 'description',  type:"Spent", amount: 10 },
    { date: '02/12/1221', email: 'description',  type:"Spent", amount: 10 },
    { date: '12/02/1231', email: 'description',  type:"Add offerring", amount: 10 },
    { date: '12/02/1221', email: 'description',  type:"Add offerring", amount: 10 },
    { date: '02/12/1221', email: 'description',  type:"Spent", amount: 10 },
    { date: '12/02/1231', email: 'description',  type:"Spent", amount: 10 },
    { date: '12/02/1221', email: 'description',  type:"Spent", amount: 10 },
    { date: '02/12/1221', email: 'description',  type:"Spent", amount: 10 },

  ]
  }),
}
</script>

<style lang="scss" scoped>
//
</style>