import api from "./api-helper";

export const getAllPets = async () => {
  const resp = await api.get("/pets");
  return resp.data;
};

export const getOnePet = async (id) => {
  const resp = await api.get(`/pets/${id}`);
  return resp.data;
};

export const createPet = async (pet) => {
  const resp = await api.post("/pets", pet);
  return resp.data;
};

export const updatePet = async (id) => {
  const resp = await api.put(`/pets/${id.id}`, id);
  return resp.data;
};

export const deletePet = async (id) => {
  const resp = await api.delete(`/pets/${id}`);
  return resp.data;
};

export const petToCategory = async (petId, categoryId) => {
  const resp = await api.get(`/categories/${categoryId}/pets/${petId}`);
  return resp.data;
};
