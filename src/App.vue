<template lang="pug">
div.h-screen
    div
      Head
      router-view
      Footer
      div.w-full.h-auto.fixed.pin-b.z-40.mx-auto.text-white.text-xs.h-3
        div(class="xl:w-2/3 w-4/5").py-3.px-2.bg-blue-dark.mx-auto.justify-center.flex Text Promo this Month
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
