import HomePage from './components/HomePage.vue';
import SignUp from './components/SignUp.vue';
import LoginPage from './components/LoginPage.vue';
import AddHotel from './components/AddHotel.vue';
import UpdateHotel from './components/UpdateHotel.vue';
import ProfileUpdate from './components/ProfileUpdate.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'LoginPage',
        component:LoginPage,
        path:'/login'
    },
    {
        name:'AddHotel',
        component:AddHotel,
        path:'/add-hotel'
    },
    {
        name:'UpdateHotel',
        component:UpdateHotel,
        path:'/update-hotel/:id'
    },
    {
        name:'ProfileUpdate',
        component:ProfileUpdate,
        path:'/profile-update/:id'
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router;