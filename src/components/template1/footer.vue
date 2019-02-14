<template lang="pug">
div.bg-teal-lightest.pin-b
    div.flex.flex-col.justify-center.w-screen.mb-0(class="sm:flex-row")
        div.px-4.py-2.m-2.bg-blue.rounded.no-underline.text-white.w-auto.flex-col.flex.justify-start
            span.font-bold Adress
            span.text-xs 5 Main Street WESTERN CENTRAL LONDON WC37 5EK
        div.px-4.py-2.m-2.bg-blue.rounded.no-underline.text-white.w-auto.flex-col.flex.justify-start
            span.font-bold Contact
            div
                span.text-xs Email :&nbsp;
                span.text-xs example@sample.com
            div
                span.text-xs Fax :&nbsp;
                span.text-xs (111) 222 333 444
        div.px-4.py-2.m-2.bg-blue.rounded.no-underline.text-white.w-auto.flex.flex-row.justify-center
            span.font-bold.m-auto Search
            img(src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png" width="25").m-auto
            span &nbsp;
            input(placeholder="Search").rounded.text-xs.px-2.m-auto.h-8
</template>
