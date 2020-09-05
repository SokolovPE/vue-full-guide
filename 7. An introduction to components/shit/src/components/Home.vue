<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header-comp></header-comp>
            </div>
        </div>
        <hr />
        <server-dashboard></server-dashboard>
        <hr />
        <div class="row">
            <div class="col-xs-12">
                <footer-comp></footer-comp>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import ServerDashboard from './ServerDashboard.vue';
import Footer from './Footer.vue';

export default {
    components: {
        'header-comp': Header,
        'server-dashboard': ServerDashboard,
        'footer-comp': Footer
    }
};
</script>
