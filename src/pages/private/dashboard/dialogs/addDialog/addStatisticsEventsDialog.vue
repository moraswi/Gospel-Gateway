<template>
  <div>
    <MainDialogContent title="Event" class="mt-10 mt-md-0">
      <!-- Main -->
      <template v-slot:main>
        <v-card class="transparent overflow-auto br-12" flat>
          <v-form class="py-1">
            <!-- eventName -->
            <v-text-field
              v-model="eventName"
              label="Event Name"
              outlined
            ></v-text-field>

            <!-- branchName -->
            <v-text-field
              v-model="branchName"
              label="Branch Name"
              outlined
            ></v-text-field>

            <!-- recurrence -->
            <v-select
              v-model="recurrence"
              label="Recurrence"
              outlined
              :items="[
                'Daily',
                'Weekly',
                'Monthly',
                'quarterly',
                'Yearly',
                'Other',
              ]"
            ></v-select>

            <!-- startDate -->
            <v-text-field
              v-model="startDate"
              label="Starting Date"
              type="date"
              outlined
            ></v-text-field>

            <!-- endDate -->
            <v-text-field
              v-model="endDate"
              label="Ending Date"
              type="date"
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
              @click="closeAddEventDialog()"
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
              @click="addEventReq()"
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
              @click="closeAddEventDialog()"
            >
              <h5 class="h5 black600--text text-transform-none">Cancel</h5>
            </v-btn>

            <!-- mobile submit -->
            <v-btn
              @click="addEventReq()"
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
  name: "StatisticsAnnouncementDialog",

  components: {
    MainDialogContent,
  },

  data() {
    return {
      startDate: "",
      endDate: "",
      eventName: "",
      recurrence: "",
      branchName: "",
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

    closeAddEventDialog() {
      this.setShowStatisticsDialog(false);
    },

    // addEventReq
    async addEventReq() {
      try {
        this.overlay = true;
        const data = {
          churchId: this.getUserDetails.branchId,
          startDate: this.startDate,
          endDate: this.endDate,
          eventName: this.eventName,
          recurrence: this.recurrence,
          branchName: this.branchName,
        };

        // response
        const response = await this.$store.dispatch("event/addEventReq", data);

        if (response.status == 200) {
          this.$store.dispatch(
            "event/getEventByChurchIdReq",
            this.getUserDetails.churchId
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
