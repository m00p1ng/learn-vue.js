import { GetterTree } from 'vuex';
import { AuthState } from '.';

const getters: GetterTree<AuthState, any> = {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  }
};

export default getters
