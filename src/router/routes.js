// import router from '.'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', name: 'index', component: () => import('pages/HomePage.vue') },
      { path: '/restaurante', name: 'restaurante', component: () => import('src/pages/RestaurantPage.vue') }
    ]
  },
  {
    path: '/login', name: 'login', component: () => import('pages/Login.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
