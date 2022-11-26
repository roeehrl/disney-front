import Home from './routes/home/Index.vue'
import Crm from './routes/crm/Index.vue'
import crmRoutes from './routes/crm/router'
import Administration from './routes/administration/Index.vue'
import administrationRoutes from './routes/administration/router'

let appRoutes = [
  {
    path: 'home',
    name: 'home',
    component: Home,
  },
  {
    path: 'info',
    name: 'info',
    component: Crm,
    children: crmRoutes,
  },
  {
    path: 'administration',
    name: 'administration',
    component: Administration,
    children: administrationRoutes,
    meta: { guard: 'ADMIN' },
  },
]

export default appRoutes
