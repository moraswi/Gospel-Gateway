<template>
  <div>
    <!--  :width="sideBarWidth" -->
    <v-card
      :class="opened ? 'pa-2 pa-lg-4' : 'pa-3'"
      class="sidebar"
     
      min-height="1053"
      height="1053"
      max-height="1053"
    >
      <v-layout column fill-height>
        <!-- Logo -->
        <!-- <v-layout justify-start>
          <v-img
            :class="opened ? 'mt-6 ml-4' : 'mt-6 ml-3'"
            :src="
              opened
                ? require('@/assets/img/member/sidebar/logo-ipsum.png')
                : require('@/assets/img/member/sidebar/mini-logo.png')
            "
            :min-height="opened ? 29 : 29"
            :max-width="opened ? 158 : 29"
            contain
          />
        </v-layout> -->

        <!-- My Stokvel -->
        <span v-if="opened" class="cap-3 ff-1 ml-4 white--text mt-7">
          My Stokvel
        </span>

        <!-- WASCO -->
        <v-card
          v-if="opened"
          class="card-wasco mt-4"
          width="100%"
          min-height="48"
          flat
        >
          <v-layout class="px-4" fill-height align-center>
            <!-- badges -->
            <!-- <v-img
              src="@/assets/img/member/sidebar/badges.png"
              max-width="24"
              max-height="24"
              contain
            /> -->

            <!-- WASCO -->
            <!-- <span class="b-1 white--text ml-4">{{ tenantNameForMember }}</span> -->
          </v-layout>
        </v-card>

        <v-card v-else class="bg-none" min-height="163" height="163" flat>
          <v-layout align-center justify-center fill-height>
            <!-- badges -->
            <!-- <v-img
              src="@/assets/img/member/sidebar/badges.png"
              max-width="24"
              max-height="24"
              contain
            /> -->
          </v-layout>
        </v-card>

        <!-- Main Menu -->
        <span v-if="opened" class="cap-3 ff-1 ml-4 white--text mt-7">
          Main Menu
        </span>

        <!-- Main Menu List-->
        <v-list class="transparent mt-1">
          <!-- Overview -->
          <v-card color="transparent" width="100%" height="48" flat>
            <v-list-item
              class="transparent white--text"
              active-class="bg-active gray50--text"
              :to="{ name: 'MemberLogin' }"
              link
            >
              <v-list-item-icon>
                <v-icon
                color="green-darken-2"
                icon="mdi-domain"
                size="large"
              ></v-icon>
                <!-- <v-icon color="gray50"> $overviewIcon </v-icon> -->
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
                <v-list-item-title> Overview </v-list-item-title>
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
              :to="{ name: 'MemberLogin' }"
              link
            >
              <v-list-item-icon>
                <v-icon
                color="green-darken-2"
                icon="mdi-domain"
                size="large"
              ></v-icon>
                <!-- <v-icon color="gray50"> $myStokvelIcon </v-icon> -->
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
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
              :to="{ name: 'MemberLogin' }"
              link
            >
              <v-list-item-icon>
                <v-icon
                color="green-darken-2"
                icon="mdi-domain"
                size="large"
              ></v-icon>
                <!-- <v-icon color="gray50"> $contributionsIcon </v-icon> -->
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
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
              :to="{ name: 'MemberLogin' }"
              link
            >
              <v-list-item-icon>
                <v-icon
                color="green-darken-2"
                icon="mdi-domain"
                size="large"
              ></v-icon>
                <!-- <v-icon color="gray50"> $savingsIcon </v-icon> -->
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
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
              :to="{ name: 'MemberLogin' }"
              link
            >
              <v-list-item-icon>
                <v-icon
                color="green-darken-2"
                icon="mdi-domain"
                size="large"
              ></v-icon>
                <!-- <v-icon color="gray50"> $loansIcon </v-icon> -->
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
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
              :to="{ name: 'MemberLogin' }"
              link
            >
              <v-list-item-icon>
                <v-icon
                color="green-darken-2"
                icon="mdi-domain"
                size="large"
              ></v-icon>
                <!-- <v-icon color="gray50"> $transactIcon </v-icon> -->
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
                <v-list-item-title> Transact </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>

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
              :to="{ name: 'MemberLogin' }"
              link
            >
              <v-list-item-icon>
                <v-icon
                color="green-darken-2"
                icon="mdi-domain"
                size="large"
              ></v-icon>
                <!-- <v-icon color="gray50"> $settingsIcon </v-icon> -->
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
                <v-list-item-title> Settings </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-list>

        <!-- For me -->
        <span v-if="opened" class="cap-3 ff-1 ml-4 white--text mt-8">
          For me
        </span>

        <v-card v-else class="bg-none mt-8" height="16" flat> </v-card>

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
              :to="{ name: 'MemberLogin' }"
              link
            >
              <v-list-item-icon>
                <v-icon
                color="green-darken-2"
                icon="mdi-domain"
                size="large"
              ></v-icon>
                <!-- <v-icon v-if="opened" color="gray50"> $messagesIcon </v-icon>
                <v-icon v-else class="ml-n2 my-n7" color="gray50" size="52">
                  $messagesNotOpenedIcon
                </v-icon> -->
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
                <v-layout justify-space-between align-center>
                  <v-list-item-title> Messages </v-list-item-title>

                  <span class="messge-card red900 ff-1 fsn fw-500 fs-12 lh-15">
                    {{ lengths }}
                  </span>
                </v-layout>
              </v-list-item-content>
            </v-list-item>
          </v-card>

          <span v-if="opened" class="cap-3 ff-1 ml-4 white--text">
            Favourites
          </span>
          <v-card
            class="mt-1 mb-11"
            color="transparent"
            width="100%"
            height="48"
            flat
          >
            <v-list-item
              class="transparent white--text"
              active-class="bg-active gray50--text"
              link
            >
              <v-list-item-icon>
                <v-icon
                color="green-darken-2"
                icon="mdi-domain"
                size="large"
              ></v-icon>
                <!-- <v-icon color="gray50"> $favouritesIcon </v-icon> -->
              </v-list-item-icon>

              <v-list-item-content v-if="opened">
                <v-list-item-title> Name here </v-list-item-title>
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

    <h1>adss</h1>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "GospelGatewayAdminSidebar",

  data() {
    return {
      opened: true,
    };
  },

  computed: {
    // sideBarWidth
    sideBarWidth() {
      if (this.opened) {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return "235px";
          case "sm":
            return "235px";
          case "md":
            return "235px";
          default:
            return "268px";
        }
      } else {
        return 80;
      }
    },
  },



  mounted() {},

  methods: {
    ...mapMutations({
      // setShowMobileSidebar
      setShowMobileSidebar: "mobileSidebar/setShowMobileSidebar",
    }),

    // logOut
    logOut() {
      this.$router.push({ name: "MemberLogin" });
    },


  },
};
</script>

<style >
.sidebar {
  background: linear-gradient(176.15deg, #1776ee -9.36%, #ec8181 106.46%);
  border-radius: 16px;
}

.card-wasco {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
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

.messge-card {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
  border-radius: 4px;
  padding: 3px 9px;
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
