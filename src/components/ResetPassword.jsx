// src/components/ResetPassword.jsx
import React, { useState } from 'react';
import { resetPassword } from '../firebase/auth';
import { showMessage } from '../firebase/message';
import { Link } from 'react-router-dom';

import '../styles/bootstrap.min.css';
import '../styles/MedievalSharp.css';
import '../styles/loginStyle.css';
import '../styles/modal.css';
import '../styles/style.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      showMessage("reset-success", "success");
      setTimeout(() => {
        window.location.href = "/login";
      })
    } catch (error) {
      console.error("Erro ao enviar e-mail de recuperação:", error);
      showMessage(error.code, "error");
    }
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
