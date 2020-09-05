<template>
    <div>
        <quote-progress :currentCount="quotes.length" :maxCount="quoteLimit" />
        <quote-input @quote-added="quoteAdded" />
        <quote-list :quotes="quotes" />
        <quote-footer>
            <div id="quote-hint" class="bg-success">
                <p>Info: Click on a Quote to delete it</p>
            </div>
        </quote-footer>
    </div>
</template>

<script>
import QuoteProgress from '@/components/QuoteProgress.vue';
import QuoteInput from '@/components/QuoteInput.vue';
import QuoteFooter from '@/components/QuoteFooter.vue';

import QuoteList from '@/components/QuoteList.vue';

export default {
    data() {
        return {
            quotes: [{ id: 0, text: 'Amazing quote' }],
            quoteLimit: 10
        };
    },
    methods: {
        quoteAdded(data) {
            if (this.quotes.length >= this.quoteLimit) {
                alert("You've reached maximum amount of quotes!");
                return;
            }
            this.quotes.push({ id: this.quotes.length, text: data });
        }
    },
    components: {
        'quote-progress': QuoteProgress,
        'quote-input': QuoteInput,
        'quote-footer': QuoteFooter,
        'quote-list': QuoteList
    }
};
</script>

<style lang="scss" coped>
#quote-hint {
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: center;
    p {
        height: 20%;
    }
}
</style>
