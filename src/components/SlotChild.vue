<template>
    <div>
      <div v-for="(person, index) in names" :key="index">
        <!-- Header Slot with Scoped Props -->
        <div>
          <slot name="header" :pname="person.name" :age="person.age"></slot>
        </div>
  
        <!-- Content Slot -->
        <div>
          <slot name="content" :pname="person.name"></slot>
        </div>
  
        <!-- Footer Slot -->
        <div>
          <slot name="footer" :pname="person.name"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SlotChild",
    data() {
      return {
        names: [
          { name: "Bruce", age: 30 },
          { name: "Clark", age: 25 },
          { name: "Diana", age: 28 }
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  div {
    border: 2px solid black;
    padding: 10px;
    margin: 10px;
  }
  </style>