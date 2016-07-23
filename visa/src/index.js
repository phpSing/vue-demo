import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({

    '/': {
        component: require('./views/home')
    },

    '/tim': {
      component: require('./views/tim')
    },

})
router.start(App, '#app')
