<template>
    <div @click="deleteQuote">
        <h1>{{ quote.text }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        quote: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteQuote() {
            this.$emit('delete-quote', this.quote);
        }
    }
};
</script>

<style lang="scss" scoped>
div {
    border: 1px solid black;
    word-wrap: break-word;
    overflow-wrap: anywhere;
    max-width: 300px;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 5px 10px;

    &:hover {
        background-color: #17a2b820;
        cursor: pointer;
    }

    h1 {
        font-family: Arizonia;
    }
}
</style>
