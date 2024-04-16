<template>
  <div class="px-md-4">
    <div class="rounded pr-2 " style="background-color: #20505d;">
        <v-layout align-center>
            <v-container>
              <h1 class="white--text font-h4">Offering</h1>
             </v-container>
            <v-btn class="mr-2 hidden-xs-only red white--text" rounded>spend</v-btn>
          <v-btn class="hidden-xs-only green white--text" rounded>add offering</v-btn>
      </v-layout>
    </div>

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
    { text: 'Phone Number', value: 'phonenumber' },
    { text: 'Amount', value: 'amount' }
  ],
  formattedFeedback: [
    { date: '12/02/1221', email: 'john@example.com', phonenumber: '0342142421', amount: 10 },
    { date: '02/12/1221', email: 'jane@example.com', phonenumber: '012321212', amount: 10 },
    { date: '12/02/1231', email: 'bob@example.com', phonenumber: '0232321221', amount: 10 },
    { date: '12/02/1221', email: 'john@example.com', phonenumber: '0342142421', amount: 10 },
    { date: '02/12/1221', email: 'jane@example.com', phonenumber: '012321212', amount: 10 },
    { date: '12/02/1231', email: 'bob@example.com', phonenumber: '0232321221', amount: 10 },
    { date: '12/02/1221', email: 'john@example.com', phonenumber: '0342142421', amount: 10 },
    { date: '02/12/1221', email: 'jane@example.com', phonenumber: '012321212', amount: 10 },
    { date: '12/02/1231', email: 'bob@example.com', phonenumber: '0232321221', amount: 10 },
    { date: '12/02/1221', email: 'john@example.com', phonenumber: '0342142421', amount: 10 },
    { date: '02/12/1221', email: 'jane@example.com', phonenumber: '012321212', amount: 10 },
    { date: '12/02/1231', email: 'bob@example.com', phonenumber: '0232321221', amount: 10 },
    { date: '12/02/1221', email: 'john@example.com', phonenumber: '0342142421', amount: 10 },
    { date: '02/12/1221', email: 'jane@example.com', phonenumber: '012321212', amount: 10 },
    { date: '12/02/1231', email: 'bob@example.com', phonenumber: '0232321221', amount: 10 },
    { date: '12/02/1221', email: 'john@example.com', phonenumber: '0342142421', amount: 10 },
    { date: '02/12/1221', email: 'jane@example.com', phonenumber: '012321212', amount: 10 },
    { date: '12/02/1231', email: 'bob@example.com', phonenumber: '0232321221', amount: 10 },
    { date: '12/02/1221', email: 'john@example.com', phonenumber: '0342142421', amount: 10 },
    { date: '02/12/1221', email: 'jane@example.com', phonenumber: '012321212', amount: 10 },

  ]
  }),
}
</script>

<style lang="scss" scoped>
//
</style>