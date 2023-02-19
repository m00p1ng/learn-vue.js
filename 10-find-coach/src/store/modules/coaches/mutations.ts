import { MutationTree } from 'vuex';
import { CoachState } from '.';

const mutations: MutationTree<CoachState> = {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};

export default mutations;
