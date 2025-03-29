import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      const alertMessage = "Todos los campos son obligatorios.";
      setMessage(alertMessage);
      alert(alertMessage);
    } else if (password.length < 6) {
      const alertMessage = "La contraseña debe tener al menos 6 caracteres.";
      setMessage(alertMessage);
      alert(alertMessage);
    } else {
      const alertMessage = "¡Inicio de sesión exitoso!";
      setMessage(alertMessage);
      alert(alertMessage);
    }
  };

  return (
    <>
      <h1 className="tituloH1">Login</h1>

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
      </div>

      <button className="botonClick" onClick={handleSubmit}>
        Enviar
      </button>

      {message && <p className="mensaje">{message}</p>}
    </>
  );
}

export default Login;
