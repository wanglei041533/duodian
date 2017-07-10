import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'


import Home from '@/pages/Home'
import Market from '@/pages/Market'
import Cart from '@/pages/Cart'
import Mine from '@/pages/Mine'

import Classify from '../pages/Market/classify.vue'
import ChinaFruit from '../pages/Market/chinaFruit.vue'
import ImpFruit from '../pages/Market/impFruit.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/market',
      name: 'Market',
      component: Market,
      children:[
		  {
			  path:'/',
			  name:'Classify',
			  component:Classify
		  },
		  {
			  path:'/chinaFruit',
			  name:'ChinaFruit',
			  component:ChinaFruit
		  },
		  {
			 path:'/impFruit',
			 name:'ImpFruit',
			 component:ImpFruit 
		  }
	  ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
