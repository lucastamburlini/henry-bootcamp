import React from "react";

const ContactUs = () => {
  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleInput = (e) => {
    setForm((e.target.name = e.target.value));
  };
  console.log(handleInput);

  return (
    <div>
      <form className="contactBg">
        <label htmlFor="nombre">Nombre: </label>
        <input name="nombre" />
        <label htmlFor="email">Email: </label>
        <input name="email" />
        <label htmlFor="asunto">Asunto: </label>
        <input name="asunto" />
        <label htmlFor="mensaje">Mensaje: </label>
        <input name="mensaje" />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
