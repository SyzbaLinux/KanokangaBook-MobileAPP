<template>
    <div class="welcomePage bg1">
      <v-card class="rounded-b-xl   text-center glass-background pa-2"  >
          <h1 class="welcomeHeading ">
            RichyCash
          </h1>
      </v-card>


      <v-card class="rounded-t-xl   bottom-card pa-5 text-center glass-background"  >
        <div  class="mt-3">
          <h3>Welcome to</h3>
          <h1 class="welcomeHeading mx-5 ">
            RichyCash
          </h1>
          <p class="mb-5">Mobile App, Your financial helper </p>
        </div>


        <v-btn to="/login" color="error" size="x-large" variant="flat" block class="no-uppercase rounded-pill">
          Log In
        </v-btn>

        <v-btn to="/register" color="error" size="x-large" variant="outlined" block class="no-uppercase rounded-pill my-5">
          New to RichyCash? Sign Up
        </v-btn>
      </v-card>
    </div>
</template>

<script setup lang="ts">
</script>
