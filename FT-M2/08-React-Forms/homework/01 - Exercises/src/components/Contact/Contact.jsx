import React, { useState } from "react";
import "./Contact.modules.css";

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = (inputs) => {
  const errors = {};

  if (!inputs.name) {
    errors.name = "Se requiere un nombre";
  }

  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }

  if (!inputs.message) {
    errors.message = "Se requiere un mensaje";
  }
  return errors;
};

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (evento) => {
    setInputs({
      ...inputs,
      [evento.target.name]: evento.target.value,
    });

    setErrors(
      validate({
        ...inputs,
        [evento.target.name]: evento.target.value,
      })
    );
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (Object.keys(errors).length === 0) {
      alert("Datos completos");
      setInputs({
        name: "",
        email: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Debe llenar todos los campos");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre..."
          onChange={handleChange}
          className={errors.name && "warning"}
          value={inputs.name}
        />
        <p className="danger">{errors.name}</p>
        <label>Correo Electrónico:</label>
        <input
          type="text"
          name="email"
          placeholder="Escribe tu email..."
          onChange={handleChange}
          className={errors.email && "warning"}
          value={inputs.email}
        />
        <label>Mensaje:</label>
        <p className="danger">{errors.email}</p>
        <textarea
          type="text"
          name="message"
          placeholder="Escribe tu mensaje..."
          onChange={handleChange}
          className={errors.message && "warning"}
          value={inputs.message}
        />
        <p className="danger">{errors.message}</p>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
