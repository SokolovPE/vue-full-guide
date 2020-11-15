<template>
    <div>
        <h1>The User Page</h1>
        <router-view></router-view>
        <br />
        <!-- This is how it's done by button with handler. -->
        <button class="btn btn-primary" @click="navigateToHome">
            Go to Home
        </button>
        <!-- This is how it's dont by router-link. -->
        <router-link
            :to="{ name: 'home' }"
            tag="button"
            class="btn btn-primary"
            style="margin-left: 10px"
            >Go to home too</router-link
        >
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push({ name: 'home' });
        }
    }
};
</script>
