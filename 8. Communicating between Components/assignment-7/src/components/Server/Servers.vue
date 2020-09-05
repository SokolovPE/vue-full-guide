<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-item
                v-for="srv in servers"
                :key="srv.id"
                :server="srv"
            ></server-item>
        </ul>
    </div>
</template>

<script>
import ServerItem from './ServerItem.vue';
import { eventBus } from '../../main';

export default {
    data() {
        return {
            servers: [
                { id: 1, status: 'Normal' },
                { id: 2, status: 'Critical' },
                { id: 3, status: 'Unknown' },
                { id: 4, status: 'Normal' }
            ]
        };
    },
    components: {
        'server-item': ServerItem
    },
    mounted() {
        eventBus.changeSelectedServer(this.servers[0]);
    }
};
</script>

<style></style>
