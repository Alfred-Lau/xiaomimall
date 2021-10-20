// import { login } from "@/api";

export default {
  setLoginInfo: ({ commit }, payload) => {
    commit("setLoginInfo", payload);
  },
  // login: async ({}, payload) => {
  //   console.log("wefghjkl;");
  //   const userinfo = await login(payload);
  //   console.log("payload", payload, userinfo);
  // },
};
