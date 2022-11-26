import People from './routes/people/Index.vue'

import Triplets from './routes/triplets/Index.vue'

import Countries from './routes/countries/Index.vue'

import Sexes from './routes/sexes/Index.vue'

import Sites from './routes/sites/Index.vue'


let crmRoutes = [
  {
    path: 'People',
    name: 'People',
    component: People,
  },
  {
    path: 'Countries',
    name: 'Countries',
    component: Countries,
  },
  {
    path: 'Sexes',
    name: 'Sexes',
    component: Sexes,
  },
  {
    path: 'Sites',
    name: 'Sites',
    component: Sites,
  },
  {
    path: 'Triplets',
    name: 'Triplets',
    component: Triplets,
  },
 
]

export default crmRoutes
