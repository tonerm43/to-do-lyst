<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem :todo="todo" v-on:del-todo="$emit('del-todo', todo._id)"/>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props: ["todos"],
}
</script>

<style scoped>

</style>
