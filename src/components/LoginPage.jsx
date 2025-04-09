// src/components/LoginPage.jsx
import React, { useState } from 'react';
import { login } from '../firebase/auth';
import { showMessage } from '../firebase/message';
import { Link } from 'react-router-dom'; // para navegação entre rotas, caso utilize react-router-dom

// Importando os estilos necessários (ajuste os caminhos conforme sua estrutura)
import '../styles/bootstrap.min.css';
import '../styles/MedievalSharp.css';
import '../styles/loginStyle.css';
import '../styles/modal.css';
import '../styles/style.css';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, senha);
      showMessage("login-success", "success");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      showMessage(error.code, "error");
    }
  };

  return (
    <div className="bg-custom min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container px-3">
        <div className="card login-card text-white p-4 mx-auto">
          <h1 className="text-center mb-4 title text-black">Portal do Aventureiro</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Seu email"
                required
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
                placeholder="Sua senha"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-azul-rpg w-100 mt-2">
              Entrar na Taverna
            </button>
          </form>
          <Link to="/resetar-senha" className="text-decoration-none text-blue mt-1 d-block">
            Esqueci minha senha
          </Link>
          <div className="card-footer text-center mt-3">
            <Link to="/cadastro" className="text-decoration-none text-blue">
              Ainda não tem conta? Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;
