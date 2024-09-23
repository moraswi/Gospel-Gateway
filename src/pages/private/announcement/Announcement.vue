<template>
  <div class="px-md-4">
    <TheHeader title="Announcements"></TheHeader>

    <v-layout>
      <v-spacer></v-spacer>
      <v-btn
        v-if="getUserDetails.role === 'superadmin'"
        class="green mt-5"
        fab
        width="35"
        height="35"
        depressed
        @click="openAddAnnouncementDialog"
      >
        <v-icon size="medium" color="white">mdi-plus</v-icon>
      </v-btn>
    </v-layout>

    <v-row class="mt-2">
      <v-col
        v-for="(branch, index) in getChurchPlanByBranchId"
        :key="index"
        cols="12"
        md="6"
      >
        <v-card class="custom-card px-7 py-6 mt-2" width="100%">
          <v-layout>
            <v-spacer></v-spacer>
            <v-icon
              v-if="getUserDetails.role === 'superadmin'"
              small
              class="mr-2"
              color="red"
              @click="deleteAnnouncementReq(branch.id)"
            >
              mdi-delete
            </v-icon>
          </v-layout>
          <v-layout>
            <div class="text-left">
              <h4 class="font-p">{{ branch.title }}</h4>
              <p class="font-p4 mt-1">{{ branch.description }}</p>
              <h4 class="font-p">{{ branch.contact }}</h4>
            </div>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>

    <DashboardMainDialog />

    <v-overlay :value="overlay" z-index="1000">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
import TheHeader from "@/components/headers/TheHeader";
import DashboardMainDialog from "@/pages/private/dashboard/dialogs/DasboardMainDialog.vue";

export default {
  name: "MemberAndRolesPage",

  components: {
    TheHeader,
    DashboardMainDialog,
  },

  data: () => ({
    overlay: false,
  }),

  async created() {
    await Promise.all([
      this.$store.dispatch(
        "announcement/getAnnouncementByChurchIdReq",
        this.getUserDetails.branchId
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
    // getChurchPlanByBranchId
    getChurchPlanByBranchId() {
      return this.$store.getters["announcement/getAnnouncementByChurchId"];
    },

    // getUserDetails
    getUserDetails() {
      return this.$store.getters["user/getUserDetails"];
    },
  },

  methods: {
    ...mapMutations({
      // setShowStatisticsDialog
      setShowStatisticsDialog: "dashboard/setShowStatisticsDialog",
      // setDashboardStep
      setDashboardStep: "dashboard/setDashboardStep",

      // resetState
      resetState: "dashboard/resetState",
    }),

    // openAddAnnouncementDialog
    openAddAnnouncementDialog() {
      this.setDashboardStep(6);
      this.setShowStatisticsDialog(true);
    },

    // deleteAnnouncementReq
    async deleteAnnouncementReq(announcementId) {
      try {
        this.overlay = true;

        const response = await this.$store.dispatch(
          "announcement/deleteAnnouncementReq",
          announcementId
        );

        if (response.status == 200) {
          this.$store.dispatch(
            "announcement/getAnnouncementByChurchIdReq",
            this.getUserDetails.branchId
          ),
            this.$swal.fire({
              icon: "success",
              title: "Successful!",
              showConfirmButton: true,
            });
        } else {
          this.$swal.fire({
            icon: "error",
            title: "Something went wrong! Try again",
            showConfirmButton: true,
          });
        }
      } catch (error) {
        this.$swal.fire({
          icon: "error",
          title: "Something went wrong!",
          showConfirmButton: true,
        });
      } finally {
        this.overlay = false;
      }
    },
  },
};
</script>
