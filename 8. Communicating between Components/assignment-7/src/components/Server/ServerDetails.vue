<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server #{{ server.id }}</p>
        <p>Current Status: {{ server.status }}</p>
        <button @click="normalize">Normalize Server</button>
    </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
    data() {
        return {
            server: Object
        }
    },
    methods: {
        normalize() {
            this.server.status = 'Normal';
        }
    },
    created() {
        eventBus.$on('selected-server-changed', srv => {
            this.server = srv;
        });
    }
};
</script>

<style></style>
