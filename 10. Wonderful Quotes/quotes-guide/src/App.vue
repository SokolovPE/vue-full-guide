<template>
    <div class="container">
        <quote-header :quoteCount="quotes.length" :maxQuotes="maxQuotes" />
        <new-quote @quote-added="newQuote" />
        <quote-grid :quotes="quotes" @quote-deleted="deleteQuote" />
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a Quote to delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from '@/components/QuoteGrid.vue';
import NewQuote from '@/components/NewQuote.vue';
import Header from '@/components/Header.vue';
export default {
    data() {
        return {
            quotes: ['Just a quote to see something!'],
            maxQuotes: 10
        };
    },
    methods: {
        newQuote(quote) {
            if (this.quotes.length >= this.maxQuotes) {
                return alert('Please delete quotes first!');
            }
            if (quote == '') {
                return;
            }
            this.quotes.push(quote);
        },
        deleteQuote(index) {
            this.quotes.splice(index, 1);
        }
    },
    components: {
        'quote-grid': QuoteGrid,
        'new-quote': NewQuote,
        'quote-header': Header
    }
};
</script>

<style></style>
