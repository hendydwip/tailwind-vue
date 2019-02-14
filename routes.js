import Body from './src/components/template1/body.vue'
import Content1 from './src/components/template1/content1.vue'
import About from './src/components/template1/about.vue'

export default[
    {
        path: '/',
        component:Body
    },
    {
        path: '/content1',
        component:Content1
    },
    {
        path: '/about',
        component:About
    },

]