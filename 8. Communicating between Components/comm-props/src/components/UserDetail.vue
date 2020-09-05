<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name (Event)</button>
        <button @click="resetFn()">Reset Name (Callback)</button>
    </div>
</template>

<script>
export default {
    props: {
        myName: {
            type: String,
            default: 'Azis'
        },
        resetFn: Function,
        userAge: Number
    },
    data() {
        return {
            defaultName: this.myName
        }
    },
    methods: {
        switchName() {
            return this.myName
                .split('')
                .reverse()
                .join('');
        },
        resetName() {
            // Send initial value to parent.
            this.$emit('name-was-reset', this.defaultName);
        }
    }
};
</script>

<style scoped>
div.component {
    background-color: lightcoral;
}
</style>
