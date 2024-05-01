<template>
  <div class="px-md-4">
    <TheHeader title="Dashboard"> </TheHeader>

    <v-row class="mt-5">
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="10 000" card-name="People" />
      </v-col>
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="R 1 100000" card-name="Offering" />
      </v-col>
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="R 1 000" card-name="Spent" />
      </v-col>
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="100" card-name="Members" />
      </v-col>
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="0" card-name="Events" />
      </v-col>
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="0" card-name="Branches" />
      </v-col>
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="3" card-name="Announcements" />
      </v-col>
      <v-col cols="12" xl="2" md="3">
        <StatisticsCard statistic="23" card-name="Videos" />
      </v-col>
      <!-- <v-col cols="12" md="3">
              <StatisticsCard statistic="15" card-name="Meetings"/>
          </v-col>
          <v-col cols="12" md="3">
              <StatisticsCard statistic="10" card-name="Members & Roles"/>
          </v-col> -->
    </v-row>

    <v-row class="mt-10">
      <v-col cols="12" md="6">
        <h1 class="font-h4">Branches</h1>
        <v-card
          class="custom-card px-3 py-6 mt-2"
          width="100%"
          height="350"
          style="overflow-y: auto"
        >
          <div
            v-for="(branch, index) in branches"
            :key="index"
            class="pa-2"
            :style="{ backgroundColor: index % 2 == 0 ? '#e6ebf1' : 'white' }"
          >
            <h4>{{ branch.branchName }}</h4>
            <label>{{ branch.branchArea }}</label>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <h1 class="font-h4">Sunday Program</h1>
        <v-card class="custom-card px-7 py-6 mt-2" width="100%">
          <v-layout row align-center>
            <div>
              <h1 class="font-h4 mt-n1">member name</h1>
            </div>
            <v-spacer></v-spacer>
            <div class="text-right">
              <h4 class="font-p">preaching</h4>
              <p class="font-p4 mt-1">12/12/2000</p>
            </div>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>

    <MainDialogContent title="title here" class="mt-10 mt-md-0">
      <!-- Close -->
      <template v-slot:close>
        <!-- <v-img
          @click="cancel()"
          class="pointer hidden-xs-only"
          src="@/assets/img/member/loans/apply-for-a-loan/successful-close.png"
          max-width="20"
          max-height="20"
          contain
        /> -->
      </template>
      <!-- Main -->
      <template v-slot:main>
        <v-card class="bg-none overflow-auto br-12" :max-height="maxContentHeight" flat>
          <!-- <v-img
            src="@/assets/img/admin/administration/Contained.png"
            :max-width="imgWidthAndHeight"
            :max-height="imgWidthAndHeight"
            contain
            class="mx-auto"
          /> -->
          <v-card class="mx-auto transparent" width="430" flat>
            <p class="fs-lg-28 fs-20 fw-800 black500--text text-center">dialog content</p>
          </v-card>

          <v-form :ref="formRef">
            <!-- Select stop order date  -->
            <div class="">
              <!-- Label -->
              <div class="c-ml-2">
                <p class="cap-1 ml-2 black900--text fw-400">
                  dialog content
                  <span class="red900--text">*</span>
                </p>
              </div>

              <!-- Input -->
              <!-- <v-select
                v-model="clientRejectReason"
                :rules="clientRejectReasonRules"
                :items="clientRejectReasonList"
                class="text-field mt-n2"
                placeholder="Reason for declining member"
                append-icon="$arrowDownIcon"
                height="52px"
                full-width
                outlined
                required
              ></v-select> -->
            </div>

            <p class="fs-lg-14 fs-14 fw-400 black500--text">dialog contenty</p>

            <!-- message area -->
            <textarea
              v-model="note"
              id="w3review"
              name="w3review"
              rows="4"
              class="pa-2 mt-n2 text-area"
              rounded
            ></textarea>
          </v-form>

          <v-card class="transparent" height="15" flat></v-card>
        </v-card>
      </template>

      <!-- Bottom -->
      <template v-slot:bottom>
        <!-- Cancel And Next -->
        <v-layout align-center>
          <!--desktop Cancel  -->
          <v-card class="mr-2 hidden-xs-only" color="transparent" width="50%" flat>
            <!-- Cancel -->
            <v-btn
              @click="cancel()"
              class="px-4 rounded-lg"
              width="100%"
              height="56"
              elevation="0"
              outlined
            >
              <h5 class="h5 black600--text text-transform-none">
                <!-- Cancel -->
                Cancel
              </h5>
            </v-btn>
          </v-card>

          <!--desktop next  -->
          <v-card class="ml-2 hidden-xs-only" color="transparent" width="50%" flat>
            <!-- next -->
            <v-btn @click="submit()" class="btn" width="100%" height="56" elevation="0">
              <h5 class="h5 white--text text-transform-none">submit</h5>
            </v-btn>
          </v-card>

          <!-- mobile -->
          <v-card class="hidden-sm-and-up" width="100%" flat>
            <v-btn
              class="btn-3"
              width="100%"
              height="52"
              elevation="0"
              block
              @click="cancel()"
            >
              <h5 class="h5 black600--text text-transform-none">Cancel</h5>
            </v-btn>

            <!-- Next -->
            <v-btn
              @click="submit()"
              class="btn mt-3"
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
import MainDialogContent from "@/components/dialogs/MainDialogContent.vue";
import StatisticsCard from "@/components/cards/StatisticsCard.vue";
import TheHeader from "@/components/headers/TheHeader";

export default {
  name: "DashboardPage",

  components: {
    MainDialogContent,
    StatisticsCard,
    TheHeader,
  },

  data: () => ({
    branches: [
      {
        branchName: "Branch Name",
        branchArea: "Branch Area",
      },
      {
        branchName: "Dihlopaneng",
        branchArea: "Gauteng",
      },
      {
        branchName: "Dihlopaneng",
        branchArea: "Gauteng",
      },
      {
        branchName: "Dihlopaneng",
        branchArea: "Gauteng",
      },
      {
        branchName: "Dihlopaneng",
        branchArea: "Gauteng",
      },
      {
        branchName: "Dihlopaneng",
        branchArea: "Gauteng",
      },
    ],
  }),

  methods: {
    cancel() {
      // this.setShowDeclinedDialog(false);
      // this.setShowDeclinedMobileDialog(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-card {
  border-left: 6px solid orange; /* Adjust the thickness as needed */
}
</style>
<!-- src/components/admin/adminstration/dialogs/new-stokvel-dialog-steps/DeclinedDialogStep1.vue -->
