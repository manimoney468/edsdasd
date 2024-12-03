<template>
    <div>
      <SlotChild>
        <!-- Header Slot -->
        <template v-slot:header="slotProps" >
          <h1>Header: {{ slotProps.nam }} (Age: {{ slotProps.age }})</h1>
        </template>
  
        
        <template v-slot:content="slotProps">
          <h1>Hello, {{ slotProps.nam }}! Content slot is being used!</h1>
        </template>
   
       
        <template v-slot:footer="slotProps" >
          <h1>Goodbye, {{ slotProps.nam }}! Footer slot is being used!</h1>
        </template> 
      </SlotChild>
    </div>
  </template>
  
  <script>
  import SlotChild from './SlotChild.vue';
  
  export default {
    components: {
      SlotChild,
    },
    data() {
      return {
        foo: 'foo',
        bar: 'bar',
      };
    },
  };
  </script>