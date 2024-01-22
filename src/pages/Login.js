import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import Button from 'react-bootstrap/Button';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  const navigate = useNavigate();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        navigate("/presentation");
      }
    });
  };

  return (
    <div className="loginContainer">
      <label><AccountCircleIcon/> Usuario: </label>
      <input
        type="text"
        placeholder="Ingrese su usuario"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label><PasswordIcon/> Contraseña: </label>
      <input
        type="password"
        placeholder="Ingrese su contraseña"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Button variant="primary" onClick={login}> Iniciar </Button>
    </div>
  );
}

export default Login;
