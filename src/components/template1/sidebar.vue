<template lang="pug">
div#test.bg-teal.shadow.w-64.fixed.pin-t
 div.p-t.overflow-y-auto.max-h-screen.rounded
  ul.list-reset
    li.mt-12
        div
          router-link(to="/" class="hover:border-purple-light hover:bg-grey-lighter").block.p-4.text-grey-darker.font-bold.border-grey-lighter.no-underline Home
        div.px-2
          ul.list-reset
              li
                router-link(to="/" class="hover:border-purple-light hover:bg-grey-lighter").block.p-4.text-grey-darker.font-bold.border-grey-lighter.justify-center.flex.no-underline Sub Home
              li
                router-link(to="/content1" class="hover:border-purple-light hover:bg-grey-lighter").block.p-4.text-grey-darker.font-bold.border-grey-lighter.justify-center.flex.no-underline Sub Content
              li
                router-link(to="/about" class="hover:border-purple-light hover:bg-grey-lighter").block.p-4.text-grey-darker.font-bold.border-grey-lighter.justify-center.flex.no-underline Sub About
    li
      router-link(to="/content1" class="hover:border-purple-light hover:bg-grey-lighter").block.p-4.text-grey-darker.font-bold.border-grey-lighter.no-underline Content
    li
      router-link(to="/about" class="hover:border-purple-light hover:bg-grey-lighter").block.p-4.text-grey-darker.font-bold.border-grey-lighter.no-underline About
</template>

<script>
export default {

}
</script>
