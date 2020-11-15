import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
    routes,
    mode: 'history', //* 'hash' by default.
    scrollBehavior(to, from, savedPosition) {
        //* If position on page was saved by browser then scroll user back to that position.
        if (savedPosition) {
            return savedPosition;
        }
        //* If we have hash in url with element id, then navigate to that element.
        if (to.hash) {
            return {
                selector: to.hash //,
                // behavior: 'smooth' //* For a smooth scrolling.
            };
        }
        //* In all other cases scroll to top.
        return { x: 0, y: 0 };
    }
});

//* Executes before each routing action.
router.beforeEach((to, from, next) => {
    console.log('Global beforeEach');
    //* If next is called - route allowed, if no such line - not allowed.
    next();
    //* Means abort goinf to the route, stay at the page it came from.
    //next(false);
    //* Can navigate to specific route.
    //next('/home');
    //next({ name: 'home' });
});

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
