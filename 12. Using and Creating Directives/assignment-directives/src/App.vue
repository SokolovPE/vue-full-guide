<template>
    <div class="container">
        <div class="row">
            <div
                class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
            >
                <h1>Directsives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-at:click="alert">Execute</button>
                <hr />
                <button v-at:mouseover="alert" v-at:click="alert">
                    Execute on hover
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    directives: {
        at: {
            bind(el, binding) {
                var eventName = binding.arg;
                var methodToExec = binding.value;
                el.addEventListener(eventName, methodToExec, false);
            }
        }
    },
    methods: {
        alert() {
            alert('Hello!');
        }
    }
};
</script>

<style></style>
