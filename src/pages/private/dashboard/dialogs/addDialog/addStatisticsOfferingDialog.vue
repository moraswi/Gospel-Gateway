<template>
  <div>
    <MainDialogContent title="Offering" class="mt-10 mt-md-0">
      <!-- Main -->
      <template v-slot:main>
        <v-card class="transparent overflow-auto br-12" flat>
          <v-form class="py-1">
            <!-- Amount -->
            <v-text-field
              v-model="amount"
              label="Amount"
              outlined
              type="number"
            ></v-text-field>

            <v-text-field
              v-model="date"
              label="Date"
              type="date"
              outlined
            ></v-text-field>

            <!-- v-model="transactionType" -->
            <v-select
              v-model="transactionType"
              label="Transaction Type"
              outlined
              :items="['Offering', 'Spent']"
            ></v-select>

            <!-- description -->
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
              @click="addOfferingReq()"
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
              @click="addOfferingReq()"
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
      amount: 0,
      date: "",
      description: "",
      transactionType: "",
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

    closeAddOfferingDialog() {
      this.setShowStatisticsDialog(false);
    },

    // addOfferingReq
    async addOfferingReq() {
      try {
        this.overlay = true;
        const data = {
          branchId: this.getUserDetails.branchId,
          amount: this.amount,
          date: this.date,
          description: this.description,
          transactionType: this.transactionType,
        };

        // response
        const response = await this.$store.dispatch(
          "offering/addOfferingReq",
          data
        );

        if (response.status == 200) {
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
