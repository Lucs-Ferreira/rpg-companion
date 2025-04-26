// src/pages/DashboardPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';

// Estilos globais aplicados a todas as páginas
import '../styles/bootstrap.min.css';
import '../styles/MedievalSharp.css';
import '../styles/style.css';

import d20Icon from '../assets/icons/d20.png';
import groupIcon from '../assets/icons/group.png';
import wolfIcon from '../assets/icons/wolf.png';
import scrollIcon from '../assets/icons/scroll.png';
import mountainIcon from '../assets/icons/mountain.png';
import swordsIcon from '../assets/icons/swords.png';
import cauldronIcon from '../assets/icons/cauldron.png';

const DashboardPage = () => {
    return (
        <div className="bg-custom min-vh-100 d-flex flex-column justify-content-between">
            <div className="container d-flex flex-column align-items-center text-center py-5 animate__animated animate__fadeIn">
                <img
                    src={d20Icon}
                    alt="Ícone Central"
                    className="icon-central mb-4 animate__animated animate__pulse"
                />
                <h1 className="display-4 animate__animated animate__fadeIn">Portal do Aventureiro</h1>
                <p className="lead animate__animated animate__fadeIn">
                    Bem-vindo ao Portal do Aventureiro, onde a magia e a aventura se encontram.
                </p>

                <div className="row row-cols-2 row-cols-md-3 g-4 menu-grid animate__animated animate__slideInUp">
                    <div className="col">
                        <Link to="/personagens" className="text-decoration-none text-black w-100">
                            <button className="menu-btn w-100">
                                <img src={groupIcon} alt="Personagens" className="menu-icon" />
                                <p>Personagens</p>
                            </button>
                        </Link>
                    </div>
                    <div className="col">
                        <button className="menu-btn w-100">
                            <img src={mountainIcon} alt="Regiões" className="menu-icon" />
                            <p>Grimório</p>
                        </button>
                    </div>
                    <div className="col">
                        <button className="menu-btn w-100">
                            <img src={wolfIcon} alt="Bestiário" className="menu-icon" />
                            <p>Bestiário</p>
                        </button>
                    </div>
                    <div className="col">
                        <button className="menu-btn w-100">
                            <img src={scrollIcon} alt="História" className="menu-icon" />
                            <p>História</p>
                        </button>
                    </div>
                    <div className="col">
                        <button className="menu-btn w-100">
                            <img src={swordsIcon} alt="Combate" className="menu-icon" />
                            <p>Combate</p>
                        </button>
                    </div>
                    <div className="col">
                        <button className="menu-btn w-100">
                            <img src={cauldronIcon} alt="Magia e Itens" className="menu-icon" />
                            <p>Magia e Itens</p>
                        </button>
                    </div>
                </div>
            </div>
            <FooterMenu />
        </div>
    );
};

export default DashboardPage;
