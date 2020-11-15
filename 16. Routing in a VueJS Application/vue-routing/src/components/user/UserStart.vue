<template>
    <div>
        <p>Please select a User</p>
        <hr />
        <ul class="list-group">
            <router-link
                class="list-group-item"
                style="cursor: pointer"
                v-for="user in users"
                :key="user.id"
                :to="'/user/' + user.id"
                tag="li"
                >User {{ user.id }}</router-link
            >
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                { id: 1, name: 'User 1' },
                { id: 2, name: 'User 2' },
                { id: 3, name: 'User 3' }
            ]
        };
    }
};
</script>
