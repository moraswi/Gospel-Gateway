<template>
  <div>
    <MainDialogContent title="Delete Item" class="mt-10 mt-md-0">
      <!-- Main -->
      <template v-slot:main>
        <v-card
          class="transparent overflow-auto br-12"
          :max-height="maxContentHeight"
          flat
        >
       <p>Are you sure you want to delete this item? This action cannot be undone. verify your action by entering item ID</p>
       <v-text-field class="mt-1" label="Branch Id" outlined></v-text-field>

        </v-card>
      </template>

      <!-- Bottom -->
      <template v-slot:bottom>
        <v-layout align-center>
          <!--desktop Cancel  -->
          <v-card class="mr-2 hidden-xs-only" color="transparent" width="50%" flat>
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
          <v-card class="ml-2 hidden-xs-only" color="transparent" width="50%" flat>
            <v-btn
              @click="submitBranche()"
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
              @click="submitBranche()"
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
    return {};
  },

  methods:{
    ...mapMutations({
      // setShowStatisticsDialog
      setShowStatisticsDialog:"dashboard/setShowStatisticsDialog",
      
      // resetState
      resetState: "dashboard/resetState",
    }),

    closeAddBrancheDialog(){
     this.setShowStatisticsDialog(false);
    },

    submitBranche(){
      // Remove text-field details
      setTimeout(() => {
        this.resetState();
      }, 1000);
     this.setShowStatisticsDialog(false);
    }
  }
};
</script>

<style lang="scss" scoped>
//
</style>
