import Dashboard from '../pages/admin/dashboard'
import Edit from '../pages/admin/products/Edit'
import List from '../pages/admin/products/List'
import Login from '../pages/Login'
import PageNotFound from '../pages/PageNotFound'

import { BarChartOutlined, AppstoreOutlined } from '@ant-design/icons'

export const MainRoutes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/404',
    component: PageNotFound
  }
]

export const AdminRoutes = [
  {
    path: '/admin/dashboard',
    component: Dashboard,
    isShow: true,
    title: '看板',
    icon: BarChartOutlined
  },
  {
    path: '/admin/products',
    component: List,
    exact: true,
    isShow: true,
    title: '商品管理',
    icon: AppstoreOutlined
  },
  {
    path: '/admin/products/edit',
    component: Edit,
    isShow: false
  }
]
