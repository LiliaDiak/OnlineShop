//import { createApp } from 'vue'
// import App from './App.vue'
// // import './assets/styles/styles.scss'
// createApp(App).mount('#app')

import Vue from 'vue'
import App from '../src/App.vue'
import store from './vuex/store'

new Vue({
    el: '#App',
    store,
    render: h => h(App)
  })
