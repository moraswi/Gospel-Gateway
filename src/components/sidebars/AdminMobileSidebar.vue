<template>
  <!-- mobile-nav-overlay -->
  <div
    v-if="headers.showMobileAdminSidebar"
    class="mobile-nav-overlay overflow-auto"
  >
    <v-card
      class="close-overlay"
      @click="setShowMobileSidebar(false)"
      width="100%"
      min-height="100vh"
      height="817"
      color="transparent"
      flat
    >
    </v-card>

    <v-layout justify-end>
      <v-card
        class="mobile-sidebar"
        color="transparent"
        width="268"
        min-height="100vh"
        height="817"
        flat
      >
        <v-layout class="px-4" column fill-height>
          <!-- Logo And Close -->
          <div class="mt-5">
            <v-layout class="px-4" justify-space-between align-center>
              <!-- Logo -->
              <!-- <v-img
                alt="img"
                class="img"
                src="@/assets/img/member/sidebar/logo-ipsum.png"
                max-width="158"
                contain
              /> -->

              <!-- Close -->
              <!-- <v-img
                @click="setShowMobileSidebar(false)"
                alt="img"
                class="img"
                src="@/assets/img/member/sidebar/close.png"
                max-width="24"
                max-height="24"
                contain
              /> -->
              <v-btn @click="setShowMobileSidebar(true)">open</v-btn>
            </v-layout>
          </div>

          <!-- Main Menu -->
          <span class="cap-m-3 ff-1 lh-16 ml-4 white--text mt-5">
            Main Menu
          </span>

          <!-- Main Menu List-->
          <v-list class="transparent">
            <!-- Overview -->
            <v-card color="transparent" width="100%" height="48" flat>
              <v-list-item
                class="transparent white--text"
                active-class="bg-active gray50--text"
                :to="{ name: 'MemberOverview' }"
                @click="nextPage()"
                link
              >
                <v-list-item-icon>
                  <v-icon color="gray50"> $overviewIcon </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title> Overview </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>

            <!-- My Stokvel -->
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
                :to="{ name: 'MyStokvel' }"
                @click="nextPage()"
                link
              >
                <v-list-item-icon>
                  <v-icon color="gray50"> $myStokvelIcon </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title> My Stokvel </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>

            <!-- Contributions -->
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
                :to="{ name: 'MemberContributions' }"
                @click="nextPage()"
                link
              >
                <v-list-item-icon>
                  <v-icon color="gray50"> $contributionsIcon </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title> Contributions </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>

            <!-- Investments -->
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
                :to="{ name: 'MemberSavings' }"
                @click="nextPage()"
                link
              >
                <v-list-item-icon>
                  <v-icon color="gray50"> $savingsIcon </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title> Investments </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>

            <!-- Loans -->
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
                :to="{ name: 'MemberLoans' }"
                @click="nextPage()"
                link
              >
                <v-list-item-icon>
                  <v-icon color="gray50"> $loansIcon </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title> Loans </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>

            <!-- Transact -->
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
                :to="{ name: 'MemberTransact' }"
                @click="nextPage()"
                link
              >
                <v-list-item-icon>
                  <v-icon color="gray50"> $transactIcon </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title> Transact </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>

            <!-- Insurance -->
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
                :to="{ name: 'MemberInsurance' }"
                @click="nextPage()"
                link
              >
                <v-list-item-icon>
                  <v-icon color="gray50"> $insuranceIcon </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title> Insurance </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card> -->

            <!-- Settings -->
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
                :to="{ name: 'MemberSettings' }"
                @click="nextPage()"
                link
              >
                <v-list-item-icon>
                  <v-icon color="gray50"> $settingsIcon </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title> Settings </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-list>

          <!-- For me -->
          <span class="cap-m-3 ff-1 lh-16 ml-4 white--text mt-4"> For me </span>

          <!-- For me List-->
          <v-list class="transparent">
            <!-- Messages -->
            <v-card
              class="mt-1 mb-2"
              color="transparent"
              width="100%"
              height="48"
              flat
            >
              <v-list-item
                class="transparent white--text"
                active-class="bg-active gray50--text"
                :to="{ name: 'MemberMessages' }"
                @click="nextPage()"
                link
              >
                <v-list-item-icon>
                  <v-icon color="gray50"> $messagesIcon </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-layout justify-space-between align-center>
                    <v-list-item-title> Messages </v-list-item-title>

                    <span
                      class="messge-card red900 ff-1 fsn fw-500 fs-12 lh-15"
                    >
                      7
                    </span>
                  </v-layout>
                </v-list-item-content>
              </v-list-item>
            </v-card>

            <span class="cap-m-3 ff-1 lh-16 ml-4 white--text mt-4">
              Favourites
            </span>
            <!--  Name here -->
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
                :to="{ name: 'GlobalAdminSettings' }"
                @click="nextPage()"
                link
              >
                <v-list-item-icon>
                  <v-icon color="gray50"> $favouritesIcon </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title> Name here </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-list>

          <v-flex fill-height> </v-flex>

          <!-- line-sidebar -->
          <div class="line-sidebar"></div>

          <!-- Bottom -->
          <div>
            <v-layout class="mb-9 mt-4 mr-4" align-end>
              <v-layout justify-space-between align-center>
                <!-- Content -->
                <div>
                  <v-layout align-center>
                    <!-- UserAvatar -->
                    <!-- <div>
                      <UserAvatar />
                    </div> -->

                    <!-- Full Name And Email -->
                    <div class="ml-2">
                      <!-- Full Name -->
                      <!-- <span class="cap-1 lh-17 white--text">
                   
                        <UserFullName />
                      </span> -->

                      <!-- Email -->
                      <span class="email white--text">
                        {{ getUsernameDisplay }}
                      </span>
                    </div>
                  </v-layout>
                </div>

                <!-- dotsVerticalIcon -->
                <div>
                  <v-layout justify-end>
                    <!-- Menu -->
                    <v-menu
                      offset-y
                      :close-on-content-click="false"
                      nudge-top="220"
                      nudge-right="75"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" icon>
                          <v-icon color="white"> $dotsVerticalIcon </v-icon>
                        </v-btn>
                      </template>

                      <!-- PopUpCard -->
                      <!-- <PopUpCard /> -->
                    </v-menu>
                  </v-layout>
                </div>
              </v-layout>
            </v-layout>
          </div>
        </v-layout>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

