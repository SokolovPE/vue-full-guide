<template>
    <div id="app">
        <quote-container />
    </div>
</template>

<script>
import QuoteContainer from '@/components/QuoteContainer.vue';
export default {
    name: 'App',
    components: {
        'quote-container': QuoteContainer
    }
};
</script>

<style scoped>
#app {
    margin-left: 10%;
    margin-right: 10%;
    font-family: 'CiscoSansTT', 'Noto Sans';
}
</style>
