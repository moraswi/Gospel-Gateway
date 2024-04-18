<template>
    <div class="px-md-4">

      <div class="rounded py-3 px-2" style="background-color: #20505d;">
        <h1 class="white--text">Events</h1>
      </div>

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
      { text: 'Email', value: 'email' },
      { text: 'Feedback', value: 'feedback' },
      { text: 'Rating', value: 'rating' }
    ],
    formattedFeedback: [
      { name: 'John Doe', email: 'john@example.com', feedback: 'Great product!', rating: 5 },
      { name: 'Jane Smith', email: 'jane@example.com', feedback: 'Could be better.', rating: 3 },
      { name: 'Bob Johnson', email: 'bob@example.com', feedback: 'Awesome features.', rating: 5 },
      // Add more feedback items as needed
    ]
    }),
  }
  </script>