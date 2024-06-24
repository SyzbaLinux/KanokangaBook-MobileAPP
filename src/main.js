import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOE5z6izwxx4BswW-UNGHloAt5IQ43wEg",
  authDomain: "podc-78dc9.firebaseapp.com",
  databaseURL: "https://podc-78dc9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "podc-78dc9",
  storageBucket: "podc-78dc9.appspot.com",
  messagingSenderId: "224932543453",
  appId: "1:224932543453:web:0e335334363e12dec4d434"
};

initializeApp(firebaseConfig)

const app = createApp(App)

import bottomNavigationVue from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";

registerPlugins(app)


app
  .use(bottomNavigationVue)
  .mount('#app')
