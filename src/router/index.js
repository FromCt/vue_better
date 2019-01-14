import Vue from 'vue'
import Router from 'vue-router'
import fromct from '@/components/fromct'
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
      path:'/fromct',
      name:'fromct',
      component:fromct
    }
  ]
})
