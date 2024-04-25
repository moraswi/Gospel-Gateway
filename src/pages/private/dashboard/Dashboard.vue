<template>
    <div class="px-md-4">
      <h1 class="">Dashboard</h1>
      <!-- <div class="rounded py-3 px-2" style="background-color: #20505d;">
       
      </div> -->
      <v-row class="mt-5">
        <v-col cols="12" md="3">
      <CustomCard top-text="10 000" bottom-text="People"/>
        </v-col>
        <v-col cols="12" md="3">
          <CustomCard top-text="R 1 100000" bottom-text="Offering"/>
            </v-col>
            <v-col cols="12" md="3">
              <CustomCard top-text="100" bottom-text="Members"/>
          </v-col>
          <v-col cols="12" md="3">
              <CustomCard top-text="0" bottom-text="Events"/>
          </v-col>
          <v-col cols="12" md="3">
            <CustomCard top-text="0" bottom-text="Branches"/>
        </v-col>
          <!-- <v-col cols="12" md="3">
              <CustomCard top-text="15" bottom-text="Meetings"/>
          </v-col>
          <v-col cols="12" md="3">
              <CustomCard top-text="10" bottom-text="Members & Roles"/>
          </v-col> -->
      </v-row>

      <v-row class="mt-10">
        <v-col cols="12" md="6">
          <h1 class="font-h4">Events</h1>
          <v-card class="custom-card px-7 py-6 mt-2" width="100%" height="350">
           
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <h1 class="font-h4">Program</h1>
          <v-card class="custom-card px-7 py-6 mt-2" width="100%">
            <v-layout row align-center>
              <div>
                <h1 class="font-h4 mt-n1">member name</h1>
              </div>
              <v-spacer></v-spacer>
              <div class="text-right">
                <h4 class="font-p">preaching</h4>
                <p class="font-p4  mt-1">12/12/2000</p>
              </div>
            </v-layout>
          </v-card>
         </v-col>
      </v-row>
 
    </div>
  </template>
  
  <script>
  import CustomCard from '@/components/cards/SummaryCard.vue'
  // import EventsCard from '@/components/cards/EventsCard.vue'
  export default {
    name: 'DashboardPage',

    components: {
    CustomCard,
    // EventsCard,
  },
  
    data: () => ({

    }),
  }
  </script>

  <style lang="scss" scoped>
  .custom-card {
    border-left: 6px solid orange; /* Adjust the thickness as needed */
  }
  </style>