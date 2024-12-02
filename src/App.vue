<template>
  <div>
    <my></my>
    <p>Hello</p>
    <p>{{ name }} age {{ age }}</p>
    <p v-text="job"></p>
    
    <p v-bind:id="idchecking" class="suc">{{ idchecking }}</p>
    <p v-bind:class="ispromotes">heooo</p>
    <p v-bind:class="istrue ? 'pink' : 'suc'">istrue with ternary operators</p>
    <p v-bind:class="istrue && 'pink'">istrue with conditional operator</p>
    
    <input v-model="msg" type="text" />
    <p v-bind:class="ispromotes"><span>{{ msg }}</span></p>
    <p v-bind:class="{ 'pink': istrue, 'rr': !isfalse }">objects only bro</p>

    <!-- Corrected v-for with v-if -->
    <template v-for="name in names" :key="name">
      <h2 v-if="name === 'Bruce'">{{ name }}</h2>
    </template>
   
   <h1 >{{ x }}</h1>
   <button v-on:click="x='helloguru'">hfghhg</button>
   <parent />
  </div>
</template>

<script>


export default {
data() {
    return {
      istrue: true,
      isfalse: false,
      name: "Manish Kenguva",
      age: 2,
      job: "Software Engineer",
      idchecking: "idchecking",
      ispromotes: 'suc',
      msg: '',
      x:'xox',
     
    };
  },
  methods: {
    gett() {
      return this.msg;
    },
    oN() {
      for (let i = 0; i < 10; i++) {
        console.log(i);
      }
    },
    async fetchApi() {
      try {
        let res = await fetch(
          "https://3000-idx-train-1720506073968.cluster-a3grjzek65cxex762e4mwrzl46.cloudworkstations.dev/hello"
        );
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    }
  },
  mounted() {
    console.log("App mounted");
    this.gett();
    this.oN();
    this.fetchApi();
  }
};
</script>

<style>
.rr {
  color: yellow;
}
#idchecking {
  color: red;
}
.suc {
  color: green;
}
.pink {
  color: pink;
}
</style>
