/* const URL = "https://rickandmortyapi.com/api/character/"; */
/* const { response } = require("express"); */
const axios = require("axios");

const getCharById = async (req, res) => {
   try {
      const { id } = req.params;
      const { data } = await axios(
         `https://rickandmortyapi.com/api/character/${id}`
      );
      if (!data.name) {
         throw Error(`Faltan datos del personaje con ID: ${id}`);
      }
      const personaje = {
         id: data.id,
         status: data.status,
         name: data.name,
         species: data.species,
         origin: data.origin,
         image: data.image,
         gender: data.gender,
      };
      return res.status(200).json(personaje);
   } catch (error) {
      return error.message.includes("ID")
         ? res.status(404).send(error.message)
         : res.status(500).send(error.message);
   }
};

module.exports = getCharById;
