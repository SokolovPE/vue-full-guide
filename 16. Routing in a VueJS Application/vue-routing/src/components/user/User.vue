<template>
    <div>
        <h1>The User Page</h1>
        <hr />
        <p>Loaded ID: {{ id }}</p>
        <!-- This is how it's done by button with handler. -->
        <button class="btn btn-primary" @click="navigateToHome">
            Go to Home
        </button>
        <hr />
        <!-- This is how it's dont by router-link. -->
        <router-link to="/" tag="button" class="btn btn-primary"
            >Go to home too</router-link
        >
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number
        }
    },
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     };
    // },
    // watch: {
    //     $route(to) {
    //         this.id = to.params.id;
    //     }
    // },
    methods: {
        navigateToHome() {
            this.$router.push('/');
        }
    }
};
</script>
