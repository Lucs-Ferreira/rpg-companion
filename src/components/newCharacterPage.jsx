// src/pages/NewCharacterPage.jsx
import React, { useEffect, useState } from 'react';
import { getClasses } from '../firebase/classService';
import { getRaces } from '../firebase/racesService';

import '../styles/bootstrap.min.css';
import '../styles/MedievalSharp.css';
import '../styles/style.css';
import FooterCharacter from './FooterCharacter';
import { showMessage } from '../firebase/message';

import defaultImage from '../assets/images/silhueta.jpg';
import { 
  rollHitDice, 
  rollMEDhitDice, 
  rollMAXhitDice, 
  previewImage,
  getAllocatedPoints,
  getAvailablePoints,
  incrementAttribute,
  decrementAttribute
} from '../scripts/newCharacterScripts';

const NewCharacterPage = () => {
  // Estados básicos
  const [name, setName] = useState('');
  const [charClass, setCharClass] = useState('');
  const [level, setLevel] = useState(1);
  const [race, setRace] = useState('');
  const [classes, setClasses] = useState([]);
  const [races, setRaces] = useState([]);
  const [alignment, setAlignment] = useState('');
  const [background, setBackground] = useState('');
  const [hitDice, setHitDice] = useState('');

  const [imagePreview, setImage] = useState(null);

  // Estados para o distribuidor de atributos
  const totalAttributePoints = 27;
  const [attributes, setAttributes] = useState({
    Strength: 8,
    Dexterity: 8,
    Constitution: 8,
    Intelligence: 8,
    Wisdom: 8,
    Charisma: 8,
  });

  // Função de upload de imagem com preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      previewImage(file, setImage);
    }
  };

  // Buscando classes e raças do Firebase
  useEffect(() => {
    const fetchData = async () => {
      const classData = await getClasses();
      setClasses(classData);
      const racesData = await getRaces();
      setRaces(racesData);
    };

    fetchData();
  }, []);

  // Sempre que a classe selecionada mudar, atualiza o hitDice
  useEffect(() => {
    const selectedClass = classes.find((cls) => cls.description === charClass);
    if (selectedClass && selectedClass.hitDice) {
      setHitDice(selectedClass.hitDice.toString());
    }
  }, [charClass, classes]);

  // Função para rolar o dado, usando as funções do script modularizado
  const rollDiceHandler = (rollFunc) => {
    const selectedClass = classes.find((cls) => cls.description === charClass);
    if (!selectedClass) {
      showMessage("Selecione uma classe primeiro!", "error");
      return;
    }
    const rolled = rollFunc(selectedClass.hitDice);
    setHitDice(rolled.toString());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, charClass, level, race, alignment, background, hitDice, attributes });
    // Aqui você implementaria o envio dos dados para o banco
  };

  // Componente para distribuir os pontos de atributos
  const AttributesDistributor = ({ attributes, setAttributes, totalPoints }) => {
    const allocated = getAllocatedPoints(attributes);
    const available = getAvailablePoints(totalPoints, allocated);

    const handleIncrement = (attr) => {
      if (available > 0) {
        setAttributes(incrementAttribute(attributes, attr));
      } else {
        alert("Você não tem mais pontos disponíveis.");
      }
    };

    const handleDecrement = (attr) => {
      setAttributes(decrementAttribute(attributes, attr));
    };

    return (
      <div className="card p-3 mb-3">
        <h5>Distribua os pontos de atributo</h5>
        {Object.keys(attributes).map((attr) => (
          <div key={attr} className="d-flex align-items-center mb-2">
            <label className="me-2" style={{ width: '120px' }}>{attr}:</label>
            <button 
              type="button" 
              className="btn btn-sm btn-outline-secondary me-2" 
              onClick={() => handleDecrement(attr)}
            >-</button>
            <input 
              type="text" 
              readOnly 
              className="form-control form-control-sm text-center me-2" 
              style={{ maxWidth: '60px' }} 
              value={attributes[attr]} 
            />
            <button 
              type="button" 
              className="btn btn-sm btn-outline-secondary" 
              onClick={() => handleIncrement(attr)}
            >+</button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-custom">
      <div className="container py-4 animate__animated animate__fadeIn">
        <h1 className="text-center medieval-title mb-4">Novo Personagem</h1>
        <div className="row">
          <div className="col mb-3">
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
        </div>
        <div className="row">
          <div className="mb-4 col-5">
            <label htmlFor="image" className="form-label">Foto</label>
            <img
              src={imagePreview || defaultImage}
              alt="Pré-visualização do personagem"
              className="img-fluid rounded"
              style={{ maxWidth: '110%', maxHeight: '220px', objectFit: 'cover' }}
            />
            <div className="mt-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="form-control mt-2"
                style={{ maxWidth: '100%', margin: '0 auto' }}
              />
            </div>
          </div>
          <div className="col mb-3">
            <div className="col mb-1">
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
            <div className="col mb-1">
              <label htmlFor="class" className="form-label">Classe</label>
              <select
                id="class"
                className="form-select"
                value={charClass}
                onChange={(e) => {
                  setCharClass(e.target.value);
                  setHitDice('');
                }}
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
            <div className="row gx-1">
              <div className="col-4 mb-1">
                <label htmlFor="level" className="form-label">Nível</label>
                <input
                  type="text"
                  id="level"
                  className="form-control"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  required
                />
              </div>
              <div className="col-8 mb-1">
                <label htmlFor="hit-dice" className="form-label">Pontos de Vida</label>
                <input
                  type="text"
                  id="hit-dice"
                  className="form-control"
                  value={hitDice}
                  onChange={(e) => setHitDice(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row gx-1">
              <div className="d-flex gap-1">
                <button
                  type="button"
                  onClick={() => {
                    const selectedClass = classes.find(cls => cls.description === charClass);
                    if (!selectedClass) {
                      showMessage("Selecione uma classe primeiro!", "error");
                      return;
                    }
                    const rolled = rollHitDice(selectedClass.hitDice);
                    setHitDice(rolled.toString());
                  }}
                  className="btn btn-primary flex-fill"
                >
                  <i className="fa fa-dice-d20" alt="Rolar dados"></i>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const selectedClass = classes.find(cls => cls.description === charClass);
                    if (!selectedClass) {
                      showMessage("Selecione uma classe primeiro!", "error");
                      return;
                    }
                    const rolled = rollMEDhitDice(selectedClass.hitDice);
                    setHitDice(rolled.toString());
                  }}
                  className="btn btn-warning flex-fill"
                >
                  MED
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const selectedClass = classes.find(cls => cls.description === charClass);
                    if (!selectedClass) {
                      showMessage("Selecione uma classe primeiro!", "error");
                      return;
                    }
                    const rolled = rollMAXhitDice(selectedClass.hitDice);
                    setHitDice(rolled.toString());
                  }}
                  className="btn btn-success flex-fill"
                >
                  MAX
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Distribuidor de atributos */}
        <div id="atributes">
          <AttributesDistributor 
            attributes={attributes} 
            setAttributes={setAttributes} 
            totalPoints={totalAttributePoints} 
          />
        </div>
        {/* <form onSubmit={handleSubmit}>
          <div className="row gx-1">
            <div className="col-6 mb-3">
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
            <div className="col-4 mb-3">
              <label htmlFor="background" className="form-label">Antecedentes</label>
              <input
                type="text"
                className="form-control"
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-azul-rpg w-100">Criar Personagem</button>
        </form> */}
      </div>
      <FooterCharacter />
    </div>
  );
};

export default NewCharacterPage;
