<template>
    <div class="container">
        <div class="row">
            <div
                class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
            >
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUpperCase | toLowerCase }}</p>
                <hr />
                <input v-model="filterText" />
                <ul>
                    <li v-for="(fruit, index) in filteredFruits" :key="index">
                        {{ fruit }}
                    </li>
                </ul>
                <hr />
                <list-comp />
            </div>
        </div>
    </div>
</template>

<script>
import List from '@/components/List.vue';
import { fruitMixin } from '@/mixins/fruitMixin';
export default {
    data() {
        return {
            text: 'Hello there!'
        };
    },
    filters: {
        toUpperCase(value) {
            return value.toUpperCase();
        }
    },
    components: {
        'list-comp': List
    },
    mixins: [fruitMixin]
};
</script>

<style></style>
