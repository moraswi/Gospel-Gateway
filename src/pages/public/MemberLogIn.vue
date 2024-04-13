<template>
  <div>
    <!-- login section -->
    <div style="background-color: grey;">
    <v-container class=" py-16">
      <v-row>
        <v-col cols="12" md="6">
     <h1 class="  text-red">GospelGateway</h1>

     <p class="mt-10">Easy and Affordable <span class="text-red"> Case Management Software </span> for Your Church</p>

     <p class="mt-5">Streamline your church's administrative tasks with our user-friendly case management software.
      How about "Transformative"? It conveys the idea that using GospelGateway can
       bring about positive change and improvement within the church management processes.
      Simplify coordination and maximize efficiency in providing support to those in need</p>

      <p class="mt-5">Give us  call: <span class="text-red"> +27 11 111 1111</span></p>
          <!-- 
      <v-text-field
            label="Plain"
            placeholder="Placeholder"
            variant="plain"
          ></v-text-field> -->

          <v-text-field
          class="mt-5"
          label="Email"
          variant="outlined"
        ></v-text-field>

        <v-text-field
        label="Password"
        variant="outlined"
      ></v-text-field>

     <v-btn class="text-white" :to="{name:'AdminDashboard'}" style="background-color: red;" block>Login</v-btn>
     <p class="mt-5">Don't you have account yet? <router-link :to="{ name: 'MemberSignup' }" class="text-red">Create Account.</router-link></p>
    </v-col>
  </v-row>
</v-container>
</div>
<!-- summary of the web -->
    <v-container>
      <div>
    <v-card width="600" flat>
    <h1 class="mt-10">Easy, but effective case management to assist your church in <span class="text-red"> understanding data and evaluating its impact.</span></h1>
  </v-card>
    <v-row class="mt-10 text-center" >
      <v-col cols="12" md="3">
        <h2 class="text-red">
          Introduction to Case Management for Churches
        </h2>
        <p class="mt-4">Churches manage data efficiently with structured case management,
           turning it into actionable insights for impactful ministry.</p>
      </v-col>

      <v-col cols="12" md="3">
        <h2 class="text-red">
          Streamlining Data Management
        </h2>
        <p class="mt-4">Tools streamline data collection, storage, and retrieval,
           ensuring accessibility and informed decision-making for outreach programs.</p>
      </v-col>

      <v-col cols="12" md="3">
        <h2 class="text-red">
          Measuring Impact and Effectiveness
        </h2>
        <p class="mt-4">Churches gauge impact through metrics, informing resource
           allocation and future initiatives for effective community service.</p>
      </v-col>

      <v-col cols="12" md="3">
        <h2 class="text-red">
          Empowering Meaningful Engagement
        </h2>
        <p class="mt-4">Tailored outreach fosters trust, strengthens relationships,
           and creates lasting positive impacts on the community.</p>
      </v-col>
    </v-row>
  </div>
    </v-container>


    <div class="mt-16 py-16" style="background-color: grey;">
      <v-container class="text-center">
        <h1>
          Avoid lengthy training or onboarding. <span class="text-red"> Contact us to begin using our user-friendly client management software, GospelGateway,</span> for efficiently managing data beyond just church services.</h1>
          <v-btn class="text-white mt-5" :to="{name:'MemberLogin'}" style="background-color: red;" >Get Demo</v-btn>
        </v-container>
    </div>

    <v-container class="mt-16">
<div class="text-center">
      <h1>When you create an impact, we all contribute to that impact.</h1>
    </div>
      <v-row class="mt-3">
        <v-col cols="12" md="4">
          <v-card class="pa-5  rounded-xl " rounded>
            <p>
              GospelGateway has been a game-changer for us. Before using this software,
               we struggled to keep track of our client information and program data efficiently.
                With GospelGateway, everything is centralized and easy to access. We can quickly
                 input new data, retrieve information when needed, and generate reports to analyze 
                 our impact. It has saved us a significant amount of time and has made our data
                  management processes much more streamlined.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="pa-5  rounded-xl " rounded>
            <p>
              I can't praise GospelGateway enough. As someone who
               works closely with our outreach programs, having access 
               to this software has been invaluable. It allows us 
               to monitor participation rates, track outcomes, and identify
                areas for improvement. The user-friendly interface makes it
                 easy for everyone on our team to navigate, even those who
                  aren't tech-savvy. Thanks to GospelGateway, we're able to
                   make more informed decisions and better serve our community.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="pa-5  rounded-xl " rounded>
            <p>
              GospelGateway has transformed the way
               we engage with our community. Before using this 
               software, we struggled to personalize our outreach
                efforts and provide targeted support. Now, with the
                 data insights provided by GospelGateway, we can tailor
                  our programs to meet the specific needs of those we
                   serve. This has resulted in deeper connections, increased
                    trust, and ultimately, more impactful outcomes for our
                     organization and the people we support.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="text-center mt-16">
    <h1>The journey of transformation begins at this point.</h1>
    <v-btn class="text-white" :to="{name:'MemberLogin'}" style="background-color: red;" >Get Demo</v-btn>

    </div>

      <div class="mt-16" style="background-color: grey;">
      <v-container>
      <h1 class="  text-red">GospelGateway</h1>
    </v-container>
    </div>
  </div>
  </template>
  
  <script>
  
  export default {
    name: 'LogInPage',
  
    data: () => ({

    }),
  }
  </script>


<style>

</style>