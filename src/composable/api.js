import { useStorage } from "./storage";
import config from "@/config";
class Api {
  async fetch(path, args = {}, method = "") {
    if (!method) {
      method = Object.keys(args).length === 0 ? "GET" : "POST";
    }
    let url = `${config.apiUrl}/${path}`;
    if (Object.keys(args).length && method === "GET") {
      url += `?${new URLSearchParams(args).toString()}`;
    }
    const token = useStorage.get("token");
    const headers = {};
    if (token) headers.token = token;
    const options =
      method === "GET"
        ? { headers }
        : {
            method,
            headers: {
              ...headers,
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(args)
          };
    return fetch(url, options).then((res) => res.json());
  }
  async currentUser() {
    const user = await this.fetch("user-cms/info");
    if (user._id) {
      window.stores.user.update(user);
    }
    return user;
  }
}
export const api = new Api();
