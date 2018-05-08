<template>
  <div class="todo-wrap">
    <div class="header-wrap">
      <Header />
    </div>
    <div class="main">
      <TodoList :todos="todos" />
    </div>
    <div class="bottom">
      <Form />
      <Actions />
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Form from './Form'

import TodoList from './TodoList'
import Actions from './Actions'
export default {
  name: 'Todo',
  data: () => ({
    todos: [
      {
        id: '1',
        body: '遛狗',
        compl: false
      },
      {
        id: '2',
        body: '吃饭',
        compl: true
      },
      {
        id: '3',
        body: '再次吃饭',
        compl: false
      }
    ]
  }),
  components: {
    Header,
    TodoList,
    Form,
    Actions
  }
}
</script>

<style lang="scss">
.todo-wrap {
  display: flex;
  flex-direction: column;
  min-height: 350px;
  .main {
    flex-grow: 1;
  }
}
</style>
