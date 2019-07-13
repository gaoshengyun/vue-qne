export default [
  
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */'../views/Home.vue')
  },
  {
    path:'/city',
    name:'city',
    component: () => import(/* webpackChunkName: "city" */'../views/City.vue')
  }
  
]