<template lang="pug">
div(class="lg:w-4/5 lg:text-blue md:w-3/4 md:text-blue sm:w-full sm:text-red").px-2.mx-auto.min-h-screen.flex
    div.flex-col.w-full.text-white.mx-auto.justify-start.flex
        div.rounded.flex.w-full.mx-auto.bg-blue.px-2.py-2.my-2.flex-wrap
            div.w-full
                h1.font-semibold About1
                div.border-b-2.w-full.mb-2
                    span Created on &nbsp;
                    span 22/22/2019
                div
                    p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        div.rounded.flex.w-full.mx-auto.bg-blue.px-2.py-2.my-2.flex-wrap
            div.w-full
                h1.font-semibold About2
                div.border-b-2.w-full.mb-2
                    span Created on &nbsp;
                    span 22/22/2020
                div
                    p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        div.rounded.flex.w-full.mx-auto.bg-blue.px-2.py-2.my-2.flex-col
            div.flex.w-full.justify-center
                div.justify-center.flex
                    img(:src="image+target")
            div.justify-center.w-full.h-64.flex.flex-row.mt-2
                div.overflow-x-auto.flex
                    img(@click.stop="target = 'Image1'" src="https://via.placeholder.com/200x200?text=Image1" ).m-2.cursor-pointer
                    img(@click.stop="target = 'Image2'" src="https://via.placeholder.com/200x200?text=Image2" ).m-2.cursor-pointer
                    img(@click.stop="target = 'Image3'" src="https://via.placeholder.com/200x200?text=Image3" ).m-2.cursor-pointer
                    img(@click.stop="target = 'Image4'" src="https://via.placeholder.com/200x200?text=Image4" ).m-2.cursor-pointer
                    img(@click.stop="target = 'Image5'" src="https://via.placeholder.com/200x200?text=Image5" ).m-2.cursor-pointer
                    img(@click.stop="target = 'Image6'" src="https://via.placeholder.com/200x200?text=Image6" ).m-2.cursor-pointer
                    img(@click.stop="target = 'Image7'" src="https://via.placeholder.com/200x200?text=Image7" ).m-2.cursor-pointer
                    img(@click.stop="target = 'Image8'" src="https://via.placeholder.com/200x200?text=Image8" ).m-2.cursor-pointer
                    img(@click.stop="target = 'Image9'" src="https://via.placeholder.com/200x200?text=Image9" ).m-2.cursor-pointer

                
</template>

<script>
export default {
    data(){
    return{
      image: 'https://via.placeholder.com/600x400?text=',
      target: "Image1"
      }
  }
}
</script>
