import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Exports musy be created before main instance,
// because if export will be performed after instance
// those imports will be unreachable.
export const eventBus = new Vue({
    methods: {
        changeAge(age) {
            age *= 2;
            this.$emit('age-was-edited', age);
        }
    }
});

new Vue({
    render: h => h(App)
}).$mount('#app');
