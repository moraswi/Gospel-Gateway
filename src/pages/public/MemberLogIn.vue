<template>
    <div >

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

     <v-btn :to="{name:'AdminDashboard'}" block>Login</v-btn>
     <p class="mt-5">Don't you have account yet? <span class="text-red"> Create Account</span></p>

     <v-btn :to="{name:'MemberSignup'}" >home</v-btn>

    </v-col>

  </v-row>

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