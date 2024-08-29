<template>
  <div>
    <MainDialogContent title="Edit Offering" class="mt-10 mt-md-0">
      <!-- Main -->
      <template v-slot:main>
        <v-card class="transparent overflow-auto br-12" flat>
          <v-form class="py-1">
            <p>Are you sure you want to edit this item?</p>
            <!-- 
            <v-text-field
              class="mt-2"
              label="Offering Id"
              outlined
            ></v-text-field> -->

            <v-text-field
              v-model="amount"
              class=""
              label="Amount"
              outlined
            ></v-text-field>

            <v-select
              v-model="transactionType"
              label="Transaction Type"
              outlined
              :items="['Offering', 'Spent']"
            ></v-select>

            <v-text-field
              v-model="date"
              class=""
              label="Date"
              outlined
              type="date"
            ></v-text-field>

            <v-text-field
              v-model="description"
              class=""
              label="Description"
              outlined
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
              @click="closeAddOfferingDialog()"
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
              @click="updateOfferingReq()"
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
              @click="closeAddOfferingDialog()"
            >
              <h5 class="h5 black600--text text-transform-none">Cancel</h5>
            </v-btn>

            <!-- mobile submit -->
            <v-btn
              @click="updateOfferingReq()"
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
  name: "StatisticsOfferingDialog",

  components: {
    MainDialogContent,
  },

  data() {
    return {
      amount: "",
      date: "",
      description: "",
      transactionType: "",
    };
  },

  computed: {
    // ...mapMutations({
    //   // getSelectedOfferingId
    //   getSelectedOfferingId: "offering/getSelectedOfferingId",
    // }),

    getSelectedOfferingId() {
      return this.$store.getters["offering/getSelectedOfferingId"];
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

      // getSelectedOfferingId
      //  getSelectedOfferingId: "offering/getSelectedOfferingId",

      // resetState
      resetState: "dashboard/resetState",
    }),

    closeAddOfferingDialog() {
      this.setShowStatisticsDialog(false);
    },

    async updateOfferingReq() {
      try {
        this.overlay = true;

        const data = {
          id: this.getSelectedOfferingId,
          amount: this.amount,
          date: this.date,
          description: this.description,
          transactionType: this.transactionType,
          branchId: this.getUserDetails.branchId,
        };

        const response = await this.$store.dispatch(
          "offering/updateOfferingReq",
          data
        );

        if (response.status == 200) {
          this.$store.dispatch(
            "offering/getOfferingByBranchIdReq",
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
          title: "Something went wrong! Try again",
          showConfirmButton: true,
        });
      } finally {
        setTimeout(() => {
          this.resetState();
        }, 1000);
        this.setShowStatisticsDialog(false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
//
</style>
