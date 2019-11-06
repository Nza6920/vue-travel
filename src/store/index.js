import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  // 键值一样可以省略
  state: state,
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city) // 调用 mutations
  //   }
  // },
  mutations: mutations,
  getters: {
    doubleCity (state) {
      return state.city + '' + state.city
    }
  }
})
