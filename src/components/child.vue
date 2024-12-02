<template>
    <div>
      <h2 v-on:mouseover="changemsg">{{ msg }} {{ msg2 }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      msg: String,
      msg2: String
    },
    data() {
      return {
        localMsg2: this.msg2 // Copy the prop into a data property
      };
    },
    methods: {
      changemsg() {
        this.localMsg2 = "changed msg"; // Update the local data property
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  