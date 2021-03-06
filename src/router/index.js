import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta:{title:'ShenDezhou@THU'},
      component: ()=>import('@/view/index'),
      beforeEnter: (to, from, next) => {
        next({ path: '/academic' })
      }
    },
    {
      path: '/academic',//Academic works
      name: 'academic',
      meta:{title:'academic'},
      component: ()=>import('@/view/academic')
    },
    {
      path: '/competition',//Competition works
      name: 'competition',
      meta:{title:'competition'},
      component: ()=>import('@/view/competition')
    },
    {
      path: '/books',//Academic
      name: 'books',
      meta:{title:'non-academic'},
      component: ()=>import('@/view/books')
    },
    {
      path: '/codes',//
      name: 'codes',
      meta:{title:'codes'},
      component: ()=>import('@/view/codes')
    },
    {
      path: '/works',//
      name: 'works',
      meta:{title:'works'},
      component: ()=>import('@/view/works')
    },
    {
      path: '/models',//
      name: 'models',
      meta:{title:'models'},
      component: ()=>import('@/view/model')
    },
    {
      path: '/2020',//
      name: '2020',
      meta:{title:'2020'},
      component: ()=>import('@/view/2020')
    },
    {
      path: '/presentation',//
      name: 'presentation',
      meta:{title:'presentation'},
      component: ()=>import('@/view/presentation')
    }
		// {
		//   path: '/oneStopSearch',//一站式
		//   name: 'oneStopSearch',
		//   meta:{title:'一站式检索'},
		//   component: ()=>import('@/view/oneStopSearch')
		// },
    // {
    //   path: '/lawsNew',//法宝
    //   name: 'lawsNew',
    //   meta:{title:'法律法规'},
    //   component: ()=>import('@/view/lawsNew')
    // },
    // {
    //   path: '/detail/:type/:gid',
    //   name: 'detail1',
    //   meta:{title:'法律法规'},
    //   component: ()=>import('@/view/detail')
    // },
    // {
    //   path: '/detail/:type/:gid/:keyword',
    //   name: 'detail1',
    //   meta:{title:'法律法规'},
    //   component: ()=>import('@/view/detail')
    // },
    // {
    //   path: '/detail/:type/:gid/:cid',
    //   name: 'detail',
    //   meta:{title:'法律法规'},
    //   component: ()=>import('@/view/detail')
    // },
    // {
    //   path: '/example',
    //   name: 'example',
    //   meta:{title:'司法案例'},
    //   component: ()=>import('@/view/example/example')
    // },
		// {
		//   path: '/journalLaw',
		//   name: 'journalLaw',
		//   meta:{title:'法学期刊'},
		//   component: ()=>import('@/view/journal/journalLaw')
    // },
    // {
		//   path: '/lawsChange',
		//   name: 'lawsChange',
		//   meta:{title:'法规变迁'},
		//   component: ()=>import('@/view/lawsChange')
    // }
  ]
})
