<template>
  <div>
    <v-card
      class="sidebar hidden-sm-and-down pa-3"
      min-height="800"
      height="800"
      max-height="800"
    >
      <v-layout column fill-height>
        <!-- GospelGateway -->
        <h1 v-if="opened" class="white--text mt-7 font-h4">Gospel Gateway</h1>

        <!-- Main Menu -->
        <span v-if="opened" class="ml-4 white--text mt-7"> Main Menu </span>

        <!-- Main Menu List-->
        <v-list class="transparent mt-1">
          <!-- Dashboard -->
          <v-card color="transparent" width="100%" height="48" flat>
            <v-list-item
              class="transparent white--text"
              active-class="bg-active gray50--text"
              :to="{ name: 'AdminDashboard' }"
              link
            >
              <v-list-item-icon>
                <v-icon color="white">mdi-view-dashboard</v-icon>
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
                <v-list-item-title> Dashboard </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>

          <!-- Gallary -->
          <!-- <v-card
            class="mt-1"
            color="transparent"
            width="100%"
            height="48"
            flat
          >
            <v-list-item
              class="transparent white--text"
              active-class="bg-active gray50--text"
              :to="{ name: 'AdminGallary' }"
              link
            >
              <v-list-item-icon>
                <v-icon color="white">mdi-view-gallery</v-icon>
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
                <v-list-item-title> Gallary </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card> -->

          <!-- People -->
          <v-card
            class="mt-1"
            color="transparent"
            width="100%"
            height="48"
            flat
          >
            <v-list-item
              class="transparent white--text"
              active-class="bg-active gray50--text"
              :to="{ name: 'AdminPeople' }"
              link
            >
              <v-list-item-icon>
                <v-icon color="white">mdi-account-group</v-icon>
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
                <v-list-item-title> People </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>

          <!-- Events -->
          <v-card
            class="mt-1"
            color="transparent"
            width="100%"
            height="48"
            flat
          >
            <v-list-item
              class="transparent white--text"
              active-class="bg-active gray50--text"
              :to="{ name: 'AdminEvents' }"
              link
            >
              <v-list-item-icon>
                <v-icon color="white">mdi-calendar-check</v-icon>
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
                <v-list-item-title> Events </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>

          <!-- Offerring -->
          <v-card
            class="mt-1"
            color="transparent"
            width="100%"
            height="48"
            flat
          >
            <v-list-item
              class="transparent white--text"
              active-class="bg-active gray50--text"
              :to="{ name: 'AdminOffering' }"
              link
            >
              <v-list-item-icon>
                <v-icon color="white">mdi-offer</v-icon>
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
                <v-list-item-title> Offering </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>

          <!-- Service Program -->
          <v-card
            class="mt-1"
            color="transparent"
            width="100%"
            height="48"
            flat
          >
            <v-list-item
              class="transparent white--text"
              active-class="bg-active gray50--text"
              :to="{ name: 'AdminServiceProgram' }"
              link
            >
              <v-list-item-icon>
                <v-icon color="white">mdi-note-text</v-icon>
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
                <v-list-item-title> Service Program </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>

          <!-- Add Events -->
          <!-- <v-card
            class="mt-1"
            color="transparent"
            width="100%"
            height="48"
            flat
          >
            <v-list-item
              class="transparent white--text"
              active-class="bg-active gray50--text"
              :to="{ name: 'AdminEvents' }"
              link
            >
              <v-list-item-icon>
                <v-icon
                color="white"
              >mdi-file-document-plus</v-icon>

              </v-list-item-icon>

              <v-list-item-content v-if="opened">
                <v-list-item-title> Add Events </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card> -->

          <!-- Church Plan -->
          <v-card
            class="mt-1"
            color="transparent"
            width="100%"
            height="48"
            flat
          >
            <v-list-item
              class="transparent white--text"
              active-class="bg-active gray50--text"
              :to="{ name: 'AdminChurchPlan' }"
              link
            >
              <v-list-item-icon>
                <v-icon color="white">mdi-floor-plan</v-icon>
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
                <v-list-item-title> Church Plan </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>

          <!-- Members & Roles -->
          <v-card
            class="mt-1"
            color="transparent"
            width="100%"
            height="48"
            flat
          >
            <v-list-item
              class="transparent white--text"
              active-class="bg-active gray50--text"
              :to="{ name: 'Announcement' }"
              link
            >
              <v-list-item-icon>
                <v-icon color="white">mdi-volume-medium</v-icon>
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
                <v-list-item-title> Announcement </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>

          <!-- Refer a Friend -->
          <!-- <v-card
                 class="mt-1"
                 color="transparent"
                 width="100%"
                 height="48"
                 flat
               >
                 <v-list-item
                   class="transparent white--text"
                   active-class="bg-active gray50--text"
                   :to="{ name: 'MemberLogin' }"
                   link
                 >
                   <v-list-item-icon>
                     <v-icon
                     color="white"
                   >mdi-floor-plan</v-icon>
     
                   </v-list-item-icon>
     
                   <v-list-item-content v-if="opened">
                     <v-list-item-title> Refer a Friend </v-list-item-title>
                   </v-list-item-content>
                 </v-list-item>
               </v-card> -->

          <!-- logout -->
          <v-card
            class="mt-1"
            color="transparent"
            width="100%"
            height="48"
            flat
          >
            <v-list-item
              class="transparent white--text"
              active-class="bg-active gray50--text"
              :to="{ name: 'MemberLogin' }"
              link
            >
              <v-list-item-icon>
                <v-icon color="white">mdi-logout</v-icon>
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
                <v-list-item-title> LogOut </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-list>
      </v-layout>
    </v-card>

    <!-- Mobile -->
    <!-- <div class="hidden-md-and-up">
      <AdminMobileSidebar/>
    </div> -->
  </div>
</template>

<script>
// import AdminMobileSidebar from "@/components/sidebars/AdminMobileSidebar.vue";

export default {
  name: "GospelGatewayAdminSidebar",

  components: {
    // AdminMobileSidebar
  },

  data() {
    return {
      opened: true,
    };
  },

  mounted() {},

  methods: {
    // logOut
    logOut() {
      this.$router.push({ name: "MemberLogin" });
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #20505d;
  border-radius: 10px;
}
</style>
