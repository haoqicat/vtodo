<template>
  <div class="wrap">
    <Header />
    <TodoList />
    <Form />
    <Actions />
  </div>
</template>

<script>
import Header from './Header'
import Form from './Form'

import TodoList from './TodoList'
import Actions from './Actions'
export default {
  name: 'Todo',
  components: {
    Header,
    TodoList,
    Form,
    Actions
  }
}
</script>
