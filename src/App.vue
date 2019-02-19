<template lang="pug">
div.h-screen
    div
      Head
      router-view
      Footer
      div.w-full.h-auto.fixed.pin-b.z-30.mx-auto.text-white.text-xs.h-3
        div(class="xl:w-2/3 w-4/5" @click.stop="is_shown_promo = !is_shown").py-3.px-2.bg-blue-dark.mx-auto.justify-center.flex.cursor-pointer Text Promo this Month
      //-viewer image
      div.z-40.fixed.pin.h-full.w-full(v-if='is_shown_promo').justify-center.flex.bg-smoke-darker
        router-link(to="/about").m-auto.flex.h-auto.w-auto.cursor-pointer
          img(src="https://via.placeholder.com/600x800?text=Promo About")
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
    is_shown_promo: false
    }
  },
  components: {
    Head,
    Body,
    Footer
  },
  mounted(){
    let _self = this
    document.body.addEventListener('click', function(){
      if(_self.is_shown_promo == true)
        _self.is_shown_promo = false
    })
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
