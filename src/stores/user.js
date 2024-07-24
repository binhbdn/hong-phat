import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: "",
    phone: "",
    password: false,
    name: "",
    role: ""
  }),

  actions: {
    update(userInfo) {
      this.id = userInfo?.id;
      this.phone = userInfo?.phone;
      this.password = userInfo?.password;
      this.name = userInfo?.name;
      this.role = userInfo?.role;
    }
  }
});
