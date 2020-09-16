<template>
    <div>
        <h1>Filters & Mixins</h1>
        <hr />
        <input v-model="filterText" />
        <ul>
            <li v-for="(fruit, index) in filteredFruits" :key="index">
                {{ fruit }}
            </li>
        </ul>
    </div>
</template>

<script>
import { fruitMixin } from '@/mixins/fruitMixin';
export default {
    mixins: [fruitMixin],
    created() {
        console.log('Inside List created hook');
    }
};
</script>

<style></style>
