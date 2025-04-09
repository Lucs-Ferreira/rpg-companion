// src/components/LoadingScreen.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // se você usar react-router-dom para navegação
import '../styles/indexStyle.css'; // importe o CSS (ajuste o caminho se necessário)

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate(); // utilize se estiver usando o react-router-dom

  useEffect(() => {
    // Exibir a tela de loading por 2 segundos e depois aplicar fade-out
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Após o fade-out, redireciona
      setTimeout(() => {
        // Se estiver usando react-router, navegue para a rota de login
        navigate("/login");
        // Se preferir redirecionar via window.location:
        // window.location.href = "/login";
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`loading-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="magic-portal"></div>
      <p className="typing-text">⏳ Teletransportando para o Portal do Aventureiro...</p>
      <div className="particles"></div>
    </div>
  );
};

export default LoadingScreen;
