<template>
  <div id="app">
    <h1>To-Do Lyst</h1>
    <TodoList :todos="todos"/>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";

export default {
  name: 'app',
  components: {
    TodoList
  },
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/items/') //TODO: Add the real URL here
      .then(response => response.json())
      .then((data) => {
        this.todos = data;
      });
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
  margin-top: 60px;
}
</style>
