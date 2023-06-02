import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/file',
    name: 'File',
    component: () => import('../views/File.vue')
  },
  {
    path: '/email',
    name: 'Email',
    component: () => import('../views/Email.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/Video.vue')
  },
  {
    path: '/video_detail/:id',
    name: 'VideoDetail',
    component: () => import('../views/VideoDetail.vue')
  },
  {
    path: '/done',
    name: 'Done',
    component: () => import('../views/Done.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/Calendar.vue')
  },
  {
    path: '/work',
    name: 'Editor',
    component: () => import('../views/Editor.vue')
  },
  {
    path: '/address_book',
    name: 'AddressBook',
    component: () => import('../views/AddressBook.vue')
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import('../views/tools/Index.vue'),
    children: [
      {path: '/tools', name: 'Tools', component: () => import('../views/tools/ext/List.vue')},
      {path: '/tools/ticket', name: 'ToolsTicket', component: () => import('../views/tools/ext/Ticket.vue')},
      {path: '/tools/to_clash', name: 'ToolsNodeToClash', component: () => import('../views/tools/ext/NodeToClash.vue')},
      {path: '/tools/btc', name: 'ToolsBtc', component: () => import('../views/tools/ext/Btc.vue')},
      {path: '/tools/exchange', name: 'ToolsExchange', component: () => import('../views/tools/ext/Exchange.vue')},
      {path: '/tools/email', name: 'ToolsEmail', component: () => import('../views/tools/ext/Email.vue')},
      {path: '/tools/base64', name: 'ToolsJwt', component: () => import('../views/tools/ext/Base64.vue')},
      {path: '/tools/m3u_check', name: 'ToolsM3uCheck', component: () => import('../views/tools/ext/M3uCheck.vue')},
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
