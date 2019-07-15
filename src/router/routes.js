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
  },
  {
    path:'/detail/:id',
    name:'detail',
    component: () => import(/* webpackChunkName :"detail"*/'../views/detail.vue')
  },
  {
    path:'/*',
    name:'error-404',
    component: () => import('../views/error/404.vue')
  }
  
]