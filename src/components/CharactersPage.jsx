// src/pages/CharactersPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';

import '../styles/bootstrap.min.css';
import '../styles/MedievalSharp.css';
import '../styles/style.css';

import d20Icon from '../assets/icons/d20.png';

const mockCharacters = [
  { id: 1, name: 'Arthas', class: 'Paladino', level: 5 },
  { id: 2, name: 'Lyra', class: 'Arqueira', level: 3 },
  { id: 3, name: 'Drako', class: 'Mago', level: 7 }
];

const CharactersPage = () => {
  return (
    <div className="bg-custom min-vh-100 d-flex flex-column justify-content-between">
      <div className="container py-4 animate__animated animate__fadeIn">
        <h1 className="text-center medieval-title mb-3">Meus Personagens</h1>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <Link to="/dashboard" className="text-decoration-none">
            <button className="menu-btn px-4 py-2">Voltar</button>
          </Link>
          <Link to={"/personagem/novo"} className="text-decoration-none">
          <button className="btn btn-success px-4 py-2 "><i className='fa fa-plus'></i> Novo Personagem</button>
          </Link>
        </div>

        <div className="d-flex flex-column gap-3">
          {mockCharacters.map((char) => (
            <div key={char.id} className="menu-btn d-flex align-items-center p-3">
              <img src={d20Icon} alt="Personagem" className="me-3" style={{ width: '60px', height: '60px' }} />
              <div className="text-start">
                <h5 className="mb-1">{char.name}</h5>
                <p className="mb-0">Classe: {char.class}</p>
                <p className="mb-0">Nível: {char.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterMenu />
    </div>
  );
};

export default CharactersPage;
