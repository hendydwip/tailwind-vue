<template lang="pug">
    div(class="lg:flex-row md:flex-col sm:flex-col lg:w-2/3").flex-col.h-auto.flex.mx-auto
            div(class="lg:w-4/5 lg:text-blue md:w-3/4 md:text-blue sm:w-full sm:text-red").text-teal.flex-wrap.px-2.py-2.mx-auto.flex
                div.px-2.py-2.mb-2.rounded.bg-green-lighter(v-for="n in 2")
                    div
                        h1.font-semibold Ini Content {{n}}
                    div(style="border-style:double;").border-b-4.w-full.flex.flex-row.mb-2.pb-1.border-black
                        div(class="w-1/2").flex.flex-col.justify-start
                            span Created by&nbsp;
                            span Test
                        div(class="w-1/2").justify-end.flex
                            div.flex-col.flex
                                span.pb-1.text-sm {{ new Date().getDate()+n }}/{{ new Date().getMonth()+1 }}/{{ new Date().getFullYear() }}
                                div.flex.justify-end
                                    img(src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png").w-5.h-5.rounded-full.mx-1
                                    img(src="https://pbs.twimg.com/profile_images/1092100446586630146/3uFY0wpD_400x400.jpg").w-5.h-5.rounded-full.mx-1
                    div.justify-center.items-center.flex.mb-2
                        img(src="https://via.placeholder.com/150")
                    p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    p Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.            
            
            div(class="lg:w-1/4 lg:text-blue md:w-3/4 md:text-blue sm:w-full sm:text-red md:border-t-0" style="border-style:double;").border-t-4.mx-auto.text-teal.flex-wrap.flex-col.py-2.px-2.flex
                div.h-64.overflow-y-auto.rounded.mb-2(v-for="n in 5")
                    div.px-2.py-2.mb-2.rounded.bg-green-lighter(v-for="n in 3")
                        div
                        h1.font-semibold Ini Content {{n}}
                        div(style="border-style:double;").border-b-4.w-full.flex.flex-row.mb-2.pb-1.border-black
                            div(class="w-1/2").flex.flex-col.justify-start
                                span Created by&nbsp;
                                span Test
                            div(class="w-1/2").justify-end.flex
                                div.flex-col.flex
                                    span.pb-1.text-sm {{ new Date().getDate() }}/{{ new Date().getMonth()+1 }}/{{ new Date().getFullYear() }}
                                    div.flex.justify-end
                                        img(src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png").w-5.h-5.rounded-full.mx-1
                                        img(src="https://pbs.twimg.com/profile_images/1092100446586630146/3uFY0wpD_400x400.jpg").w-5.h-5.rounded-full.mx-1
                        div.justify-center.items-center.flex.mb-2
                            img(src="https://via.placeholder.com/150")
                        p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        p Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                
                    
</template>

