<template>
    <div class="container">
        <div class="row">
            <div
                class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
            >
                <h1>Filters & Mixins</h1>
                <h2>Filters:</h2>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{ text | reverse }}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ text | appendLength }}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <hr />
                <h2>Computed:</h2>
                <p>{{ reverseComp }}</p>
                <p>{{ appendLengthComp }}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <hr />
                <h2>Mixin:</h2>
                <p>{{ mixinReverseComp }}</p>
                <p>{{ mixinAppendLengthComp }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { stringMixin } from '@/mixins/stringMixin';
export default {
    data() {
        return {
            text: 'Some text to reverse!'
        };
    },
    computed: {
        reverseComp() {
            return this.text
                .split('')
                .reverse()
                .join('');
        },
        appendLengthComp() {
            return `${this.text} (${this.text.length})`;
        }
    },
    filters: {
        reverse: function(value) {
            return value
                .split('')
                .reverse()
                .join('');
        }
    },
    mixins: [stringMixin]
};
</script>

<style></style>
