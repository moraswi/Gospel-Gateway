

<template>
  <v-container>
    <div class="rounded" style="background-color: #20505d;">
      <v-container>
      <h1 class="white--text">People</h1>
    </v-container>
    </div>

    <v-data-table
    :headers="headers"
    :items="formattedFeedback"
    item-key="name"
    items-per-page="13"
    class="mt-7"
    >
  </v-data-table>
  </v-container>
</template>

<script>

export default {
  name: 'PeoplePage',

  data: () => ({

    headers: [
    { text: 'Name', align: 'start', value: 'name' },
    { text: 'Email', value: 'email' },
    { text: 'Phone Number', value: 'phonenumber' },
    { text: 'Rating', value: 'rating' }
  ],
  formattedFeedback: [
    { name: 'John Doe', email: 'john@example.com', phonenumber: '0342142421', rating: 10 },
    { name: 'Jane Smith', email: 'jane@example.com', phonenumber: '012321212', rating: 10 },
    { name: 'Bob Johnson', email: 'bob@example.com', phonenumber: '0232321221', rating: 10 },
    { name: 'John Doe', email: 'john@example.com', phonenumber: '0342142421', rating: 10 },
    { name: 'Jane Smith', email: 'jane@example.com', phonenumber: '012321212', rating: 10 },
    { name: 'Bob Johnson', email: 'bob@example.com', phonenumber: '0232321221', rating: 10 },
    { name: 'John Doe', email: 'john@example.com', phonenumber: '0342142421', rating: 10 },
    { name: 'Jane Smith', email: 'jane@example.com', phonenumber: '012321212', rating: 10 },
    { name: 'Bob Johnson', email: 'bob@example.com', phonenumber: '0232321221', rating: 10 },
    { name: 'John Doe', email: 'john@example.com', phonenumber: '0342142421', rating: 10 },
    { name: 'Jane Smith', email: 'jane@example.com', phonenumber: '012321212', rating: 10 },
    { name: 'Bob Johnson', email: 'bob@example.com', phonenumber: '0232321221', rating: 10 },
    { name: 'John Doe', email: 'john@example.com', phonenumber: '0342142421', rating: 10 },
    { name: 'Jane Smith', email: 'jane@example.com', phonenumber: '012321212', rating: 10 },
    { name: 'Bob Johnson', email: 'bob@example.com', phonenumber: '0232321221', rating: 10 },
    { name: 'John Doe', email: 'john@example.com', phonenumber: '0342142421', rating: 10 },
    { name: 'Jane Smith', email: 'jane@example.com', phonenumber: '012321212', rating: 10 },
    { name: 'Bob Johnson', email: 'bob@example.com', phonenumber: '0232321221', rating: 10 },
    { name: 'John Doe', email: 'john@example.com', phonenumber: '0342142421', rating: 10 },
    { name: 'Jane Smith', email: 'jane@example.com', phonenumber: '012321212', rating: 10 },
    { name: 'Bob Johnson', email: 'bob@example.com', phonenumber: '0232321221', rating: 10 },
    { name: 'John Doe', email: 'john@example.com', phonenumber: '0342142421', rating: 10 },
    { name: 'Jane Smith', email: 'jane@example.com', phonenumber: '012321212', rating: 10 },
    { name: 'Bob Johnson', email: 'bob@example.com', phonenumber: '0232321221', rating: 10 },
    { name: 'John Doe', email: 'john@example.com', phonenumber: '0342142421', rating: 10 },
    { name: 'Jane Smith', email: 'jane@example.com', phonenumber: '012321212', rating: 10 },
    { name: 'Bob Johnson', email: 'bob@example.com', phonenumber: '0232321221', rating: 10 },
    { name: 'John Doe', email: 'john@example.com', phonenumber: '0342142421', rating: 10 },
    { name: 'Jane Smith', email: 'jane@example.com', phonenumber: '012321212', rating: 10 },
    { name: 'Bob Johnson', email: 'bob@example.com', phonenumber: '0232321221', rating: 10 },
    { name: 'John Doe', email: 'john@example.com', phonenumber: '0342142421', rating: 10 },
    { name: 'Jane Smith', email: 'jane@example.com', phonenumber: '012321212', rating: 10 },
    { name: 'Bob Johnson', email: 'bob@example.com', phonenumber: '0232321221', rating: 10 },
    // Add more feedback items as needed
  ]
  }),
}
</script>