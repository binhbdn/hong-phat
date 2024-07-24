import { api } from "@/composable/api";

export async function userLogin(phone, password) {
  return api
    .fetch("user-cms/login", { phone, password })
    .then((res) => res)
    .catch((err) => {
      console.error("ERROR LOGIN", err);
    });
}
