// src/pages/NewCharacterPage.jsx
import React, { useEffect, useState } from 'react';
import { getClasses } from '../firebase/classService';
import { getRaces } from '../firebase/racesService';

import '../styles/bootstrap.min.css';
import '../styles/MedievalSharp.css';
import '../styles/style.css';
import FooterMenu from './FooterMenu';

import defaultImage from '../assets/images/silhueta.jpg';

const NewCharacterPage = () => {
    const [name, setName] = useState('');
    const [charClass, setCharClass] = useState('');
    const [level, setLevel] = useState('');
    const [race, setRace] = useState('');
    const [classes, setClasses] = useState([]);
    const [races, setRaces] = useState([]);
    const [alignment, setAlignment] = useState('');

    const [imagePreview, setImage] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    useEffect(() => {
        const fetchClasses = async () => {
            const classdata = await getClasses();
            setClasses(classdata);
            const racesData = await getRaces();
            setRaces(racesData);
        };

        fetchClasses();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, charClass, level, race });
    };

    return (
        <div className="bg-custom">
            <div className="container py-4 animate__animated animate__fadeIn">
                <h1 className="text-center medieval-title mb-4">Nova Ficha de Personagem</h1>
                <div className="text-center mb-4">
                    <img
                        src={imagePreview || defaultImage }
                        alt="Pré-visualização do personagem"
                        className="img-fluid rounded"
                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                    />
                    <div className="mt-2">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e)}
                            className="form-control mt-2"
                            style={{ maxWidth: '300px', margin: '0 auto' }}
                        />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='row gx-1'>
                        <div className="col-5 mb-3">
                            <label htmlFor="name" className="form-label">Nome</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col mb-3">
                            <label htmlFor="class" className="form-label">Classe</label>
                            <select
                                id="class"
                                className="form-select"
                                value={charClass}
                                onChange={(e) => setCharClass(e.target.value)}
                                required
                            >
                                <option value="">Selecione</option>
                                {classes.map((cls) => (
                                    <option key={cls.id} value={cls.description}>
                                        {cls.description}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-2 mb-3">
                            <label htmlFor="name" className="form-label">Nível</label>
                            <input
                                type="text"
                                id="level"
                                className="form-control"
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className='row gx-1'>
                        <div className="col-5 mb-3">
                            <label htmlFor="race" className="form-label">Raça</label>
                            <select
                                id="race"
                                className="form-select"
                                value={race}
                                onChange={(e) => setRace(e.target.value)}
                                required
                            >
                                <option value="">Selecione</option>
                                {races.map((cls) => (
                                    <option key={cls.id} value={cls.description}>
                                        {cls.description}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col mb-3">
                            <label htmlFor="alignment" className="form-label">Alinhamento</label>
                            <select
                                id="alignment"
                                className="form-select"
                                value={alignment}
                                onChange={(e) => setAlignment(e.target.value)}
                                required
                            >
                                <option value="">Selecione</option>
                                <option value="leal/bom">Leal / Bom</option>
                                <option value="neutro/bom">Neutro / Bom</option>
                                <option value="caotico/bom">Caótico / Bom</option>
                                <option value="leal/neutro">Leal / Neutro</option>
                                <option value="neutro">Neutro</option>
                                <option value="caotico/neutro">Caótico / Neutro</option>
                                <option value="leal/mal">Leal / Mal</option>
                                <option value="neutro/mal">Neutro / Mal</option>
                                <option value="caotico/mal">Caótico / Mal</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-azul-rpg w-100">Criar Personagem</button>
                </form>
            </div>
            <FooterMenu />
        </div>
    );
};

export default NewCharacterPage;
