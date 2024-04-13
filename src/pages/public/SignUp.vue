<template>

  <div>
 <div class="" style="background-color: #20505d;">
      <v-container>
      <h1 class="red--text">GospelGateway</h1>
    </v-container>
    </div>
    <v-container>

      <v-row>
        <v-col cols="12" md="6">
     <h1 class="mt-5 mt-md-10 font-h2">Unlock exclusive church updates by <span class="red--text"> registering today!</span></h1>
     <p class="mt-5 font-p">Registering as a member gives you access to church announcements, 
      upcoming events, service schedules, and more, ensuring you never miss 
      out on important information or opportunities to engage with your community.</p>

      <v-text-field
      class="mt-10"
      label="Full Name"
       outlined
     
    ></v-text-field>

        <v-text-field
        class=""
        label="Email"
         outlined
     
      ></v-text-field>

        <v-text-field
        class=""
        label="Password"
        outlined
       
      ></v-text-field>

      <v-select
      label="Church"
      outlined
     
      :items="['Church 1', 'Church 2', 'Church 3']"
    ></v-select>

        <v-select
        label="Gender"
        outlined
       
        :items="['Male', 'Female',]"
      ></v-select>

      <v-text-field
      class="mt-0"
      label="Phone number"
      outlined
     
    ></v-text-field>
 
    <v-btn class="white--text" :to="{name:'MemberLogin'}" style="background-color: red;" block>Signup</v-btn>

    </v-col>
  </v-row>

    </v-container>
 
  </div>
  </template>
  
  <script>
  
  export default {
    name: 'SignUpPage',
  
    data: () => ({

    }),
  }
  </script>

<!-- <style>
@import "@/assets/css/Styles.css";
</style> -->

<style lang="scss" scoped>
//
</style>
