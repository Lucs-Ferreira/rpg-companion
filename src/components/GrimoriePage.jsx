// src/pages/CharactersPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';

import '../styles/bootstrap.min.css';
import '../styles/MedievalSharp.css';
import '../styles/style.css';

import magicCircle from '../assets/icons/magic_circle.png';

const GrimoriePage = () => {
    return (
        <div className="bg-custom min-vh-100 d-flex flex-column justify-content-between">
            <div className="container py-4 animate__animated animate__fadeIn">
                <h1 className="text-center medieval-title mb-3">Grimório</h1>

                <div className="input-group mb-4">
                    <div className="align-items-center mb-4 col-2">
                        <Link to="/dashboard" className="text-decoration-none">
                            <button className="menu-btn px-4 py-2">Voltar</button>
                        </Link>
                    </div>
                    <div className="align-items-center mb-4 col-3"></div>
                    <div className="align-items-center mb-4 col-3">
                        <select name="personagem" id="personagem" className="form-select">
                            <option value="1">Personagem 1</option>
                            <option value="2">Personagem 2</option>
                            <option value="3">Personagem 3</option>
                        </select>
                    </div>
                    <div className="align-items-center mb-4 col-1"></div>
                    <div className="align-items-center mb-4 col-3">
                        <Link to={"/grimorio/nova_magia"} className="text-decoration-none">
                            <button className="btn btn-success d-flex align-items-center justify-content-center gap-2 px-4 py-2">
                                <img src={magicCircle} width={25} height={25} alt="ícone magia" />
                                Adicionar Magia
                            </button>

                        </Link>
                    </div>
                </div>

            </div>
            <FooterMenu />
        </div>
    );
};

export default GrimoriePage;
