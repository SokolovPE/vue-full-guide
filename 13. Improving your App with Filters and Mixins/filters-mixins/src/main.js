import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

//Vue.filter('to-lowercase');

new Vue({
    render: h => h(App)
}).$mount('#app');
