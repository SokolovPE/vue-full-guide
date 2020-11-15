<template>
    <div>
        <h1>The User Page</h1>
        <hr />
        <!-- This is how it's done by button with handler. -->
        <button class="btn btn-primary" @click="navigateToHome">
            Go to Home
        </button>
        <hr />
        <!-- This is how it's dont by router-link. -->
        <router-link to="/" tag="button" class="btn btn-primary"
            >Go to home too</router-link
        >
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push('/');
        }
    }
};
</script>
