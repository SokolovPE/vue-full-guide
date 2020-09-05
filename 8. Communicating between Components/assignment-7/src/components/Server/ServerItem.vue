<template>
    <li class="list-group-item" @click="changeSelectedServer">
        Server #{{ server.id }}
    </li>
</template>

<script>
import { eventBus } from '../../main';
export default {
    props: {
        server: {
            type: Object,
            required: true
        }
    },
    methods: {
        changeSelectedServer() {
            // emit a message when component was clicked on.
            eventBus.changeSelectedServer(this.server);
        }
    }
};
</script>

<style scoped>
li {
    cursor: pointer;
}
</style>
