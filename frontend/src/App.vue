<template>
  <div id="app">
    <h1>To-Do Lyst</h1>
    <CreateTodo v-on:create-todo="createTodo" />
    <TodoList :todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import axios from 'axios';

export default {
  name: 'app',
  components: {
    CreateTodo,
    TodoList
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo._id !== id);
      axios
        .delete('http://localhost:3000/items/delete/' + id)
        .then(function (response) {
          // eslint-disable-next-line no-console
          console.log(response);
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
    createTodo(todo) {
      this.todos = [...this.todos, todo];
      axios
        .post('http://localhost:3000/items/add', todo)
        .then(function (response) {
            // eslint-disable-next-line no-console
          console.log(response);
        })
        .catch(function (error) {
            // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/items/')
      .then(response => (this.todos = response.data));
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
