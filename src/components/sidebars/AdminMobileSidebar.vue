<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>

        <!-- People -->
        <v-list-item  v-if="this.getUserDetails.role == 'superadmin'" value="people" :to="{ name: 'AdminPeople' }">
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>People</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Events -->
        <v-list-item value="events" :to="{ name: 'AdminEvents' }">
          <v-list-item-icon>
            <v-icon>mdi-calendar-check</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Events</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

          <!-- Events -->
        <v-list-item v-if="this.getUserDetails.role == 'superadmin' || this.getUserDetails.role == 'bookkeeper'" value="offering" :to="{ name: 'AdminOffering' }">
          <v-list-item-icon>
            <v-icon>mdi-offer</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Offering</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Service Program -->
        <v-list-item value="serviceProgram" :to="{ name: 'AdminServiceProgram' }">
          <v-list-item-icon>
            <v-icon>mdi-note-text</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Service Program</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

         <!-- Church Plan -->
        <v-list-item value="churchPlan" :to="{ name: 'AdminChurchPlan' }">
          <v-list-item-icon>
            <v-icon>mdi-floor-plan</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Church Plan</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Announcement -->
        <v-list-item value="announcement"   :to="{ name: 'Announcement' }">
          <v-list-item-icon>
            <v-icon>mdi-volume-medium</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Announcement</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        
        <!-- LogOut -->
        <v-list-item value="logOut" :to="{ name: 'MemberLogin' }">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>LogOut</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- <div class="d-flex align-center h-100"> -->

      <v-icon
          large
          color="black darken-2"
          @click.stop="drawer = !drawer"
        >
        mdi-menu
        </v-icon>
      <!-- </div> -->

    </v-main>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },

  computed: {
    // getUserDetails
    getUserDetails() {
      return this.$store.getters["user/getUserDetails"];
    },
  },
};
</script>
