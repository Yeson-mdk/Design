import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login/LoginPage.vue';
import HomePage from '../components/HomePage.vue';
import Home from '../components/Page/Home.vue';
import ComputerList from '../components/Page/ComputerList.vue';
import AnsibleManagement from '../components/Page/AnsibleManagement.vue';
import UserManagement from '../components/Page/UserManagement.vue';
import Gpt from '../components/Page/Gpt.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home // 默认子路由
            },
            {
                path: 'computer-list',
                name: 'ComputerList',
                component: ComputerList
            },
            {
                path: 'ansible-management',
                name: 'AnsibleManagement',
                component: AnsibleManagement
            },
            {
                path: 'user-management',
                name: 'UserManagement',
                component: UserManagement
            },
            {
                path: 'gpt',
                name: 'Gpt',
                component: Gpt
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;