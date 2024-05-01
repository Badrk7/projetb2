import api from "axios";
export const API_V1 = "/api/v1";

export const baseUrl = "http://localhost:3000/";

//export const baseUrl = "https://badrok-web-app.netlify.app/";

export default api.create({
  baseURL: `${baseUrl}`,
  validateStatus: () => {
    return true;
  },
});
