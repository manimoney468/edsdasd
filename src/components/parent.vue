<template>
  <div>
    <h1>Parent Component msg2: {{ msg2 }}</h1>
    <child msg="From Parent Component" :msg2="msg2" ></child>
  </div>
</template>

<script>
import Child from './child.vue'

export default {
  components: {
    Child
  },
  data() {
    return {
        msg2: 'hello this msg2 prop from parent component',
    }
  },
  methods: {    
  }
}
</script>
