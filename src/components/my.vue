<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>Some text in a paragraph.</p>
    <button @click="storeCheck">Store Check Button</button>
    <h2>Checking store data <span v-bind:class="k">{{ aphaupdater}}</span></h2>
  </div>
  <div>
    <h2>---------------------------------------</h2>
    <h2>Volume Tracker</h2> 
    <h3>Cureent volume {{ volume }} </h3>
    <button @click="volume++">Increase volume</button>
    <h4>--</h4>
    <button @click="volume--">Decrease volume</button>
    <h2>---------------------------------------</h2>
  </div>
  <div>
    <h2>---------------------------------------</h2>
    <h2>Volume System increaser </h2> 
    
    <button @click="cuv">Increase Ssss volume</button>
    <h4>--</h4>
 <button @click="suv">Decrease  ssss volume</button>
    <h2>---------------------------------------</h2>
  </div>

  <div >
   <h2>----------Props Making the Test----------</h2>
   <mychild name="king "></mychild>
   <h2>-----------------------------------------</h2>
   <!-- <mychildpopup v-show="showPopup" @closepopup="showPopup=false " /> -->
   <mychildpopup v-show="showPopup" @closepopup="clobabu " />
   <button @click="showPopup = !showPopup" >Toggle Popup</button>
   
  </div>
  <div>
    <h2>---------------------------------------</h2>
    <h2>Slot Making the Test----------</h2>
    <SlotParent></SlotParent>
    <h2>-----------------------------------------</h2>
  </div> 
</template>

<script>
// import {loudness} from 'loudness';
import mychild from "./mychild.vue";
import SlotParent from "./SlotParent.vue";
import mychildpopup from "./mychildpopup.vue";
export default {
  components: {
    mychild,
    mychildpopup,
    SlotParent
  },

  
  data() {
    return {
      msg: "my component!",
      k:'red',
      volume:0,
      showPopup: false

    };
  },
    methods: {
    storeCheck() {
        this.$store.dispatch("actionMethod");
    },
    clobabu(){
      this.showPopup=false
    }
//     cuv(){
//  loudness.getVolume().then((volume) => {
//        console.log(`Current system volume: ${volume}%`);
// });

//     },
//     suv(){
//       loudness.setVolume(75).then(() => {
//   console.log('Volume set to 75%');
// });
    },

computed:{
    aphaupdater(){
        return this.$store.state.test;  
    }
},
watch:{
    volume(currentu){
      if (currentu===16)
      {
        alert('volume too high')
      }
      
    }
}
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
.red{
    color:red;
}
</style>
