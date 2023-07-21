import React, { useState } from "react";

let validation = (form, errors, setErrors) => {
   const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/;

   if (form.email.length === 0) {
      setErrors({
         ...errors,
         email: "Por favor ingrese email",
      });
   } else {
      setErrors({});
   }

   if (!emailRegex.test(form.email)) {
      setErrors({
         ...errors,
         email: "El email ingredo no es valido",
      });
   } else {
      setErrors({});
   }
   if (form.email.length > 35) {
      setErrors({
         ...errors,
         email: "El email no puede exceder los 35 caracteres",
      });
   } else {
      setErrors({});
   }
   if (form.password.length === 0) {
      setErrors({
         ...errors,
         password: "Por favor ingrese password",
      });
   } else {
      setErrors({});
   }
   if (form.password.length < 6 || form.password.length > 10) {
      setErrors({
         ...errors,
         password: "La contraseña debe tener entre 6 a 10 caracteres",
      });
   } else {
      setErrors({});
   }
   return { ...form };
};

let Form = (props) => {
   const [userData, setUserData] = useState({ email: "", password: "" });
   const [errors, setErrors] = useState({});

   let handleSubmit = (evento) => {
      evento.preventDefault();
      props.login(userData);
   };

   let handleChange = (evento) => {
      setUserData({
         ...userData,
         [evento.target.name]: evento.target.value,
      });

      validation(
         {
            ...userData,
            [evento.target.name]: evento.target.value,
         },
         errors,
         setErrors
      );
   };

   return (
      <div>
         <form>
            <label htmlFor="email">Email: </label>
            <input
               value={userData.email}
               type="email"
               name="email"
               placeholder="Ingresa aqui tu mail"
               onChange={handleChange}
            />
            <br />
            {errors.email ? <span>{errors.email}</span> : null}
            <br />
            <label htmlFor="password">Password: </label>
            <input
               value={userData.password}
               type="text"
               name="password"
               placeholder="Ingresa aqui tu contraseña"
               onChange={handleChange}
            />
            <br />
            {errors.password ? <span>{errors.password}</span> : null}
            <br />
            <button onClick={handleSubmit} type="submit">
               Submit
            </button>
         </form>
      </div>
   );
};

export default Form;
