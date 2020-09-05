<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <p>Name is {{ name }}</p>
        <hr />
        <h2>Event approach</h2>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                    :my-name="name"
                    @name-was-reset="name = $event"
                    :reset-fn="resetName"
                    :user-age="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :user-age="age"
                    @age-was-edited="age = $event"
                ></app-user-edit>
            </div>
        </div>
        <hr />
        <h2>Event bus approach</h2>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail-bused />
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit-bused />
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';
import UserDetailBused from './UserDetailBused.vue';
import UserEditBused from './UserEditBused.vue';

export default {
    data() {
        return {
            name: 'Azis',
            age: 25
        };
    },
    methods: {
        changeName() {
            this.name = 'Puppy';
        },
        resetName() {
            this.name = 'Azis';
        }
    },
    components: {
        appUserDetail: UserDetail,
        appUserEdit: UserEdit,
        appUserDetailBused: UserDetailBused,
        appUserEditBused: UserEditBused
    }
};
</script>

<style scoped>
div {
    background-color: lightblue;
}
</style>
