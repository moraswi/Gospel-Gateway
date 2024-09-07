<template>
  <div>
    <MainDialogContent title="Edit Offering" class="mt-10 mt-md-0">
      <!-- Main -->
      <template v-slot:main>
        <v-card class="transparent overflow-auto br-12" flat>
          <v-form class="py-1">
            <p>Are you sure you want to edit this item?</p>

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
      // amount: this.getAmount, // Bind amount from Vuex
      // // Bind date from Vuex
      // description: this.getDescription, // Bind description from Vuex
      //  transactionType: "Offering",
    };
  },

  computed: {
    getSelectedOfferingId() {
      return this.$store.getters["offering/getSelectedOfferingId"];
    },
    // getUserDetails
    getUserDetails() {
      return this.$store.getters["user/getUserDetails"];
    },

    amount: {
      get() {
        return this.$store.getters["offering/getAmount"];
      },
      set(value) {
        this.$store.commit("offering/setAmount", value);
      },
    },

    // Reactive date field
    date: {
      get() {
        const date = this.$store.getters["offering/getDate"];
        if (!date) return "";

        const localDate = new Date(date);
        const year = localDate.getFullYear();
        const month = String(localDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
        const day = String(localDate.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
      },
      set(value) {
        this.$store.commit("offering/setDate", value);
      },
    },

    // Reactive description field
    description: {
      get() {
        return this.$store.getters["offering/getDescription"];
      },
      set(value) {
        this.$store.commit("offering/setDescription", value);
      },
    },

    // Reactive transaction type
    transactionType: {
      get() {
        return this.$store.getters["offering/getTransactionType"];
      },
      set(value) {
        this.$store.commit("offering/setTransactionType", value);
      },
    },

    // Reactive description type
    // description: {
    //   get() {
    //     return this.$store.getters["offering/getDescription"];
    //   },
    //   set(value) {
    //     this.$store.commit("offering/setDescription", value);
    //   },
    // },

    // getAmount() {
    //   return this.$store.getters["offering/getAmount"];
    // },

    // getDate() {
    //   return this.$store.getters["offering/getDate"];
    // },

    // // getDescription
    // getDescription() {
    //   return this.$store.getters["offering/getDescription"];
    // },

    // // getTransactionType
    // getTransactionType() {
    //   return this.$store.getters["offering/getTransactionType"];
    // },

    // // getBranchId
    // getBranchId() {
    //   return this.$store.getters["offering/getBranchId"];
    // },

    // // getCreatedat
    // getCreatedat() {
    //   return this.$store.getters["offering/getCreatedat"];
    // },

    // // getUpdatedat
    // getUpdatedat() {
    //   return this.$store.getters["offering/getUpdatedat"];
    // },
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
