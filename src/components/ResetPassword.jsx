// src/components/ResetPassword.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Importando os estilos necessários (ajuste os caminhos conforme sua estrutura)
import '../styles/bootstrap.min.css';
import '../styles/MedievalSharp.css';
import '../styles/loginStyle.css';
import '../styles/modal.css';
import '../styles/style.css';

const ResetPassword = () => {
  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar a lógica de recuperação de senha, por exemplo, utilizando Firebase Auth
    const email = e.target.email.value;
    console.log('Formulário de recuperação enviado para:', email);
    // Exemplo: resetPassword(email).catch(err => console.error(err));
  };

  return (
    <div className="bg-custom min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container px-3">
        <div className="card login-card text-white p-4 mx-auto">
          <h1 className="text-center mb-4 title text-black">Recuperação de Senha</h1>
          <form id="resetForm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <button type="submit" className="btn btn-azul-rpg w-100 mt-2">
              Enviar sussurro
            </button>
          </form>
          <div className="text-center mt-3">
            <Link to="/login" className="text-decoration-none text-blue">
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
