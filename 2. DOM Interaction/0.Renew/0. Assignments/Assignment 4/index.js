new Vue({
    el: '#exercise',
    data: {
        effectPack: {
            highlight: true,
            shrink: false
        },
        currentClass: 'square',
        secondClass: 'rect',
        hasBorder: true,
        currentWidth: 100,
        currentHeight: 100,
        currentColor: 'yellow',
        progress: 10
    },
    methods: {
        startEffect: function() {
            var vm = this;
            setInterval(function() {
                vm.effectPack.highlight = !vm.effectPack.highlight;
                vm.effectPack.shrink = !vm.effectPack.shrink;
            }, 1000);
        },
        startProgressBar: function() {
            var vm = this;
            setInterval(function() {
                if (vm.progress >= 100) {
                    vm.progress = 0;
                }
                vm.progress += 5;
            }, 200);
        }
    }
});
