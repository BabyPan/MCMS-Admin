const data = [
  {
    path: '/',
    component: 'Layout',
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: '@/views/index/index',
        meta: {
          title: '首页',
          icon: 'home',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/leader',
    name: 'Leader',
    component: 'Layout',
    redirect: 'noRedirect',
    meta: { title: '部门管理', icon: 'user-friends', permissions: ['admin'] },
    children: [
      {
        path: 'staffList',
        name: 'StaffList',
        component: '@/views/leader/staffList/index',
        meta: { title: '部门人员列表' },
      },
      {
        path: 'staffCareLogList',
        name: 'StaffCareLogList',
        component: '@/views/leader/staffCareLogList/index',
        meta: { title: '人员成长记录' },
      },
    ],
  },
  {
    path: '/promotionLeader',
    name: 'PromotionLeader',
    component: 'Layout',
    redirect: 'noRedirect',
    meta: { title: '投放管理', icon: 'chart-pie', permissions: ['admin'] },
    children: [
      {
        path: 'promotionTTAccountList',
        name: 'PromotionTTAccountList',
        component: '@/views/promotionLeader/promotionTTAccountList/index',
        meta: { title: '推广账号管理' },
      },
      {
        path: 'promotionTTAccountPutLogList',
        name: 'PromotionTTAccountPutLogList',
        component: '@/views/promotionLeader/promotionTTAccountPutLogList/index',
        meta: { title: '每日投放列表' },
      },
    ],
  },
  {
    path: '/error',
    component: 'EmptyLayout',
    redirect: 'noRedirect',
    name: 'Error',
    meta: { title: '错误页', icon: 'bug' },
    children: [
      {
        path: '401',
        name: 'Error401',
        component: '@/views/401',
        meta: { title: '401' },
      },
      {
        path: '404',
        name: 'Error404',
        component: '@/views/404',
        meta: { title: '404' },
      },
    ],
  },
]
module.exports = [
  {
    url: '/menu/navigate',
    type: 'post',
    response() {
      return { code: 200, msg: 'success', data: data }
    },
  },
]
