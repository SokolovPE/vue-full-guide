<template>
    <div>
        <h3>Edit User {{ id }}</h3>
        <p>Locale: {{ locale }}</p>
        <p>Analytics: {{ analytics }} ({{ $route.query.q }})</p>
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
    }
};
</script>
