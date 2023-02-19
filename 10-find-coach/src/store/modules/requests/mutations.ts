import { MutationTree } from 'vuex';
import { RequestsState } from '.';

const mutations: MutationTree<RequestsState> = {
  addRequest(state, payload) {
    state.requests.push(payload);
  },
  setRequests(state, payload) {
    state.requests = payload;
  }
};

export default mutations
