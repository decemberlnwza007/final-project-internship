import { createWebHistory, createRouter } from "vue-router";

const InternshipReportPDF = () => import("../components/PDF/InternshipReportPDF.vue");

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
    },
    {
        path: '/report',
        name: 'report',
        component: () => import('../views/InternshipReportView.vue')
    },
    {
        path: '/stdinfo',
        name: 'stdinfo',
        component: () => import('../views/Admin/StudentInfoView.vue')
    },
    {
        path: "/internship-report",
        name: "InternshipReport",
        component: InternshipReportPDF
    },
    {
        path: '/schedule',
        name: 'schedule',
        component: () => import('../views/ScheduleView.vue')
    },
    {
        path: '/mentors',
        name: 'mentor',
        component: () => import('../views/MentorView.vue')
    },
    {
        path: '/it',
        name: 'it',
        component: () => import('../components/Admin/StudentInfo/It.vue')
    },
    {
        path: '/mecha',
        name: 'mecha',
        component: () => import('../components/Admin/StudentInfo/Mecha.vue')
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
    history: createWebHistory(),
    routes
});

export default router;