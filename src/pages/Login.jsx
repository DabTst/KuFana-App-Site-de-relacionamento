import React from "react";
import { useState } from "react";

const Login = () => {
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Login">
      <h2>Bem-vindo(a)! Faça login para continuar</h2>
      <form onSubmit={handleSubmit} className="LoginForm">
        <h5>Por favor, faça login para entrar.</h5>
        <div className="email">
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Digite seu Email"
            required
          />
        </div>
        <div className="pswd">
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Digite sua Senha"
            required
          />
        </div>
        <button type="submit">Entrar</button>
        <div className="NewForgot">
          <p>
            Não tem uma conta? <a href="./SignUpp">Registre-se agora.</a>
          </p>
          <p>
            Esqueceu sua senha? <a href="www.fb.com">Clique aqui</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
