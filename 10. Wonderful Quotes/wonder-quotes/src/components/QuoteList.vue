<template>
    <div>
        <quote-record
            v-for="quote in quotes"
            :key="quote.id"
            :quote="quote"
            @delete-quote="deleteQuote"
        />
    </div>
</template>

<script>
import QuoteRecord from '@/components/QuoteRecord.vue';

export default {
    props: {
        quotes: {
            type: Array
        }
    },
    methods: {
        deleteQuote(data) {
            this.quotes.splice(this.quotes.indexOf(data), 1);
        }
    },
    components: {
        'quote-record': QuoteRecord
    }
};
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-wrap: wrap;
}
</style>
