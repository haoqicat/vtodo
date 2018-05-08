<template>
  <div id="app">
    <div class="card">
      <Todo />
    </div>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'app',
  components: {
    Todo
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  height: 100vh;
  background-color: $primary-pink;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.card {
  background-color: #fff;
  height: 400px;
  width: 400px;
  margin: 0 auto;
  padding: 20px;
}
</style>
