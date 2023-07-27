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

   const login = async (userData) => {
      const URL = "http://localhost:3001/rickandmorty/login/";
      try {
         const { email, password } = userData;
         const { data } = await axios(
            URL + `?email=${email}&password=${password}`
         );
         const { access } = data;
         setAccess(access);
         access && navigate("/home");
      } catch (error) {
         console.log(error.message);
      }
   };
   useEffect(() => {
      !access && navigate("/");
   }, [access]);

   const onSearch = async (id) => {
      if (characters?.find((character) => character.id === Number(id))) {
         return window.alert(`El personaje ${id} ya está en pantalla`);
      }
      try {
         const { data } = await axios(
            `https://rickandmortyapi.com/api/character/${id}`
         );
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      } catch (error) {
         alert("¡No hay personajes con este ID!");
      }
   };
   const onClose = (id) => {
      let arrayFiltered = characters.filter((character) => character.id !== id);
      setCharacters(arrayFiltered);
   };

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
