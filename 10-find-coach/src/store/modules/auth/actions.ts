import { ActionTree } from 'vuex';
import { AuthState } from '.';

let timer: number;

const actions: ActionTree<AuthState, any> = {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    });
  },
  async auth(context, payload) {
    let response;
    const mode = payload.mode;

    if (mode === 'login') {
      response = await fetch(`http://localhost:3000/users?email=${payload.email}`, {
        method: 'GET',
      });
    } else {
      response = await fetch(`http://localhost:3000/users`, {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
        })
      });
    }

    const responseData = await response.json();

    if (!response.ok || responseData.length === 0) {
      const error = new Error(
        responseData.message || 'Failed to authenticate. Check your login data.'
      );
      throw error;
    }

    const expiresIn = 5 * 60 * 1000;
    const expirationDate = new Date().getTime() + expiresIn;
    const token = new Date().toISOString()
    const userInfo = responseData[0];

    localStorage.setItem('token', token);
    localStorage.setItem('userId', userInfo.id);
    localStorage.setItem('tokenExpiration', expirationDate.toString());

    timer = setTimeout(function() {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('setUser', {
      token,
      userId: userInfo.id
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration! - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function() {
      context.dispatch('autoLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId
      });
    }
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null
    });
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
};

export default actions
