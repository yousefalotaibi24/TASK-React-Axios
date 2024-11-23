import instance from "./index";

async function getAllPets() {
  const response = await instance.get(
    "https://pets-react-query-backend.eapi.joincoded.com/pets"
  );
  console.log(response);
  return response;
}

async function getPetById(id) {
  const response = await instance.get(
    `https://pets-react-query-backend.eapi.joincoded.com/pets/${id}`
  );
  console.log(response);
  return response;
}
async function addPet(data) {
  const response = await instance.post("/pets", data);
  console.log(response);
  return response;
}

export { getAllPets, getPetById, addPet };
