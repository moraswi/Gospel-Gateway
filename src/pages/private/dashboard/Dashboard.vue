<template>
    <v-container>
      <custom-card top-text="100" bottom-text="People"/>
     <h1 class="mt-16  text-red">dashboard</h1>
     <v-btn :to="{name:'MemberLogin'}" >MemberLogin</v-btn>
    </v-container>
  </template>
  
  <script>
  import CustomCard from '@/components/cards/SummaryCard.vue'
  export default {
    name: 'DashboardPage',

    components: {
    CustomCard
  },
  
    data: () => ({

    }),
  }
  </script>