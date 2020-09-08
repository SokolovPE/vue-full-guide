import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.directive('highlight', {
    bind(el /*, binding, vnode*/) {
        el.style.backgroundColor = 'green';
    }
});

new Vue({
    render: h => h(App)
}).$mount('#app');
