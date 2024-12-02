<template>
  <div>
    <h2>My Child Component prop: {{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "mychild",
  props:{
    name: String
  }
}
</script>

<style scoped>
</style>
