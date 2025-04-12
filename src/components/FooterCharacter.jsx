// src/components/FooterMenu.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/footerStyle.css';


const FooterMenu = () => {

    return (
        <footer className="footer-menu">
            <div className="container d-flex justify-content-around align-items-center">
                <div className='col-4'>
                    <button className="footer-btn">
                        <i className='fa fa-arrow-left'></i> Voltar
                    </button>
                </div>
                <div className='col-4'>
                </div>
                <div className='col-4'>
                    <button className="footer-btn">
                        Avançar <i className='fa fa-arrow-right'></i>
                    </button>
                </div>  
            </div>
        </footer>
    );
};

export default FooterMenu;
