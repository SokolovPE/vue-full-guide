import User from '@/components/user/User.vue';
import UserStart from '@/components/user/UserStart.vue';
import UserDetail from '@/components/user/UserDetail.vue';
import UserEdit from '@/components/user/UserEdit.vue';
import Home from '@/components/Home.vue';
import Header from '@/components/Header.vue';

export const routes = [
    {
        path: '',
        name: 'home',
        components: {
            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/user',
        components: {
            default: User,
            'header-bottom': Header
        },
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
    },
    { path: '/redirect-me', redirect: { name: 'home' } }
];
