import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';
//* Load only actions I want.
// import { updateValue } from './actions';
//* Load all and create an object of them.
import * as sharedActions from './actions';
import * as sharedGetters from './getters';
import * as sharedMutations from './mutations';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters: {
        ...sharedGetters
    },
    mutations: {
        ...sharedMutations
    },
    actions: {
        ...sharedActions
    },
    modules: {
        appCounter: counter
    }
});
