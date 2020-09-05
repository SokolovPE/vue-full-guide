<template>
    <div class="component">
        <p>My age: {{ myAge }}</p>
    </div>
</template>

<script>
// Works this way for named export!
// export const eventBus = new Vue();
import { eventBus } from '../main';
export default {
    data() {
        return {
            myAge: 25
        };
    },
    created() {
        // Setting a listener to event bus when instance was created.
        eventBus.$on('age-was-edited', age => {
            this.myAge = age;
        });
    }
};
</script>

<style scoped>
div.component {
    background-color: lightcoral;
}
</style>
