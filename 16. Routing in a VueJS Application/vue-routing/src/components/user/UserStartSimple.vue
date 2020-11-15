<template>
    <div>
        <p>Please select a User</p>
        <hr />
        <ul class="list-group">
            <router-link
                class="list-group-item"
                style="cursor: pointer"
                to="/user/1"
                tag="li"
                >User {{ user.id }}</router-link
            >
            <router-link
                class="list-group-item"
                style="cursor: pointer"
                to="/user/2"
                tag="li"
                >User 2</router-link
            >
            <router-link
                class="list-group-item"
                style="cursor: pointer"
                to="/user/3"
                tag="li"
                >User 3</router-link
            >
        </ul>
    </div>
</template>
