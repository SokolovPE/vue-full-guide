import Home from '@/components/Home.vue';
import Header from '@/components/Header.vue';

//* Webpack will recognize wthis syntax to lazy load parts.
// Whenever we want to laod something in ensure's firest argument,
// execute function from second parameter, and resolves the path we should really use.
// So those parts will be loaded when they really needed.
const User = resolve => {
    require.ensure(
        ['@/components/user/User.vue'],
        () => {
            resolve(require('@/components/user/User.vue'));
        },
        'user'
    );
};

const UserStart = resolve => {
    require.ensure(
        ['@/components/user/UserStart.vue'],
        () => {
            resolve(require('@/components/user/UserStart.vue'));
        },
        'user'
    );
};

const UserDetail = resolve => {
    require.ensure(
        ['@/components/user/UserDetail.vue'],
        () => {
            resolve(require('@/components/user/UserDetail.vue'));
        },
        'user'
    );
};

const UserEdit = resolve => {
    require.ensure(
        ['@/components/user/UserEdit.vue'],
        () => {
            resolve(require('@/components/user/UserEdit.vue'));
        },
        'user'
    );
};

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
            {
                path: ':id',
                component: UserDetail,
                name: 'userDetail',
                beforeEnter: (to, from, next) => {
                    console.log('Inside route setup');
                    next();
                }
            },
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
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: { name: 'home' } }
];