// import UserAvatar from "@/components/shared/auth/UserAvatar";
// import UserFullName from "@/components/shared/auth/UserFullName";

// import PopUpCard from "@/components/shared/sidebars/shared/PopUpCard.vue";

export default {
  name: "AllianceUiMemberMobileSidebar",

  components: {
    // UserAvatar,
    // UserFullName,
    // PopUpCard,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState({ headers: "headers" }),

    // showMobileAdminSidebar
    showMobileAdminSidebar: function () {
      return this.headers.showMobileAdminSidebar;
    },

    // getUsernameDisplay
    getUsernameDisplay() {
      return this.$store.getters["auth/getUsernameDisplay"];
    },
  },

  mounted() {},

  methods: {
    ...mapMutations({
      // setShowMobileSidebar
      setShowMobileSidebar: "headers/setShowMobileSidebar",
    }),

    // nextPage
    nextPage() {
      this.setShowMobileSidebar(false);
    },

    // logOut
    logOut() {
      // auth/logOut
      this.$store.dispatch("auth/logOut");

      this.setShowMobileSidebar(false);
      this.$router.push({ name: "Home" });
    },

    // goToAdmin
    goToAdmin() {
      this.setShowMobileSidebar(false);
      this.$router.push({ name: "AdminOverview" });
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;

  background: rgba(13, 24, 41, 0.5);
  backdrop-filter: blur(2.5px);

  .close-overlay {
    position: absolute;
    top: 0;
    right: 268;
    bottom: 0;
    left: 0;
    background: #000;
  }

  .mobile-sidebar {
    background: linear-gradient(176.15deg, #1776ee -9.36%, #ec8181 106.46%);
  }
}

////
.sidebar {
  background: linear-gradient(176.15deg, #1776ee -9.36%, #ec8181 106.46%);
  border-radius: 16px;
}

.bg {
  border-radius: 8px;
}

.bg-active {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
}

.email {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
}

.line-sidebar {
  border: 0.5px solid #fcfcfc;
}

.messge-card {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
  border-radius: 4px;
  padding: 3px 9px;
}
</style>
