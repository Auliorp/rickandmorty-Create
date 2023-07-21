import "./App.css";
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/nav";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   /* const EMAIL = "a@a.com";
     const PASSWORD = "1234567";

    function login(userData) {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate("/home");
      }
   } */
   function login(userData) {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate("/home");
      });
   }
   useEffect(() => {
      !access && navigate("/");
   }, [access]);

   function onSearch(id) {
      if (characters.find((char) => char.id === Number(id))) {
         return window.alert("Ya puedes ver ese personaje.");
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         })
         .catch((error) => {
            window.alert("¡No hay personajes con este ID!");
         });
   }
   function onClose(id) {
      let arrayFiltered = characters.filter((character) => character.id !== id);
      setCharacters(arrayFiltered);
   }

   return (
      <div className="App">
         {pathname !== "/" && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route
               path="/home"
               element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;
