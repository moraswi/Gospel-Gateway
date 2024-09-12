<template>
  <div>
    <MainDialogContent title="Announcement" class="mt-10 mt-md-0">
      <!-- Main -->
      <template v-slot:main>
        <v-card class="transparent overflow-auto br-12" flat>
          <v-form class="py-1">
            <!-- Title -->
            <v-text-field v-model="title" label="Title" outlined></v-text-field>

            <!-- Content -->
            <v-text-field
              v-model="Content"
              label="Content"
              outlined
            ></v-text-field>

            <!-- Content Valid Until -->
            <v-text-field
              v-model="validUntil"
              label="Content Valid Until"
              outlined
              type="date"
            ></v-text-field>

            <!-- Content -->
            <v-text-field
              v-model="contact"
              label="Contact"
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
              @click="closeAddAnnouncementDialog()"
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
              @click="addAnnouncementReq()"
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
              @click="closeAddAnnouncementDialog()"
            >
              <h5 class="h5 black600--text text-transform-none">Cancel</h5>
            </v-btn>

            <!-- mobile submit -->
            <v-btn
              @click="addAnnouncementReq()"
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
      title: "",
      Content: "",
      branchId: null,
      churchId: null,
      contact: "",
      validUntil: "",
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

    closeAddAnnouncementDialog() {
      this.setShowStatisticsDialog(false);
    },

    // addAnnouncementReq
    async addAnnouncementReq() {
      try {
        this.overlay = true;

        const data = {
          title: this.title,
          description: this.Content,
          churchId: this.getUserDetails.churchId,
          contact: this.contact,
          validUntil: this.validUntil,
        };

        // response
        const response = await this.$store.dispatch(
          "announcement/addAnnouncementReq",
          data
        );

        if (response.status == 200) {
          var userDetails = await this.$store.getters["user/getUserDetails"]

          // getStatisticsReq
          //  await this.$store.dispatch("dashboard/getStatisticsReq",{
          //     branchId: 1,
          //     churchId: 1
          //   }),

            // getAnnouncementByChurchIdReq
          await this.$store.dispatch(
            "announcement/getAnnouncementByChurchIdReq",
            this.churchId
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

        //close dialog
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
