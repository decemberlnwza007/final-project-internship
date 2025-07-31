import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../components/Login/LoginComponent.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/document',
        name: 'document',
        component: () => import('../views/DocumentView.vue')
    },
    {
        path: '/organization',
        name: 'organization',
        component: () => import('../views/OrganizationView.vue')
    },
    {
        path: '/homeadmin',
        name: 'homeadmin',
        component: () => import('../views/Admin/HomeView.vue')
    },
    {
        path: '/adduser',
        name: 'adduser',
        component: () => import('../views/Admin/AdduserView.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/Admin/UserView.vue')
    },
    {
        path: '/setting',
        name: 'setting',
        component: () => import('../views/Setting/SettingView.vue')
    }
    //   {
    //     path: '/progress',
    //     name: 'progress',
    //     component: () => import('../views/ProgressView.vue')
    //   },
    //   {
    //     path: '/schedule',
    //     name: 'schedule',
    //     component: () => import('../views/ScheduleView.vue')
    //   },
    //   {
    //     path: '/mentors',
    //     name: 'mentors',
    //     component: () => import('../views/MentorsView.vue')
    //   },
    //   {
    //     path: '/profile',
    //     name: 'profile',
    //     component: () => import('../views/ProfileView.vue')
    //   },
    //   {
    //     path: '/settings',
    //     name: 'settings',
    //     component: () => import('../views/SettingsView.vue')
    //   }
]

const router = createRouter({
    history: createWebHistory(''),
    routes
});

export default router;