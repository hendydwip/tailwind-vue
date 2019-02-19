<template lang="pug">
div(class="lg:w-4/5 lg:text-blue md:w-3/4 md:text-blue sm:w-full sm:text-red").px-2.mx-auto.min-h-screen.flex
    div.flex-col.w-full.text-white.mx-auto.justify-start.flex
        div.rounded.flex.w-full.mx-auto.bg-blue.px-2.py-2.my-2.flex-wrap(v-for="n in 3")
            div.w-full
                h1.font-semibold About {{n}}
                div.border-b-2.w-full.mb-2
                    span Created on &nbsp;
                    span 22/22/2019
                div
                    p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        div.rounded.flex.w-full.mx-auto.bg-blue.px-2.py-2.my-2.flex-col
            div.flex.w-full.justify-center
                div.justify-center.flex
                    img(@click.stop="is_shown = !is_shown" :src="image+target")
            div.justify-center.w-full.h-64.flex.flex-row.mt-2
                div.overflow-x-auto.flex
                    img(v-for='item in items' @click.stop="target = item" :src="imageEx + item" ).m-2.cursor-pointer
    
    //-viewer image
    div.z-40.fixed.pin.h-full.w-full(v-if='is_shown').justify-center.flex.bg-smoke-darker
        img(:src="image+target").m-auto.flex.h-auto.w-auto         
</template>

<script>
export default {
    data(){
    return{
      is_shown: false,
      image: 'https://via.placeholder.com/600x400?text=',
      target: "Sample Image1",
      imageEx : "https://via.placeholder.com/200x200?text=",
      items:[
          'Sample Image1',
          'Sample Image2',
          'Sample Image3',
          'Sample Image4',
          'Sample Image5',
          'Sample Image6',
          'Sample Image7',
          'Sample Image8',
          'Sample Image9',
      ]
      }
  },
  mounted(){
    let _self = this
    document.body.addEventListener('click', function(){
      if(_self.is_shown == true)
        _self.is_shown = false
    })
  }
}
</script>
