<template>
   <v-container class="bg1 welcomePage">
     <v-card class="rounded-b-xl   text-center glass-background"  >
       <div class="d-flex align-center pa-2">
         <v-btn
           to="/"
           color="transparent"
           variant="flat"
           class="mr-8"
           icon="ph-house-line"
         />
         <h1 class="welcomeHeading ">
           RichyCash
         </h1>
       </div>
     </v-card>


     <v-card class="rounded-t-xl   bottom-card-auth pa-5 text-center glass-background"  >

       <v-form @submit.prevent="registerUser">
         <v-card-title class="  mb-3 d-flex justify-space-between">
           <div class="text-h4"> Sign Up  </div>
           <div>
             <v-btn to="/login" size="large" variant="flat" color="transparent">
               Login  <v-icon class="mb-3" icon="ph-arrow-up-right"></v-icon>
             </v-btn>
           </div>
         </v-card-title>

         <v-card-text>
           <v-text-field
             clearable
             label="Enter your Name"
             required
             v-model="form.name"
             variant="outlined"
             :error-messages="errors"
             class="mb-3"
           />

           <v-text-field
             clearable
             type="email"
             label="Enter your email"
             required
             v-model="form.email"
             variant="outlined"
             class="mb-3"
           />

           <v-text-field
             clearable
             type="password"
             label="password"
             required
             variant="outlined"
             v-model="form.password"
           />

           <v-btn :loading="loading" type="submit"  class="rounded-pill " variant="elevated" color="error" size="x-large" block  >
             Register
           </v-btn>
         </v-card-text>

          <div class="d-flex align-center justify-space-between">
              <v-divider class="w-20"/>
                <div class="w-60">
                  Or Use
                </div>
              <v-divider class="w-20"/>
          </div>

         <v-card-actions class="justify-center pt-3">
           <v-btn
             variant="flat"
             icon=""
             class="glass-background mx-2"
             @click="signInWithGoogle()"
           >
             <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path fill="#4285f4" d="M41.636 203.039h31.818v-77.273L28 91.676v97.727c0 7.545 6.114 13.636 13.636 13.636"/><path fill="#34a853" d="M182.545 203.039h31.819c7.545 0 13.636-6.114 13.636-13.636V91.675l-45.455 34.091"/><path fill="#fbbc04" d="M182.545 66.675v59.091L228 91.676V73.492c0-16.863-19.25-26.477-32.727-16.363"/><path fill="#ea4335" d="M73.455 125.766v-59.09L128 107.583l54.545-40.909v59.091L128 166.675"/><path fill="#c5221f" d="M28 73.493v18.182l45.454 34.091v-59.09L60.727 57.13C47.227 47.016 28 56.63 28 73.493"/></g></svg>
           </v-btn>

           <v-btn
             variant="flat"
             icon=""
             class="glass-background mx-2"
           >
             <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
           </v-btn>

           <v-btn
             variant="flat"
             icon=""
             class="glass-background mx-2"
           >
             <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 16 16"><path fill="currentColor" d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>
           </v-btn>

         </v-card-actions>
       </v-form>
     </v-card>
   </v-container>
</template>


<script>

import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
export default {
  name: "RegisterComponent",

  data(){
    return{
      form:{
        name:null,
        email:null,
        password:null,
        error:null
      },

      errors:[],
      loading:false
    }
  },

  methods:{

    async registerUser(){

      this.loading = true
        await createUserWithEmailAndPassword(getAuth(),this.form.email, this.form.password)

          .then(() => {
              this.loading = false
              this.$router.push('/dashboard')
          })

          .catch((error)=>{
              this.loading = false
            this.errors.push(error.code)
          })
    },

    async signInWithGoogle(){

      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(),provider)
        .then(() => {
          this.loading = false
          this.$router.push('/dashboard')
        })
        .catch((error)=>{
          this.errors.push(error.message)
        })
    }
  }

};
</script>
