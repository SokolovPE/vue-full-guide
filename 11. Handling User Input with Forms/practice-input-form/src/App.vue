<template>
    <div class="container">
        <form v-if="!formWasSubmitted">
            <div class="row">
                <div
                    class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
                >
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <full-name v-model="userData.fullName" />
                    <!-- Mail -->
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input
                            type="text"
                            class="form-control"
                            name="email"
                            id="email"
                            aria-describedby="email-help"
                            placeholder="johndoe@microsoft.com"
                            v-model="userData.email"
                        />
                        <small id="email-help" class="form-text text-muted"
                            >Your e-mail address</small
                        >
                    </div>
                    <!-- Password -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            name="password"
                            id="password"
                            aria-describedby="passwordhelp"
                            v-model="userData.password"
                        />
                        <small id="passwordhelp" class="form-text text-muted"
                            >Your amazing password</small
                        >
                    </div>
                    <!-- Store Data? Yes/No -->
                    <label>Store Data?</label>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input
                                type="radio"
                                class="form-check-input"
                                name="store-data"
                                id="store-data"
                                value="Yes"
                                v-model="userData.store"
                            />
                            Yes
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input
                                type="radio"
                                class="form-check-input"
                                name="no-store-data"
                                id="no-store-data"
                                value="No"
                                v-model="userData.store"
                            />
                            No
                        </label>
                    </div>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <div class="row">
                        <button
                            class="btn btn-primary"
                            @click.prevent="formWasSubmitted = true"
                        >
                            Submit
                        </button>
                    </div>
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr />
        <div class="row" v-if="formWasSubmitted" v-once>
            <div
                class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
            >
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ userData.store }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from '@/components/FullName.vue';
export default {
    data() {
        return {
            userData: {
                fullName: '',
                email: '',
                password: '',
                store: 'No'
            },
            formWasSubmitted: false
        };
    },
    components: {
        'full-name': FullName
    }
};
</script>

<style></style>
