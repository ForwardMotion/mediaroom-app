import VueRouter from 'vue-router';

import BlogRoutes from '@/modules/blog/blog.routes'
import UsersRoutes from '@/modules/users/users.routes'

const routes = [
    ...BlogRoutes,
    ...UsersRoutes,
];

export const router = new VueRouter({
    mode: 'history',
    routes,
});
