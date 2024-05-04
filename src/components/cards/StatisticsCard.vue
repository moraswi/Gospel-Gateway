<template>
  <v-card class="py-2" width="100%" height="120">
    <v-layout class="text-center" column>
      <v-layout class="px-2">
        <v-spacer></v-spacer>
        <!-- Delete Button -->
        <v-btn v-if="showDeleteButton" class="transparent" fab width="25" height="25" depressed @click="handleClick('delete')">
          <v-icon size="medium">mdi-delete</v-icon>
        </v-btn>
        <!-- Edit Button -->
        <v-btn v-if="showEditButton" class="transparent" fab width="25" height="25" depressed @click="handleClick('edit')">
          <v-icon size="medium">mdi-pencil</v-icon>
        </v-btn>
        <!-- Add Button -->
        <v-btn v-if="showAddButton" class="transparent" fab width="25" height="25" depressed @click="handleClick('add')">
          <v-icon size="medium">mdi-plus</v-icon>
        </v-btn>
      </v-layout>
      <h1 class="font-h2 justify-center align-center">{{ statistic }}</h1>
      <p class="font-p justify-center">{{ cardName }}</p>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    statistic: {
      type: String,
      required: true,
    },
    cardName: {
      type: String,
      required: true,
    },
    showDeleteButton: {
      type: Boolean,
      default: true, // Show by default
    },
    showEditButton: {
      type: Boolean,
      default: true, // Show by default
    },
    showAddButton: {
      type: Boolean,
      default: true, // Show by default
    },
  },
  methods: {
    handleClick(action) {
      this.$emit('click', action);
    }
  }
};
</script>
