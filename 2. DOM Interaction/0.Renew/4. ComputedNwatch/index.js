new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    computed: {
        output: function() {
            console.log('Computed');
            return this.counter > 5
                ? 'Greater than 5'
                : 'Smaller or equal to 5';
        }
    },
    watch: {
        counter: function() {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    }
});
