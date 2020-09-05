<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
export default {
    props: {
        userAge: Number
    },
    methods: {
        editAge() {
            let newAge = 30;
            this.$emit('age-was-edited', newAge);
        }
    }
};
</script>

<style scoped>
div.component {
    background-color: lightgreen;
}
</style>
