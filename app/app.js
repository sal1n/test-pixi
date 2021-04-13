import Vue from 'nativescript-vue'

import '@nativescript/canvas-polyfill'

import Canvas from '@nativescript/canvas/vue'
Vue.use(Canvas)

import Home from './components/Home'

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
