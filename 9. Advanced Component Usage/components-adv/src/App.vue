<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'quote'">Quote</button>
                <button @click="selectedComponent = 'author'">Author</button>
                <button @click="selectedComponent = 'new'">New</button>
                <hr />
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
                <!-- <quote>
                    <h2 slot="title">{{ quoteTitle }}</h2>
                    <p>A wonderful Quote!</p>
                </quote> -->
            </div>
        </div>
    </div>
</template>

<script>
import Quote from '@/components/Quote.vue';
import Author from '@/components/Author.vue';
import New from '@/components/New.vue';
export default {
    data() {
        return {
            quoteTitle: 'The Quote',
            selectedComponent: 'quote'
        };
    },
    components: {
        quote: Quote,
        author: Author,
        new: New
    }
};
</script>

<style></style>
