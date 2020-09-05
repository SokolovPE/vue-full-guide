<template>
    <div>
        <div class="form-group">
            <label for="first-name">First Name</label>
            <input
                type="text"
                class="form-control"
                name="first-name"
                id="first-name"
                aria-describedby="first-name-help"
                placeholder="John"
                :value="firstName"
                @input="nameChanged"
            />
            <small id="first-name-help" class="form-text text-muted"
                >Input your First Name</small
            >
        </div>

        <div class="form-group">
            <label for="last-fname">Last Name</label>
            <input
                type="text"
                class="form-control"
                name="last-name"
                id="last-name"
                aria-describedby="last-name-help"
                placeholder="Doe"
                :value="lastName"
                @input="nameChanged"
            />
            <small id="last-name-help" class="form-text text-muted"
                >Input your Last Name</small
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String
        }
    },
    data() {
        return {
            initValue: ''
        };
    },
    methods: {
        nameChanged(event) {
            if (event.target.id == 'first-name') {
                this.initValue = `${event.target.value} ${this.lastName}`;
            } else {
                this.initValue = `${this.firstName} ${event.target.value}`;
            }
            this.$emit('input', this.initValue.trim());
        }
    },
    computed: {
        firstName() {
            return this.initValue.split(' ')[0] ?? '';
        },
        lastName() {
            return this.initValue.split(' ')[1] ?? '';
        }
    },
    mounted() {
        this.initValue = this.value;
    }
};
</script>

<style lang="scss" scoped></style>
