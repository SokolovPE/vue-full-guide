new Vue({
    el: '#exercise',
    data: {
        name: 'Pavel',
        age: 25,
        vueLogoUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png'
    },
    methods: {
        getRandomFloat: function() {
            return Math.random();
        }
    }
});
