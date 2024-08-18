<template>
  <div>
    <MainDialogContent title="Branch" class="mt-10 mt-md-0">
      <!-- Main -->
      <template v-slot:main>
        <v-card class="transparent overflow-auto br-12" flat>
          <v-form class="py-1">
            <v-text-field
              v-model="branchName"
              label="Branch Name"
              outlined
            ></v-text-field>

            <v-text-field
              v-model="branchArea"
              label="Branch Area"
              outlined
            ></v-text-field>

            <v-text-field v-model="email" label="Email" outlined></v-text-field>

            <v-text-field
              v-model="phoneNumber"
              label="Phone Number"
              outlined
              type="number"
            ></v-text-field>
          </v-form>
        </v-card>
      </template>

      <!-- Bottom -->
      <template v-slot:bottom>
        <v-layout align-center>
          <!--desktop Cancel  -->
          <v-card
            class="mr-2 hidden-xs-only"
            color="transparent"
            width="50%"
            flat
          >
            <v-btn
              @click="closeAddBrancheDialog()"
              class="px-4 rounded-lg"
              width="100%"
              height="56"
              elevation="0"
              outlined
            >
              <h5 class="h5 black600--text text-transform-none">Cancel</h5>
            </v-btn>
          </v-card>

          <!--desktop submit  -->
          <v-card
            class="ml-2 hidden-xs-only"
            color="transparent"
            width="50%"
            flat
          >
            <v-btn
              @click="addBranchReq()"
              class="black rounded-lg"
              width="100%"
              height="56"
              elevation="0"
            >
              <h5 class="h5 white--text text-transform-none">Submit</h5>
            </v-btn>
          </v-card>

          <!-- mobile -->
          <v-card class="hidden-sm-and-up transparent" width="100%" flat>
            <!-- mobile Cancel -->
            <v-btn
              class="rounded-lg"
              width="100%"
              height="52"
              elevation="0"
              block
              @click="closeAddBrancheDialog()"
            >
              <h5 class="h5 black600--text text-transform-none">Cancel</h5>
            </v-btn>

            <!-- mobile submit -->
            <v-btn
              @click="addBranchReq()"
              class="black rounded-lg mt-3"
              width="100%"
              height="52"
              elevation="0"
              block
            >
              <h5 class="h5 white--text text-transform-none">Submit</h5>
            </v-btn>
          </v-card>
        </v-layout>
      </template>
    </MainDialogContent>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import MainDialogContent from "@/components/dialogs/MainDialogContent.vue";

export default {
  name: "StatisticsBranchDialog",

  components: {
    MainDialogContent,
  },

  data() {
    return {
      branchName: "",
      branchArea: "",
      email: "",
      phoneNumber: "",
    };
  },

  computed: {
    // getUserDetails
    getUserDetails() {
      return this.$store.getters["user/getUserDetails"];
    },
  },

  methods: {
    ...mapMutations({
      // setShowStatisticsDialog
      setShowStatisticsDialog: "dashboard/setShowStatisticsDialog",

      // resetState
      resetState: "dashboard/resetState",
    }),

    // closeAddBrancheDialog
    closeAddBrancheDialog() {
      this.setShowStatisticsDialog(false);
    },

    // addBranchReq
    async addBranchReq() {
      try {
        this.overlay = true;
        console.log("here 1");
        const data = {
          churchId: this.getUserDetails.branchId,
          name: this.branchName,
          location: this.branchArea,
          email: this.email,
          phoneNumber: this.phoneNumber,
        };

        // response
        const response = await this.$store.dispatch(
          "branch/addBranchReq",
          data
        );

        if (response.status == 200) {
          this.$store.dispatch(
            "branch/addBranchReq",
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
        // Remove text-field details
        setTimeout(() => {
          this.resetState();
        }, 1000);

        // setShowStatisticsDialog
        this.setShowStatisticsDialog(false);

        this.overlay = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
//
</style>
