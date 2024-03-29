import { ActionTree } from 'vuex';
import { RequestsState, Request } from '.';

const actions: ActionTree<RequestsState, any> = {
  async contactCoach(context, payload) {
    const newRequest: Partial<Request> = {
      userEmail: payload.email,
      message: payload.message
    };
    const response = await fetch(`http://localhost:3000/requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRequest)
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request.');
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(`http://localhost:3000/requests`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch requests.');
      throw error;
    }

    const requests: Request[] = [];
    const filteredData = responseData[coachId]

    if(!filteredData) {
      return requests;
    }

    for (const item of filteredData) {
      const request = {
        id: item.id,
        coachId: coachId,
        userEmail: item.userEmail,
        message: item.message,
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  }
};

export default actions;
