<template>
  <div>
    <MainDialogContent title="Church Plan" class="mt-10 mt-md-0">
      <!-- Main -->
      <template v-slot:main>
        <v-card class="transparent overflow-auto br-12" flat>
          <v-form class="py-1">

            <!-- Amount -->
            <v-text-field 
            v-model="title" 
            label="Title" 
            outlined
            ></v-text-field>

            <!-- Date -->
            <v-text-field
              v-model="date"
              label="Date"
              type="date"
              outlined
            ></v-text-field>

            <!-- contact -->
            <v-text-field
              v-model="contact"
              label="Contact"
              outlined
            ></v-text-field>

            <!-- description -->
            <v-textarea
              v-model="description"
              label="Description"
              style="border-radius: 13px"
              outlined
            ></v-textarea>

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
              @click="closeAddChurchPlanDialog()"
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
              @click="addChurchPlanReq()"
              class="black rounded-lg"
              width="100%"
              height="56"
              elevation="0"
            >
              <h5 class="h5 white--text text-transform-none">submit</h5>
            </v-btn>
          </v-card>

          <!-- mobile -->
          <v-card class="hidden-sm-and-up transparent" width="100%" flat>
            <!-- mobile cancel -->
            <v-btn
              class="rounded-lg"
              width="100%"
              height="52"
              elevation="0"
              block
              @click="closeAddChurchPlanDialog()"
            >
              <h5 class="h5 black600--text text-transform-none">Cancel</h5>
            </v-btn>

            <!-- mobile submit -->
            <v-btn
              @click="addChurchPlanReq()"
              class="black rounded-lg mt-3"
              width="100%"
              height="52"
              elevation="0"
              block
            >
              <h5 class="h5 white--text text-transform-none">submit</h5>
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
  name: "ChurchPlanDialog",

  components: {
    MainDialogContent,
  },

  data() {
    return {
      title: "",
      date: "",
      description: "",
      contact: "",
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

    // closeAddChurchPlanDialog
    closeAddChurchPlanDialog() {
      this.setShowStatisticsDialog(false);
    },

    // addChurchPlanReq
    async addChurchPlanReq() {
      try {
        this.overlay = true;
        const data = {
          branchId: this.getUserDetails.branchId,
          date: this.date,
          description: this.description,
          title: this.title,
          contact: this.contact,
        };

        // response
        const response = await this.$store.dispatch(
          "churchPlan/addChurchPlanReq",
          data
        );

        if (response.status == 200) {
          this.$store.dispatch(
            "churchPlan/getChurchPlanByBranchIdReq",
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
