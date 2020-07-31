import Vue from 'vue'//表示引用第三方库
import App from './App.vue'//表示自己引用的东西

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
