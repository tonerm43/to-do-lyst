<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <p>{{ todo.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: ["todos"]
}
</script>

<style scoped>

</style>
