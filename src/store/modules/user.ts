import { createStore, ActionTree, MutationTree, Module } from 'vuex';
import router from '../../router/index'
interface RootState {

}
interface UserState {
  token: string,
  roles: any,
  loading: boolean
}
const UserState: UserState = {
  token: '',
  roles: [],
  loading: false,
}
const mutations: MutationTree<UserState> = {
  SETTOKEN: (state, token) => {
    state.token = token;
    state.loading = false
    localStorage.setItem('token', token)
  },
  LOADING: (state, bol) => {
    state.loading = bol
  },
}
const actions: ActionTree<UserState, RootState> = {
  Login({ commit }, payload) {
    commit('LOADING', true)
    setTimeout(() => {
      commit('SETTOKEN', '1111')
      router.push('/')
    }, 500)
  },
}

const user: Module<UserState, RootState> = {
  namespaced: true,
  state: UserState,
  mutations,
  actions,
}

export default user
