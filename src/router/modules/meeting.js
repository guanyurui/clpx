/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const meetingRouter = {
  path: '/meeting',
  component: Layout,
  alwaysShow: true,
  redirect: '/meeting/index',
  name: 'meeting',
  meta: {
    title: 'meeting',
    icon: 'folder-opened',
    roles: ['admin']
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/meeting/index'),
      name: 'meetingAdd',
      meta: { title: 'meetingAdd', roles: ['admin'] }
    }
  ]
}
export default meetingRouter
