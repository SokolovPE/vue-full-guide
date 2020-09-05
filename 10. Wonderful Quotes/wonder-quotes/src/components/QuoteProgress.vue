<template>
    <div>
        <h2>Quotes Added</h2>
        <div class="pb-outer">
            <div class="pb-inner bg-primary" :style="{ width: `${progress}%` }">
                {{ currentCount }} / {{ maxCount }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentCount: {
            type: Number,
            default: 0
        },
        maxCount: {
            type: Number,
            default: 1
        }
    },
    computed: {
        progress() {
            if (this.maxCount == 0) {
                return 0;
            }
            return Math.round((this.currentCount / this.maxCount) * 100, 2);
        }
    }
};
</script>

<style lang="scss" scoped>
div {
    border-radius: 5px;
    .pb-outer {
        height: 24px;
        border: 1px solid black;
        background-color: gainsboro;
    }

    .pb-inner {
        text-align: center;
        height: 100%;
    }
}
</style>
