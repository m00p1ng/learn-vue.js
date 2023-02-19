import { Module } from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export interface Request {
  id: string
  coachId: string
  userEmail: string
  message: string
}

export interface RequestsState {
  requests: Request[]
}

const modules: Module<RequestsState, any> = {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  getters,
  mutations,
  actions
};

export default modules;
