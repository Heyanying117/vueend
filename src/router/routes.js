import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Things from '../pages/Things/Things.vue'
import ShopCard from '../pages/ShopCard/ShopCard.vue'
import Person from '../pages/Person/Person.vue'
import Search from '../pages/search/search.vue'
import Login from '../pages/Login/Login.vue'
import Find from '../pages/Things/Find.vue'
import Choose from '../pages/Things/Choose.vue'
export default [
    {
        path:'/home',
        component:Home,
        meta:{
          isshowFoot:true
        }
      },
      {
        path:'/category',
        component:Category,
        meta:{
          isshowFoot:true
        }
      },
      {
        path:'/things',
        component:Things,
        meta:{
          isshowFoot:true
        },
        children:[
          {
            path:'/things/find',
            component:Find,
            meta:{
              isshowFoot:true
            }
          },
          {
            path:'/things/choose',
            component:Choose,
            meta:{
              isshowFoot:true
            }
          },
          {
            path: '/things/find',
            redirect: '/things/find'
          }

        ]
      },
      {
        path:'/shopcard',
        component:ShopCard,
        meta:{
          isshowFoot:true
        }
      },
      {
        path:'/person',
        component:Person,
        meta:{
          isshowFoot:true
        }
      },
      {
        path:'/search',
        component:Search,
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/',
        redirect: '/home'
      }
]