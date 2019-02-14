<template lang="pug">
div.sticky.pin-t
    //- div untuk hide sidebar
    div#asd(class="invisible")
        //- div untuk menempatkan exit button
        div.fixed.z-10.justify-center.flex.absolute
            span.justify-center.flex.block.p-2.text-grey-darker.font-bold.border-grey-lighter.rounded-full.w-8.h-8.cursor-pointer(class= "hover:border-purple-light hover:bg-red-light" v-on:click="iniFunction()") X
        Sidebar
    div.flex.flex-row.bg-teal-lightest.justify-center.w-screen.h-auto
        span(@click="iniFunction()" class="hover:bg-blue-dark").cursor-pointer.px-4.py-2.m-2.bg-blue.rounded.no-underline.text-white M
        router-link(to="/content1" class="hover:bg-blue-dark").px-4.py-2.m-2.bg-blue.rounded.no-underline.text-white Content
        router-link(to="/about" class="hover:bg-blue-dark").px-4.py-2.m-2.bg-blue.rounded.no-underline.text-white About
</template>

<script>
import Sidebar from '../../components/template1/sidebar.vue'
export default {
  props:['test'],
  components: {
    Sidebar
  },

  methods: {
      iniFunction: function(){
        showHide();
      }
  }
}

var showHide = function() {
    var cek = document.getElementById("asd").className
    alert(cek)
    if(cek == "invisible"){
        document.getElementById("asd").className = "visible"
    }else{
        document.getElementById("asd").className = "invisible"
    }
}


</script>

