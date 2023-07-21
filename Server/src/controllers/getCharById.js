const axios = require("axios");
const { response } = require("express");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
   const { id } = req.params;

   axios
      .get(`${URL}${id}`)
      .then((response) => response.data)
      .then(({ status, name, species, origin, image, gender }) => {
         if (name) {
            const personaje = {
               id,
               status,
               name,
               species,
               origin,
               image,
               gender,
            };
            return res.status(200).json(personaje);
         }
         return res.status(404).send("Not fount");
      })
      .catch((error) => res.status(500).send(error.message));
};

/* const getCharById = (res, id) => {
   axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
         const objeto = {
            id: id,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species,
            origin: response.data.origin,
            image: response.data.image,
            status: response.data.status,
         };
         res.writeHead(200, { "Content-Type": "text/plain" });
         res.end(JSON.stringify(objeto));
      })
      .catch((error) =>
         res.writeHead(500, { "Content-Type": "text/plain" }).end(error.message)
      );
}; */

module.exports = { getCharById };
