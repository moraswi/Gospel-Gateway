<template>
    <div class="px-md-4">
      <CustomCard top-text="100" bottom-text="People"/>

      <EventsCard title="youth conferance" bottom-text="weekly" top-text="10h00 - 12h00" date="12/02/1221"/>
 
    </div>
  </template>
  
  <script>
  import CustomCard from '@/components/cards/SummaryCard.vue'
  import EventsCard from '@/components/cards/EventsCard.vue'
  export default {
    name: 'DashboardPage',

    components: {
    CustomCard,
    EventsCard,
  },
  
    data: () => ({

    }),
  }
  </script>