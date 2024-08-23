<template>
  <v-card class="custom-card px-7 py-0" width="100%">
    <v-layout row align-center>
      <div>
        <v-icon color="grey" small>mdi-earth</v-icon>
        <h1 class="font-h4 mt-n1">{{ eventName }}</h1>
        <p class="font-p mt-n1">{{ timeframe }}</p>
      </div>
      <v-spacer></v-spacer>
      <div class="text-right">
        <v-btn icon @click="handleDelete">
          <v-icon color="red" small>mdi-delete</v-icon>
        </v-btn>
        <h4 class="font-p">{{ churchName }}</h4>
        <p class="font-p4 mt-1">{{ eventDate }}</p>
      </div>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    churchName: {
      type: String,
      required: true,
    },

    timeframe: {
      type: String,
      required: true,
    },
    eventName: {
      type: String,
      required: true,
    },
    eventDate: {
      type: String,
      required: true,
    },
  },

  methods: {
    handleDelete() {
      // Emit an event when the delete button is clicked
      this.$emit("delete-event");
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-card {
  border-left: 6px solid orange; /* Adjust the thickness as needed */
}
</style>
