<template>
    <div id="input-container">
        <h3>Quote</h3>
        <textarea
            name="quote-input"
            v-model="quoteText"
            placeholder="Add your quote here..."
        ></textarea>
        <br />
        <button class="btn btn-primary" @click="addQuote">Add Quote</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quoteText: ''
        };
    },
    methods: {
        addQuote() {
            if (this.quoteText === '') {
                return;
            }
            this.$emit('quote-added', this.quoteText);
            this.quoteText = '';
        }
    }
};
</script>

<style lang="scss" scoped>
#input-container {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    padding-top: 50px;

    h3 {
        text-align: left;
    }

    textarea {
        border-radius: 10px;
        margin-bottom: 10px;
        width: 100%;
    }

    button {
        font-size: larger;
        font-weight: bold;
    }
}
</style>
