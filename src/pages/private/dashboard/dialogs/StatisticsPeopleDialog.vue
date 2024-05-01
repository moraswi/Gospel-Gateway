<template>
  <div>
    <MainDialogContent title="Member" class="mt-10 mt-md-0">
      <!-- Main -->
      <template v-slot:main>
        <v-card
          class="transparent overflow-auto br-12"
          :max-height="maxContentHeight"
          flat
        >
          <v-form :ref="formRef">
            <!-- Select stop order date  -->
            <div>
              <v-text-field class="" label="Full Name" outlined></v-text-field>

              <v-text-field class="" label="Email" outlined></v-text-field>

              <v-text-field class="" label="Password" outlined></v-text-field>

              <v-select
                label="Church"
                outlined
                :items="['Church 1', 'Church 2', 'Church 3']"
              ></v-select>

              <v-select label="Gender" outlined :items="['Male', 'Female']"></v-select>

              <v-text-field class="mt-0" label="Phone number" outlined></v-text-field>
            </div>
          </v-form>
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
            <v-btn
              @click="submit()"
              class="black rounded-lg"
              width="100%"
              height="56"
              elevation="0"
            >
              <h5 class="h5 white--text text-transform-none">submit</h5>
            </v-btn>
          </v-card>

          <!-- mobile -->
          <v-card class="hidden-sm-and-up" width="100%" flat>
            <v-btn
              class="rounded-lg"
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
              class="rounded-lg mt-3"
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

export default {
  name: "AllianceUiInvestmentDialogStep1",

  components: {
    MainDialogContent,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
//
</style>
