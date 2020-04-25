export default {
  setLoginInfo: (state, payload) => {
    const { username, password } = payload;
    state.username = username;
    state.password = password;
  },
};
