<template>
    <div class="row">
        <quote
            v-for="(quote, index) in quotes"
            :key="index"
            @click.native="deleteQuote(index)"
        >
            {{ quote }}
        </quote>
    </div>
</template>

<script>
import Quote from '@/components/Quote.vue';
export default {
    props: {
        quotes: {
            type: Array
        }
    },
    methods: {
        deleteQuote(index) {
            this.$emit('quote-deleted', index);
        }
    },
    components: {
        quote: Quote
    }
};
</script>

<style lang="scss" scoped></style>
