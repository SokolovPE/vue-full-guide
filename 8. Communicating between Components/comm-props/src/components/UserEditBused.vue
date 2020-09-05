<template>
    <div class="component">
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
// Works this way for named export!
// export const eventBus = new Vue();
import { eventBus } from '../main';
export default {
    methods: {
        editAge() {
            let newAge = 30;
            // Event is emitted in event bus instance, not in this component instance.
            eventBus.changeAge(newAge);
        }
    }
};
</script>

<style scoped>
div.component {
    background-color: lightgreen;
}
</style>
