<template>
  <div class="wrap" >
    <div v-bind:key="todo.id" v-for="todo in filteredTodos">
      <div @click="close(todo.id)" class="todo">
        {{ todo.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  methods: {
    close(id) {
      console.log('id', id)
    }
  },
  computed: {
    filteredTodos() {
      return this.todos
    }
  },
  data: () => ({
    seen: false,
    msg: 'click',
    todos: [
      {
        id: '1',
        text: '第一项'
      },
      {
        id: '2',
        text: '第二项'
      }
    ]
  })
}
</script>

<style>
.todo {
  line-height: 1.9;
  border: 2px solid lightcoral;
  margin: 5px;
}
</style>
