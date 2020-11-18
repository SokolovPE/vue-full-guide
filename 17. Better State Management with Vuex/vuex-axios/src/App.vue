<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <ul>
            <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
        </ul>
        <hr />
        <div>
            <input id="new-todo" type="text" v-model="newTodo" />
            <button class="btn btn-primary" @click="pushTodo">
                Add a new Todo
            </button>
            <button class="btn btn-primary" @click="removeTodo(todos[0])">
                Pop Todo
            </button>
        </div>
        <!-- <button class="btn btn-primary" @click="setTodos(todos)">
            Save changes
        </button> -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'App',
    data() {
        return {
            newTodo: ''
        };
    },
    computed: {
        ...mapGetters('todo', { todos: 'getTodos' })
    },
    methods: {
        ...mapActions('todo', [
            'setTodos',
            'fetchTodos',
            'addTodo',
            'removeTodo'
        ]),
        pushTodo() {
            this.addTodo(this.newTodo).then(() => {
                this.newTodo = '';
            });
        }
    },
    mounted() {
        this.fetchTodos();
    }
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
