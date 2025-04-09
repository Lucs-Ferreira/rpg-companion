// src/components/RegisterPage.jsx
import React, { useState } from 'react';
import { register } from '../firebase/auth';
import { showMessage } from '../firebase/message';
import { Link } from 'react-router-dom';

import '../styles/bootstrap.min.css';
import '../styles/MedievalSharp.css';
import '../styles/loginStyle.css';
import '../styles/modal.css';
import '../styles/style.css';

const RegisterPage = () => {
  const [loginName, setLoginName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, senha);
      showMessage("register-success", "success");
      setTimeout(() => {
        window.location.href = "/login";
      })
    } catch (error) {
      console.error("Erro ao registrar:", error);
      showMessage(error.code, "error");
    }
  };

  return (
    <div className="bg-custom min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container px-3">
        <div className="card login-card text-white p-4 mx-auto">
          <h1 className="text-center mb-4 title text-black">Novo Aventureiro</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="login" className="form-label">Login</label>
              <input
                type="text"
                className="form-control"
                id="login"
                placeholder="Seu nome de aventureiro"
                value={loginName}
                onChange={(e) => setLoginName(e.target.value)}
                autoFocus
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Se precisarmos enviar um sussurro"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Senha</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Palavra secreta"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-azul-rpg w-100 mt-2">
              Registrar na Guilda
            </button>
            <div className="text-center mt-3">
              <Link to="/login" className="text-decoration-none text-blue">
                Voltar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
