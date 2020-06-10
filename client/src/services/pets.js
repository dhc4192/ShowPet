import api from "./api-helper";

export const getAllPets = async () => {
  const resp = await api.get("/pets");
  return resp.data;
};

export const getOnePet = async (id) => {
  const resp = await api.get(`/pets/${id}`);
  return resp.data;
};

export const createPet = async (petData) => {
  const resp = await api.post("/pet", { pet: petData });
  return resp.data;
};

export const updatePet = async (id, petData) => {
  const resp = await api.put(`/pet/${id}`, { pet: petData });
  return resp.data;
};

export const deletePet = async (id) => {
  const resp = await api.delete(`/pet/${id}`);
  return resp.data;
};

export const petToCategory = async (petId, categoryId) => {
  const resp = await api.get(`/categories/${categoryId}/pets/${petId}`);
  return resp.data;
};
