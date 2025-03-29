import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios.");
    } else if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
    } else if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
    } else {
      setMessage("¡Registro exitoso!");
    }
  };

  return (
    <>
      <h1 className="tituloH1">Register</h1>

      <div className="contenedor">
        <p className="parrafo1">Email</p>
        <input
          className="input1"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <p className="parrafo1">Contraseña</p>
        <input
          className="input1"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <p className="parrafo1">Confirmar Contraseña</p>
        <input
          className="input1"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
      </div>

      <button className="botonClick" onClick={handleSubmit}>
        Enviar
      </button>

      {message && <p className="mensaje">{message}</p>}
    </>
  );
};

export default Register;
