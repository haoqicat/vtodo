<template>
  <div class="wrap">
    <div class="primary">
      Primary
    </div>
    <div class="accent">
      Accent
    </div>
    <div class="light">
      Light
    </div>
    <div class="dark">
      Dark
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
  * {
    min-height: 50px;
  }
  .primary {
    background-color: $primary-pink;
  }
  .accent {
    background-color: $accent-blue;
  }
  .light {
    background-color: $accent-light;
  }
  .dark {
    color: white;
    background-color: $accent-dark;
  }
}
</style>
