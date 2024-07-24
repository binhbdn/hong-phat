import config from "@/config";
import axios from "axios";
import { api } from "./api";
import { useStorage } from "./storage";

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getTokenM3dia = async () => {
  try {
    let token = useStorage.get("tokenM3dia");
    if (!token) {
      token = await api.fetch("utils/getTokenM3dia");
      console.info("token m3::", token);
      if (token) {
        useStorage.set("tokenM3dia", token);
      }
    }
    return token;
  } catch (e) {
    console.error(e, "ERROR_GET_TOKEN");
  }
};

const uploadImage = async (file, token) => {
  const Form = new FormData();
  Form.append("media", file);
  Form.append("is_convert", false);

  const configUpload = {
    method: "POST",
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    timeout: 3600000, // Milliseconds
    url: `${config.m3Url}/v2/files/upload`,
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: Form
  };
  const response = await axios(configUpload);
  if (response && response.data && response.data.length) {
    const imgUrl = response.data[0].url;
    await delay(250);
    return imgUrl;
  }
};

const uploadSingleImage = async (file, size = 5120000) => {
  // default 5mb
  // TODO: remove "NOT_SUPPORT_IMG_TYPE" error when api can supports uploading webp image
  if (file.type === "image/webp") {
    return { error: "NOT_SUPPORT_IMG_TYPE" };
  }
  if (file.size > size) {
    return { error: "MAX_SIZE" };
  }
  const token = await getTokenM3dia();
  const url = await uploadImage(file, token);
  if (url?.error) return { error: url.error };

  return url;
};
export { uploadSingleImage };
