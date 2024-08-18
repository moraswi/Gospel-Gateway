<template>
  <div class="px-md-4">
    <TheHeader title="Service program"> </TheHeader>

    <v-row class="mt-3">
      <v-col
        v-for="(branch, index) in getChurchPlanByBranchId"
        :key="index"
        cols="12"
        md="6"
      >
        <v-card class="custom-card px-7 py-6 mt-2" width="100%">
          <v-layout>
            <!-- row align-center -->
            <!-- <div>
                <h1 class="font-h4 mt-n1">member name</h1>
              </div>
              <v-spacer></v-spacer> -->
            <div class="text-left">
              <h4 class="font-p">{{ branch.title }}</h4>
              <p class="font-p4 mt-1">
                {{ branch.description }}
              </p>
              <h4 class="font-p">{{ branch.contact }}</h4>
            </div>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>

    <!-- overlay -->
    <v-overlay :value="overlay" z-index="1000">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import TheHeader from "@/components/headers/TheHeader";

export default {
  name: "MemberAndRolesPage",

  components: {
    // VueSlider,
    TheHeader,
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
};
</script>
