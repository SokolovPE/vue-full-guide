<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link tag="button" class="btn btn-primary" :to="link"
            >Edit User</router-link
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: {
                name: 'userEdit',
                params: { id: this.$route.params.id },
                query: { locale: 'en', q: 100 },
                hash: '#data'
            }
        };
    },
    beforeRouteEnter(to, from, next) {
        console.log('Component beforeRouteEnter');
        //! We can't access any property from data here, because component wasn't created yet.
        //* If we call next we finally load this component.
        next();
    }
};
</script>
