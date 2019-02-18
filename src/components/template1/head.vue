<template lang="pug">
div.sticky.pin-t.z-40
    //- div untuk hide sidebar
    div
        //- div untuk menempatkan exit button
        div.fixed.z-10.justify-center.flex
        Sidebar(v-if='sidebar_is_shown')
    div.flex.flex-row.bg-teal-lightest.justify-center.w-screen.h-auto
        span(@click.stop="sidebar_is_shown = !sidebar_is_shown" class="hover:bg-blue-dark").cursor-pointer.px-4.py-2.m-2.bg-blue.rounded.no-underline.text-white M
        router-link(to="/content1" class="hover:bg-blue-dark").px-4.py-2.m-2.bg-blue.rounded.no-underline.text-white Content
        router-link(to="/about" class="hover:bg-blue-dark").px-4.py-2.m-2.bg-blue.rounded.no-underline.text-white About
</template>

<script>
import Sidebar from '../../components/template1/sidebar.vue'
export default {
  components: {
    Sidebar
  },
  data(){
    return{
      cek:'visible',
      sidebar_is_shown: false,
      }
  }
  ,
  mounted(){
    let _self = this
    document.body.addEventListener('click', function(){
      if(_self.sidebar_is_shown == true)
        _self.sidebar_is_shown = false
    })
  }
}
</script>

