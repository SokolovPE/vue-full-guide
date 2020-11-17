<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Number of clicks: {{ clicks }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
//import * as types from '../store/types';
export default {
    computed: {
        ...mapGetters('appCounter', {
            counter: 'doubleCounter',
            clicks: 'stringCounter'
        }),
        ourOwn() {
            return 'yee';
        }
    }
};
</script>
