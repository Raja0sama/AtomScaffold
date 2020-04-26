export default {
    namespace: 'auth',
    state: {
        auth : false
    },
    reducers: {
      'login'(state, { payload: auth  }) {
        state.auth = true
        return {
            ...state
        };
      },
      'logout'(state) {
        state.auth = false
        return {
            ...state
        };
      },
    },
  };