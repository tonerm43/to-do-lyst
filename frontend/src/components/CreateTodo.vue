<template>
  <div>
    <form @submit.prevent="createTodo">
      <input type="text" v-model="description" name="description" placeholder="Add Todo...">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateTodo",
  data() {
    return {
      description: ''
    }
  },
  methods: {
    createTodo() {
      const newTodo = {
        description: this.description,
        completed: false
      };
      // Send up to parent
      this.$emit('create-todo', newTodo);
      this.description = '';
    }
  }
}

</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
}

input[type="submit"] {
  flex: 2;
}
</style>
