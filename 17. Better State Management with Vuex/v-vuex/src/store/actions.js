export const updateValue = ({ commit }, payload) => {
    commit('updateValue', payload);
};

//* Multiple shared actions are exported as separate const.
export const action2 = ({ commit }, payload) => {
    commit('updateValue', payload);
};
