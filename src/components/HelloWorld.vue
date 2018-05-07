<template>
  <div class="hello" v-bind:title="msg" >
    {{ msg }}
    <div v-if="seen">
      你能看到我吗？
    </div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      {{ todo.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    seen: false,
    msg: 'Helle Everyone',
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
