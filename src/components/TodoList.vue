<template>
  <div class="wrap">
    List
    <div class="primary">
      Primary
    </div>
    <div class="accent">
      Accent
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList'
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
.wrap {
  border: 2px solid lightblue;
  .primary {
    color: $primary-color;
  }
}
</style>
