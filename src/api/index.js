import request from "@/utils/request";

export async function login(params) {
  const result = await request("/api/user/login", {
    method: "POST",
    data: JSON.stringify(params),
  });

  return result;
}
export async function logout(params) {
  const result = await request("/api/user/logout", {
    method: "POST",
    data: JSON.stringify(params),
  });

  return result;
}
export async function getUserInfo(params) {
  const result = await request("/api/user/info", {
    params,
  });

  return result;
}
