<template>
  <div>
    <h2>My Child Popup Component prop: </h2>
    <p>Popup</p>
    <input type="text" v-model="msg">
    <button @click="$emit('closepopup',msg)" >Close Popup</button>
  </div>
</template>

<script >
export default {
  name: "mychildpopup",
//   emits: ['closepopup'],
emits:{
    closepopup: (msg)=>{
                if (!msg)
                {
                    return false
                 }
                else
                {
                    return true
                } 
                     }
  
},
  data(){
    return{
      msg:''
    }
  }


}
</script>

<style scoped>
</style>
