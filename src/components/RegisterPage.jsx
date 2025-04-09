// src/components/RegisterPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Importando estilos necessários (ajuste os caminhos conforme sua estrutura)
import '../styles/bootstrap.min.css';
import '../styles/MedievalSharp.css';
import '../styles/loginStyle.css';
import '../styles/modal.css';
import '../styles/style.css';

const RegisterPage = () => {
  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar a lógica de registro
    // Por exemplo, utilizando suas funções de autenticação com Firebase
    console.log('Formulário de registro enviado');
  };

  return (
    <div className="bg-custom min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container px-3">
        <div className="card login-card text-white p-4 mx-auto">
          <h1 className="text-center mb-4 title text-black">Novo Aventureiro</h1>
          <form id="registerForm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="login" className="form-label">
                Login
              </label>
              <input
                type="text"
                className="form-control"
                id="login"
                placeholder="Seu nome de aventureiro"
                autoFocus
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Se precisarmos enviar um sussurro"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Palavra secreta"
              />
            </div>
            <button type="submit" className="btn btn-azul-rpg w-100 mt-2" id="btn-login">
              Registrar na Guilda
            </button>
            <div className="text-center mt-3">
              {/* Link para voltar para a página de login */}
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
