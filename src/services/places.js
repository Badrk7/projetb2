import api from "./api";

export const addPlace = async (body) => {
  return await api.post(`/api/places/add-place`, body);
};

export const fetchPlaces = async () => {
  return await api.get(`/api/places/get-places`);
};

export const fetchSinglePlace = async (id) => {
  return await api.get(`/api/places/get-single-place/${id}`);
};

export const updatePlace = async (id, body) => {
  return await api.put(`/api/places/update-place/${id}`, body);
};
export const deletelace = async (id) => {
  return await api.delete(`/api/places/delete-place/${id}`);
};

