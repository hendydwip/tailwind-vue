<template lang="pug">
div.h-screen
    div
      Head(v-bind:test = "state" ref="hilang")
    div(@click="setState")
       router-view
    Footer
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Head from './components/template1/head.vue'
import Body from './components/template1/body.vue'
import Footer from './components/template1/footer.vue'
import "./assets/css/main.css"
//var cek1 = "invisible"
export default {
  name: 'app',
  data(){
    return{
    state: "invisible"
    }
  },
  components: {
    Head,
    Body,
    Footer
  },
  methods: {
      setState: function(){
        this.$refs.hilang.disable()
      }
  }
}


</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.App{
height:100%;
}
</style>
