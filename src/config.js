const apiVersion = import.meta.env.VITE_API_VERSION || "";
const envApiUrl = import.meta.env.VITE_API_URL || "http://localhost:4300";
const apiUrl = `${envApiUrl}/api${apiVersion ? `/${apiVersion}` : ""}`;
const m3Url = import.meta.env.VITE_M3_URL;
const m3User = import.meta.env.VITE_M3_USER;
const m3Pass = import.meta.env.VITE_M3_PASS;

export default {
  apiUrl,
  m3Url,
  m3User,
  m3Pass
};
