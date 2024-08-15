<template>
  <div>
    <div class="" style="background-color: #20505d">
      <v-container>
        <h1 class="red--text">GospelGateway</h1>
      </v-container>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h1 class="mt-5 mt-md-10 font-h2">
            Unlock exclusive church updates by
            <span class="red--text"> registering today!</span>
          </h1>
          <p class="mt-5 font-p">
            Registering as a member gives you access to church announcements,
            upcoming events, service schedules, and more, ensuring you never
            miss out on important information or opportunities to engage with
            your community.
          </p>

          <v-text-field class="mt-10" label="Full Name" outlined></v-text-field>

          <v-text-field class="" label="Email" outlined></v-text-field>

          <v-text-field class="" label="Password" outlined></v-text-field>

          <v-select
            v-model="selectedChurch"
            label="Church"
            outlined
            :items="getAllChurches"
            item-value="id"
            item-text="churchName"
          ></v-select>

          <v-select
            label="Branch"
            outlined
            :items="getBranchByChurchId"
            item-value="id"
            item-text="name"
            :disabled="getBranchByChurchId.length === 0"
          ></v-select>

          <v-select
            label="Gender"
            outlined
            :items="['Male', 'Female']"
          ></v-select>

          <v-text-field
            class="mt-0"
            label="Phone number"
            outlined
          ></v-text-field>

          <v-btn
            class="white--text"
            :to="{ name: 'MemberLogin' }"
            style="background-color: red"
            block
            depressed
            >Register</v-btn
          >
          <p class="mt-5 font-p">
            Unlock exclusive church updates byYou already have account?
            <span class="red--text"> LogIn</span>
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- overlay -->
    <v-overlay :value="overlay" z-index="1000">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "SignUpPage",

  data: () => ({
    overlay: false,
    selectedChurch: null,
    selectedBranch: null,
  }),

  async created() {
    this.overlay = true;
    await Promise.all([this.$store.dispatch("church/getAllChurchesReq")])
      .then(() => {
        this.overlay = false;
      })
      .catch(() => {
        this.overlay = false;
      });
  },

  watch: {
    async selectedChurch(newChurchId) {
      if (newChurchId) {
        this.overlay = true;
        await this.$store
          .dispatch("branch/getBranchByChurchIdReq", newChurchId)
          .then(() => {
            this.overlay = false;
          })
          .catch(() => {
            this.overlay = false;
          });
      }
    },
  },

  computed: {
    // getAllChurches
    getAllChurches() {
      return this.$store.getters["church/getAllChurches"];
    },

    // getBranchByChurchId
    getBranchByChurchId() {
      return this.$store.getters["branch/getBranchByChurchId"];
    },
  },
};
</script>

<style lang="scss" scoped>
//
</style>
