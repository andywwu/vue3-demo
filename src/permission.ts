import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
// import { Message } from 'element-ui'

const whiteList = ['/user/login', '/user/register'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (localStorage.getItem('token')) {
    if (to.path === '/user/login') {
      next()
      NProgress.done()
    } else {
      NProgress.done()
      next()
      // if (store.getters.roles.length === 0) {
      //   next({ path: '/' })
      //   NProgress.done()
      //   // store.dispatch('GetInfo').then(res => { // 拉取用户信息
      //   //   next()
      //   // }).catch((err) => {
      //   //   store.dispatch('FedLogOut').then(() => {
      //   //     Message.error(err || 'Verification failed, please login again')
      //   //     next({ path: '/' })
      //   //   })
      //   // })
      // } else {
      //   console.log(2222)
      //   // next({ path: '/' })
      //   NProgress.done()
      // }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/user')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
