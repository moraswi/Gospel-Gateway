<template>
  <div class="px-md-4">
    <TheHeader title="Events"> </TheHeader>
    <v-layout class="mt-2">
      <v-spacer></v-spacer>
      <v-btn
        class="green mt-5"
        fab
        width="35"
        height="35"
        depressed
        @click="handleClick('add')"
      >
        <v-icon size="medium" color="white">mdi-plus</v-icon>
      </v-btn>
    </v-layout>
    <!-- EventCard -->
    <v-row class="mt-1">
      <v-col
        v-for="(event, index) in getEventByChurchId"
        :key="index"
        class="mt-5"
        cols="12"
        md="6"
      >
        <EventsCard
          :eventName="event.eventName"
          :timeframe="event.recurrence"
          :churchName="event.branchName"
          :eventDate="event.endDate"
        />
      </v-col>
    </v-row>

    <!-- overlay -->
    <v-overlay :value="overlay" z-index="1000">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import EventsCard from "@/components/cards/EventsCard.vue";
import TheHeader from "@/components/headers/TheHeader";

export default {
  name: "EventsPage",

  components: {
    EventsCard,
    TheHeader,
  },

  data: () => ({
    overlay: false,
  }),

  async created() {
    this.overlay = true;

    await Promise.all([
      this.$store.dispatch(
        "event/getEventByChurchIdReq",
        this.getUserDetails.churchId
      ),
    ])
      .then(() => {
        this.overlay = false;
      })
      .catch(() => {
        this.overlay = false;
      });
  },

  computed: {
    // getEventByChurchId
    getEventByChurchId() {
      return this.$store.getters["event/getEventByChurchId"];
    },

    // getUserDetails
    getUserDetails() {
      return this.$store.getters["user/getUserDetails"];
    },
  },
};
</script>
