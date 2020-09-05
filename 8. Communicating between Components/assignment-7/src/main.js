import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

export const eventBus = new Vue({
    methods: {
        // Selecetd server was changed.
        changeSelectedServer(server) {
            this.$emit('selected-server-changed', server);
        }
    }
});

new Vue({
    render: h => h(App)
}).$mount('#app');
