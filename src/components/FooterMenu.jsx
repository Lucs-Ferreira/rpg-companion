// src/components/FooterMenu.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/footerStyle.css';
import { getAuth, signOut } from 'firebase/auth';

import userIcon from '../assets/icons/user.png';
import logoutIcon from '../assets/icons/logout.png';

const FooterMenu = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            setUserName(user.displayName || user.email);
        }
    }, []);

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                navigate('/login');
            })
            .catch((error) => {
                console.error('Erro ao fazer logout:', error);
            });
    };

    return (
        <footer className="footer-menu">
            <div className="container d-flex justify-content-around align-items-center">
                <button className="footer-btn" id="btn-perfil">
                    <img src={userIcon} alt="Perfil" className="footer-icon" />
                    <span>{userName || 'Perfil'}</span>
                </button>
                <button className="footer-btn" onClick={handleLogout}>
                    <img src={logoutIcon} alt="Sair" className="footer-icon" />
                    <span>Sair</span>
                </button>
            </div>
        </footer>
    );
};

export default FooterMenu;
