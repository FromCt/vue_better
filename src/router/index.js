import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Example from '@/pages/examples'
import SlidePage from "@/pages/slidePage"
import ScrollPage from "@/pages/ScrollPage"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Example',
      component: Example,
    },
    {
      path: '/example',
      name: 'Example',
      component: Example,
      children:[
        {
          path:"slide/:name",
          component:SlidePage
        },{
          path:"scrollpage",
          component:ScrollPage
        }
      ]
    },
    {
      path:'/HelloWorld',
      name:'HelloWorld',
      component:HelloWorld
    }
  ]
})
