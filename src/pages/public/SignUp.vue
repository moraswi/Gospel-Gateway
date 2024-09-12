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

          <!-- Full Name -->
          <v-text-field v-model="FullName" class="mt-7" label="Full Name" outlined></v-text-field>

          <!-- Email -->
          <v-text-field v-model="Email"class="" label="Email" outlined></v-text-field>

          <!-- Password -->
          <v-text-field v-model="Password" class="" label="Password" outlined></v-text-field>

          <!-- Church -->
          <v-select
            v-model="selectedChurch"
            label="Church"
            outlined
            :items="getAllChurches"
            item-value="id"
            item-text="churchName"
          ></v-select>

          <!-- Branch -->
          <v-select
          v-model="selectedBranch"
            label="Branch"
            outlined
            :items="getBranchByChurchId"
            item-value="id"
            item-text="name"
            :disabled="getBranchByChurchId.length === 0"
          ></v-select>
          
          <!-- Member -->
          <v-select
          v-model="Member"
            label="Member"
            outlined
            :items="[true, false]"
          ></v-select>

          <!-- Gender -->
          <v-select
          v-model="gender"
            label="Gender"
            outlined
            :items="['Male', 'Female']"
          ></v-select>

          <!-- PhoneNumber -->
          <v-text-field
            v-model="PhoneNumber"
            class="mt-0"
            label="Phone Number"
            outlined
          ></v-text-field>

          <v-btn
            class="white--text"
            @click="registerUserReq()"
            style="background-color: red"
            block
            depressed
            >Register</v-btn
          >
          <p class="mt-5 font-p">
            You already have account?
            <span class="red--text"> </span>

            <router-link :to="{ name: 'MemberLogin' }" class="red--text"
                >LogIn.</router-link
              >
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
    Member: null,
    FullName: '',
    Email: '',
    Password: '',
    gender: '',
    PhoneNumber: '',
    showErrors: false, 
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

  methods: {
  
// registerUserReq
  async registerUserReq() {
     // Check if any required field is empty
     if (!this.FullName || !this.Email || !this.Password || !this.selectedChurch || !this.selectedBranch || this.Member === null || !this.gender || !this.PhoneNumber) {
      this.$swal({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Please fill in all required fields",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      return;
    }

      try {
        this.overlay = true;

        const data = {
          fullName: this.FullName,
          phoneNumber: this.PhoneNumber,
          gender: this.gender,
          email: this.Email,
          password: this.Password,
          churchId: this.selectedChurch,
          branchId: this.selectedBranch,
          member: this.Member
        };
     
        // response
        const response = await this.$store.dispatch("user/registerUserReq", data);
       
        if (response.status == 200) {
          // MemberLogin
          this.$router.push({ name: "MemberLogin" });

          this.$swal({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Successfully logged in!",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        } else {
          this.$swal({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "check your details!",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        }
      } catch (error) {
        this.$swal({
          toast: true,
          position: "top-end",
          icon: "error",
          title: 'Something is wrong',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      } finally {
        this.overlay = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
//
</style>
