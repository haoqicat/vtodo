<template>
  <div class="hello" v-bind:title="msg" >
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    msg: 'Helle Everyone'
  })
}
</script>
