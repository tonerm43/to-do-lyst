<template>
  <div class="todo-item" v-bind:class="{ 'completed': todo.completed }">
    <p>
      <input type="checkbox" v-on:change="toggleComplete" v-bind:checked="todo.completed">
      {{ todo.description }}
      <button @click="$emit('del-todo', todo._id)" class="del">x</button>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "TodoItem",
  props: {todo: {
    type: Object,
    required: true
  }},
  methods: {
    toggleComplete() {
      this.todo.completed = !this.todo.completed;
      axios
        .post('http://localhost:3000/items/update/' + this.todo._id)
        .then(function (response) {
          // eslint-disable-next-line no-console
          console.log(response);
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.completed {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>$props
