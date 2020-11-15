import User from '@/components/user/User.vue';
import UserStart from '@/components/user/UserStart.vue';
import UserDetail from '@/components/user/UserDetail.vue';
import UserEdit from '@/components/user/UserEdit.vue';
import Home from '@/components/Home.vue';

export const routes = [
    { path: '', component: Home, name: 'home' },
    {
        path: '/user',
        component: User,
        children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail, name: 'userDetail' },
            {
                path: ':id/edit',
                component: UserEdit,
                name: 'userEdit',
                props: route => ({
                    id: route.params.id,
                    locale: route.query.locale,
                    analytics: route.query.q
                })
            }
        ]
    }
];
