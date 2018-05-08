<template>
  <div class="wrap">
    <input />
    <button>+</button>
  </div>
</template>

<script>
export default {
  name: 'Form'
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.wrap {
  margin-bottom: 10px;
  display: flex;
  input {
    line-height: 1.8;
    font-size: 17px;
    flex-grow: 1;
    padding-left: 5px;
    border: 2px solid $accent-blue;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 0;
    background-color: $accent-dark;
    color: white;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.7);
    transform: scale(2);
    font-size: 20px;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
