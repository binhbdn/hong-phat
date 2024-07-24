import config from "../config";
import axios from "axios";
class M3dia {
  constructor() {
    this.token = config.m3token;
    if (!this.token) this.getToken();
  }

  async getToken() {
    try {
      const url = `${config.m3Url}/v2/users/signin`;
      const data = {
        username: config.m3User,
        password: config.m3Pass
      };
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      const token = await axios.post(url, data, { headers });
      this.token = token.data.access_token;
      console.info(`token: ${this.token}`);
    } catch (e) {
      console.error(e);
    }
  }

  async upload(files) {
    const [file] = files;
    if (!this.token) {
      await this.getToken();
    }
    const data = new FormData();
    data.append("media", file);
    data.append("is_convert", false);

    const configUpload = {
      method: "POST",
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      timeout: 3600000,
      url: `${config.m3Url}/v2/files/upload`,
      headers: {
        Authorization: `Bearer ${this.token}`
      },
      data: data
    };
    const response = await axios(configUpload);
    if (response && response.data.length !== 0) {
      return response.data[0];
    }
    return false;
  }
}

export default {
  install: (app) => {
    window.$m3dia = new M3dia();
    app.config.globalProperties.$m3dia = window.$m3dia;
  }
};
