import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
// Set root service for vue-resource.
Vue.http.options.root = 'https://vue-http-f059c.firebaseio.com';
// Set interceptor for request.
Vue.http.interceptors.push((request, next) => {
    console.log(request);
    if (request.method == 'POST') {
        request.method = 'PUT';
    }
    next(response => {
        // This will affect all responses!
        response.json = () => {
            return { message: response.body };
        };
    });
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
