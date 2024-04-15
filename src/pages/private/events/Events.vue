<template>
    <v-container>

      <!-- Nav Bar -->
      <div class=" rounded pr-3" style="background-color: #20505d;">
        <v-layout align-center>
        <v-container>
        <h1 class="white--text">Events</h1>
      </v-container>
      <v-btn>add event</v-btn>
    </v-layout>
      </div>

      <!-- EventCard -->
      <v-row class="mt-7">
        <v-col v-for="(event, index) in events" :key="index" class="mt-5" cols="12" md="6">
          <EventsCard :title="event.title" :bottom-text="event.bottomText" :churchName="event.churchName" :top-text="event.time" :date="event.date"/>
        </v-col>
      </v-row>
      

    </v-container>
  </template>
  
  <script>
  import EventsCard from '@/components/cards/EventsCard.vue'
  
  export default {
    name: 'EventsPage',

    components: {
    EventsCard,
  },
  
    data: () => ({
      events: [
      { title: 'Youth Conference', bottomText: 'weekly',churchName:'Assemblies', time: '10h00 - 12h00', date: '12/02/1221 - 12/02/1221' },
      { title: 'Men Conference', bottomText: 'weekly', churchName:'Assemblies', time: '10h00 - 12h00', date: '12/02/1221 -12/02/1221' },
      { title: 'Ester Conference', bottomText: 'weekly',churchName:'Assemblies', time: '10h00 - 12h00', date: '12/02/1221 -12/02/1221' },
      { title: 'Youth Conference', bottomText: 'weekly', churchName:'Assemblies',time: '10h00 - 12h00', date: '12/02/1221 -12/02/1221' },
      { title: 'Youth Conference', bottomText: 'weekly',churchName:'Assemblies', time: '10h00 - 12h00', date: '12/02/1221 - 12/02/1221' },
      { title: 'Men Conference', bottomText: 'weekly', churchName:'Assemblies', time: '10h00 - 12h00', date: '12/02/1221 -12/02/1221' },
      { title: 'Ester Conference', bottomText: 'weekly',churchName:'Assemblies', time: '10h00 - 12h00', date: '12/02/1221 -12/02/1221' },
      { title: 'Youth Conference', bottomText: 'weekly', churchName:'Assemblies',time: '10h00 - 12h00', date: '12/02/1221 -12/02/1221' },
      { title: 'Youth Conference', bottomText: 'weekly',churchName:'Assemblies', time: '10h00 - 12h00', date: '12/02/1221 - 12/02/1221' },
      { title: 'Men Conference', bottomText: 'weekly', churchName:'Assemblies', time: '10h00 - 12h00', date: '12/02/1221 -12/02/1221' },
      { title: 'Ester Conference', bottomText: 'weekly',churchName:'Assemblies', time: '10h00 - 12h00', date: '12/02/1221 -12/02/1221' },
      { title: 'Youth Conference', bottomText: 'weekly', churchName:'Assemblies',time: '10h00 - 12h00', date: '12/02/1221 -12/02/1221' }
    ]
    }),
  }
  </script>
