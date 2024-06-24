import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: () => import("../pages/index.vue")
  },

  {
    path: '/login',
    name: 'login',
    component: () => import("../pages/Auth/Login.vue")
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("../pages/Auth/Register.vue")
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import("../pages/Dashboard.vue"),
    meta: {
        requiresAuth: true,
    }
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

const getCurrentUser = () =>{
  return new Promise((resolve,reject)=>{
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user)
      },
      reject
    )
  })
};

router.beforeEach(async (to, from, next) => {

  if(to.matched.some((record)=> record.meta.requiresAuth)){

    if(await getCurrentUser()){
      next()
    }else{
      next('/')
    }
  }else{
    next()
  }

})


export default router
