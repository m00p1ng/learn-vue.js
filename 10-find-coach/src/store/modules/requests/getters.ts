import { GetterTree } from 'vuex';
import { RequestsState } from '.';

const getters: GetterTree<RequestsState, any> = {
  requests(state, _getters, _rootState, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(_state, getters) {
    return getters.requests && getters.requests.length > 0;
  }
};

export default getters;
