import React from "react";
import Botones from "./Botones";

const studentName = "Lucas Tamburlini";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá

  return (
    <div>
      <h1>Soy Henry!</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
      <Botones />
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
