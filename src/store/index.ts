import { createStore, StoreOptions } from 'vuex';
import user from './modules/user'
import getters from './getters'
interface rootState { }
const store: StoreOptions<rootState> = {
  getters,
  modules: {
    user,
  },
}
export default createStore(store);
