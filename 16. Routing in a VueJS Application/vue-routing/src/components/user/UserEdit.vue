<template>
    <div>
        <h3>Edit User {{ id }}</h3>
        <p>Locale: {{ locale }}</p>
        <p>Analytics: {{ analytics }} ({{ $route.query.q }})</p>
        <hr />
        <button class="btn btn-primary" @click="confirmed = true">
            Confirm
        </button>
        <div style="height: 700px"></div>
        <p id="data">Some extra Data</p>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number
        },
        locale: {
            type: String
        },
        analytics: {
            type: Number
        }
    },
    data() {
        return {
            confirmed: false
        };
    },
    beforeRouteLeave(to, from, next) {
        //* In beforeLeave we have access to component's data;
        if (this.confirmed) {
            next();
        } else {
            if (confirm('Are you sure?')) {
                next();
            } else {
                //* Abort the navigation.
                next(false);
            }
        }
    }
};
</script>
