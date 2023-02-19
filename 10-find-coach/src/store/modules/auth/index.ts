import { Module } from 'vuex';

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export interface AuthState {
  userId: string | null
  token: string | null
  didAutoLogout: boolean
}

const modules: Module<AuthState, any> = {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false,
    };
  },
  mutations,
  actions,
  getters,
};

export default modules
