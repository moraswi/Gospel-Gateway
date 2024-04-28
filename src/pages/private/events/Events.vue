<template>
  <div class="px-md-4">
    <TheHeader title="Events"> </TheHeader>

    <!-- EventCard -->
    <v-row class="mt-7">
      <v-col v-for="(event, index) in events" :key="index" class="mt-5" cols="12" md="6">
        <EventsCard
          :title="event.title"
          :bottom-text="event.bottomText"
          :churchName="event.churchName"
          :top-text="event.time"
          :date="event.date"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import EventsCard from "@/components/cards/EventsCard.vue";
import TheHeader from "@/components/headers/Header";

export default {
  name: "EventsPage",

  components: {
    EventsCard,
    TheHeader,
  },

  data: () => ({
    events: [
      {
        title: "Youth Conference",
        bottomText: "weekly",
        churchName: "Assemblies",
        time: "10h00 - 12h00",
        date: "12/02/1221 - 12/02/1221",
      },
      {
        title: "Men Conference",
        bottomText: "weekly",
        churchName: "Assemblies",
        time: "10h00 - 12h00",
        date: "12/02/1221 -12/02/1221",
      },
      {
        title: "Ester Conference",
        bottomText: "weekly",
        churchName: "Assemblies",
        time: "10h00 - 12h00",
        date: "12/02/1221 -12/02/1221",
      },
      {
        title: "Youth Conference",
        bottomText: "weekly",
        churchName: "Assemblies",
        time: "10h00 - 12h00",
        date: "12/02/1221 -12/02/1221",
      },
      {
        title: "Youth Conference",
        bottomText: "weekly",
        churchName: "Assemblies",
        time: "10h00 - 12h00",
        date: "12/02/1221 - 12/02/1221",
      },
      {
        title: "Men Conference",
        bottomText: "weekly",
        churchName: "Assemblies",
        time: "10h00 - 12h00",
        date: "12/02/1221 -12/02/1221",
      },
      {
        title: "Ester Conference",
        bottomText: "weekly",
        churchName: "Assemblies",
        time: "10h00 - 12h00",
        date: "12/02/1221 -12/02/1221",
      },
      {
        title: "Youth Conference",
        bottomText: "weekly",
        churchName: "Assemblies",
        time: "10h00 - 12h00",
        date: "12/02/1221 -12/02/1221",
      },
      {
        title: "Youth Conference",
        bottomText: "weekly",
        churchName: "Assemblies",
        time: "10h00 - 12h00",
        date: "12/02/1221 - 12/02/1221",
      },
      {
        title: "Men Conference",
        bottomText: "weekly",
        churchName: "Assemblies",
        time: "10h00 - 12h00",
        date: "12/02/1221 -12/02/1221",
      },
      {
        title: "Ester Conference",
        bottomText: "weekly",
        churchName: "Assemblies",
        time: "10h00 - 12h00",
        date: "12/02/1221 -12/02/1221",
      },
      {
        title: "Youth Conference",
        bottomText: "weekly",
        churchName: "Assemblies",
        time: "10h00 - 12h00",
        date: "12/02/1221 -12/02/1221",
      },
    ],
  }),
};
</script>
