<template>
  <div>
    <!-- login section -->
    <!-- 1a9aaa -->
    <div style="background-color: #20505d">
      <v-container class="py-md-10 py-3">
        <v-row>
          <v-col cols="12" md="6">
            <h1 class="red--text font-h2">GospelGateway</h1>

            <h1 class="mt-md-10 font-h4 white--text">
              Easy and Affordable <span> Case Management Software </span> for
              Your Church
            </h1>

             <!-- Email -->
             <v-text-field
              v-model="email"
              class="mt-5 pa-0 custom-text-field hidden-md-and-up"
              label="Email"
              outlined
            ></v-text-field>

            <!-- Password -->
            <v-text-field
              v-model="password"
              label="Password"
              class="custom-text-field hidden-md-and-up"
              outlined
            ></v-text-field>

            <v-btn
              class="white--text hidden-md-and-up"
              @click="logInReq"
              style="background-color: red"
              block
              depressed
              >Login</v-btn
            >
            <p class="mt-5 font-p white--text hidden-md-and-up">
              Don't you have account yet?
              <router-link :to="{ name: 'MemberSignup' }" class="red--text"
                >Create Account.</router-link
              >
            </p>


            <p class="mt-5 white--text font-p">
              Streamline your church's administrative tasks with our
              user-friendly case management software. How about
              "Transformative"? It conveys the idea that using GospelGateway can
              bring about positive change and improvement within the church
              management processes. Simplify coordination and maximize
              efficiency in providing support to those in need
            </p>

            <h3 class="mt-5 font-h3 grey--text">
              Get Demo: <span class="red--text"> moraswip97@gmail.com</span>
            </h3>

            <!-- Email -->
            <v-text-field
              v-model="email"
              class="mt-5 pa-0 custom-text-field hidden-sm-and-down"
              label="Email"
              outlined
            ></v-text-field>

            <!-- Password -->
            <v-text-field
              v-model="password"
              label="Password"
              class="custom-text-field hidden-sm-and-down"
              outlined
            ></v-text-field>

            <v-btn
              class="white--text hidden-sm-and-down"
              @click="logInReq"
              style="background-color: red"
              block
              depressed
              >Login</v-btn
            >
            <p class="mt-5 font-p white--text hidden-sm-and-down">
              Don't you have account yet?
              <router-link :to="{ name: 'MemberSignup' }" class="red--text"
                >Create Account.</router-link
              >
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- summary of the web -->
    <v-container>
      <div>
        <v-card width="600" flat>
          <h1 class="mt-md-10 mt-2 font-h3">
            assist your church in
            <span class="red--text"> understanding data </span> and evaluating
            its impact.
          </h1>
        </v-card>
        <v-row class="mt-2 mt-md-10">
          <v-col cols="12" md="3">
            <h2 class="red--text font-h4">
              Introduction to Case Management for Churches
            </h2>
            <p class="mt-md-4  font-p">
              Churches manage data efficiently with structured case management,
              turning it into actionable insights for impactful ministry.
            </p>
          </v-col>

          <v-col cols="12" md="3">
            <h2 class="red--text font-h4">Streamlining Data Management</h2>
            <p class="mt-md-4 font-p">
              Tools streamline data collection, storage, and retrieval, ensuring
              accessibility and informed decision-making for outreach programs.
            </p>
          </v-col>

          <v-col cols="12" md="3">
            <h2 class="red--text font-h4">
              Measuring Impact and Effectiveness
            </h2>
            <p class="mt-md-4  font-p">
              Churches gauge impact through metrics, informing resource
              allocation and future initiatives for effective members service.
            </p>
          </v-col>

          <v-col cols="12" md="3">
            <h2 class="red--text font-h4">Empowering Meaningful Engagement</h2>
            <p class="mt-md-4  font-p">
              Tailored outreach fosters trust, strengthens relationships, and
              creates lasting positive impacts on the community.
            </p>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <div class="mt-1 mt-md-16  py-md-16" style="background-color: #e6ebf1">
      <v-container class="text-center">
        <h1 class="font-h3">
          to begin using our user-friendly client management software,
          <span class="red--text"> Contact us </span>, for efficiently managing
          data beyond just church services.
        </h1>
        <!-- <v-btn
          class="white--text mt-5"
          :to="{ name: 'MemberLogin' }"
          style="background-color: red"
          >Get Demo</v-btn
        > -->
      </v-container>
    </div>

    <v-container class="mt-2 mt-md-16" width="1400px">
      <div class="text-center">
        <h1 class="font-h3">
          When you create an impact, we all contribute it.
        </h1>
      </div>
      <v-row class="mt-5">
        <v-col cols="12" md="4">
          <v-card class="pa-5 rounded-xl" rounded>
            <p font-p>
              We are grateful for GospelGateway and the simplicity it brings to managing our church's data. This system has become an essential part of our operations, allowing us to securely store and organize important information in one central place. With its reliability and ease of use, GospelGateway helps us focus more on ministry and less on administrative challenges.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="pa-5 rounded-xl" rounded>
            <p font-p>
              The way GospelGateway seamlessly manages member records, offerings, and other critical data has truly transformed how we operate. By providing a safe and accessible platform, it has given us the confidence to handle our church's information efficiently. This system ensures that our records are always up-to-date and easy to retrieve whenever needed, simplifying processes for our team.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="pa-5 rounded-xl" rounded>
            <p font-p>
              We appreciate GospelGateway for its role in making data management stress-free for our church. It’s a tool that not only saves time but also helps us stay organized as we serve our congregation. GospelGateway is more than just a system – it’s a valuable asset that supports our mission by keeping our operations running smoothly.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="mt-8 mt-md-16" style="background-color: #20505d">
      <v-container>
        <h1 class="red--text">GospelGateway</h1>
      </v-container>
    </div>

    <!-- overlay -->
    <v-overlay :value="overlay" z-index="1000">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "LogInPage",

  data: () => ({
    overlay: false,
    email: "",
    password: "",
  }),

  computed: {
    // getUserDetails
    getUserDetails() {
      return this.$store.getters["user/getUserDetails"];
    },
  },

  methods: {
    // logInReq
    async logInReq() {
      try {
        this.overlay = true;
       // this.$router.push({ name: "AdminDashboard" });

        const data = {
          email: this.email,
          password: this.password,
        };
        // console.log(data);

        // response
        const response = await this.$store.dispatch("user/logInReq", data);
        // console.log(response);
        // console.log(response.data);
        // console.log(response.status);
        if (response.status == 200) {
          // AdminDashboard
          this.$router.push({ name: "AdminDashboard" });

          this.$swal({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Successfully logged in!",
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
          title: "check your details!",
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


.custom-text-field ::v-deep fieldset {
  border-color: white !important;
}

.custom-text-field ::v-deep .v-label {
  color: white !important;
}

.custom-text-field ::v-deep .v-input__slot input {
  color: white !important;
}
</style>
