<template>
    <div class="px-md-4">

      <!-- <div class="rounded py-3 px-2" style="background-color: #20505d;"> -->
        <h1 class="font-h4">Year plan</h1>
      <!-- </div> -->

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
  
  export default {
    name: 'ChurchPlanPage',
  
    data: () => ({

      headers: [
      { text: 'Name', align: 'start', value: 'name' },
      { text: 'Description', value: 'description' },
      { text: 'Contact', value: 'contact' },
      { text: 'Date', value: 'date' }
    ],
    formattedFeedback: [
      { name: 'John Doe', description: 'description of the event ', contact: '01123212', date: "12/21/1321" },
      { name: 'Jane Smith', description: 'description', contact: 'jane@example.com', date: "12/21/1321"  },
      { name: 'Bob Johnson', description: 'description', contact: '01321312', date: "12/21/1321"  },
      // Add more contact items as needed
    ]
    }),
  }
  </script>