import api from "axios";
export const API_V1 = "/api/v1";

export const baseUrl = "http://localhost:3000/";

export default api.create({
  baseURL: `${baseUrl}`,
  validateStatus: () => {
    return true;
  },
});
