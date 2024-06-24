<template>

   <v-container>
     Welcome {{ isLoggedIn }}

     <v-btn @click="handleSignOut">
       Sign Out
     </v-btn>
   </v-container>


  <CurvedBottomNavigation
    :options="options"
    v-model="selected"
    foreground-color='#750000'
    background-color='#fff'
    icon-color='#750000'
  ></CurvedBottomNavigation>
</template>

<script  setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const isLoggedIn = ref(false);
let auth;

onMounted(()=>{
  auth = getAuth();
  onAuthStateChanged(auth, (user)=>{
    isLoggedIn.value = !!user;
  })
});

const handleSignOut = ()=>{
  signOut(auth).then(() =>{

  })
}

const selected = ref(1)
const options = ref([
  { id: 1, icon: "ph-fill  ph-house-line",  title: "Home",  path: { name: "dashboard" }},
  { id: 2, icon: "ph-fill  ph-credit-card", title: "Airtime" , path: { name: "airtime" }},
  { id: 3, icon: "ph-fill  ph-invoice",   title: "Bills",  path: { name: "bills" }},
  { id: 4, icon: "ph-fill  ph-bell",   title: "Notification", path: { name: "notifications" }},
  { id: 5, icon: "ph-fill ph-sliders",   title: "Settings",  path: { name: "settings" }},
])

</script>

