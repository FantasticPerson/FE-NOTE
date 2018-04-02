import Vue from 'vue'
import Router from 'vue-router'
import Layout from './components/base/Layout'

import Container from './components/base/Container'
import Form from './components/items/Form'
import List from './components/items/List'

Vue.use(Router)// 使用路由

export default new Router({
  routes: [
    {
      path: '/layout', // 访问的路由
      name: 'Layout',
      component: Layout // 组件
    },
    {
      path:'/form',
      name:'Form',
      component:Form
    },
    {
      path: '/container',
      name: 'Container',
      component: Container // 在这个里面可以接着设计子路由
    }
  ]
})
