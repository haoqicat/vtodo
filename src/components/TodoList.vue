<template>
  <div class="wrap">
    <ul>
      <li :key="todo.id" v-for="todo in todos" :class="{done: todo.compl}" >
        {{ todo.body }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  computed: {
    todos() {
      return this.$store.state.todo.all
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
.wrap {
  ul {
    padding: 0;
  }
  li {
    list-style: none;
    line-height: 1.9;
    margin-bottom: 5px;
  }
  li.done {
    color: lighten(#000, 50%);
    text-decoration: line-through;
  }
}
</style>
