new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increaseCounter: function(step, event) {
            this.counter += step;
        },
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        // option #!
        // dummy: function(event) {
        //     //* only handle element here, not in parent event handlers.
        //     event.stopPropagation();
        // }
        alertMe: function() {
            alert('Alert!');
        }
    }
});
