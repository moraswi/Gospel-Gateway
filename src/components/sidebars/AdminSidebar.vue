<template>
  <div>
    <v-card
      :class="opened ? 'pa-2 pa-lg-4' : 'pa-3'"
      class="sidebar hidden-sm-and-down"
      min-height="800"
      height="800"
      max-height="800"
    >
      <v-layout column fill-height>
        <!-- GospelGateway -->
        <h1 v-if="opened" class="white--text mt-7 font-h4">GospelGateway</h1>

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
          <v-card class="mt-1" color="transparent" width="100%" height="48" flat>
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
          </v-card>

          <!-- People -->
          <v-card class="mt-1" color="transparent" width="100%" height="48" flat>
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
          <v-card class="mt-1" color="transparent" width="100%" height="48" flat>
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
          <v-card class="mt-1" color="transparent" width="100%" height="48" flat>
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
          <v-card class="mt-1" color="transparent" width="100%" height="48" flat>
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
          <v-card class="mt-1" color="transparent" width="100%" height="48" flat>
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
          <v-card class="mt-1" color="transparent" width="100%" height="48" flat>
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
          <v-card class="mt-1" color="transparent" width="100%" height="48" flat>
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

        <v-flex fill-height> </v-flex>

        <!-- menu-opener -->
        <v-layout class="mt-6 mb-9 mr-n2 mr-lg-n4" align-end justify-end>
          <div class="menu-opener pointer" @click="opened = !opened">
            <!-- Icon -->
            <v-img
              v-if="opened"
              src="@/assets/img/arrows/arrow-left-icon.png"
              max-width="24"
              max-height="24"
              contain
            />

            <v-img
              v-else
              src="@/assets/img/arrows/arrow-right-icon.png"
              max-width="24"
              max-height="24"
              contain
            />
          </div>
        </v-layout>
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
  background: linear-gradient(176.15deg, #1776ee -9.36%, #20505d 106.46%);
  border-radius: 16px;
}

.bg {
  border-radius: 8px;
}

.bg-active {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
}

.menu-opener {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 100px 0px 0px 100px;

  padding-top: 12px;
  padding-right: 18px;
  padding-bottom: 12px;
  padding-left: 14px;
  max-width: 58px;
}
</style>
