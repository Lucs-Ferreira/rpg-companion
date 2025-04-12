// src/scripts/newCharacterScripts.js
import { showMessage } from '../firebase/message';
/**
 * Rola um dado com base no valor vindo da classe (ex: 6, 8, 10, 12).
 * @param {number} diceValue - Valor do dado (ex: 10)
 * @returns {number} - Resultado da rolagem
 */
export const rollHitDice = (diceValue) => {
  if (!diceValue || isNaN(diceValue)) {
    showMessage("Classe selecionada não possui dado de vida válido.", "error");
    return '';
  }
  return Math.floor(Math.random() * diceValue) + 1;
};

export const rollMEDhitDice = (diceValue) => {
  if (!diceValue || isNaN(diceValue)) {
    showMessage("Classe selecionada não possui dado de vida válido.", "error");
    return '';
  }
  return Math.ceil(diceValue * 0.6);
};

export const rollMAXhitDice = (diceValue) => {
  if (!diceValue || isNaN(diceValue)) {
    showMessage("Classe selecionada não possui dado de vida válido.", "error");
    return '';
  }
  return diceValue;
};

/**
 * Gera pré-visualização da imagem localmente
 * @param {File} file - Imagem selecionada
 * @param {Function} setImage - Função do useState para atualizar a visualização
 */
export const previewImage = (file, setImage) => {
  const reader = new FileReader();
  reader.onload = () => setImage(reader.result);
  reader.readAsDataURL(file);
};

/**
 * Calcula os pontos já alocados para os atributos.
 * Cada atributo inicia com 8 pontos.
 * @param {Object} attributes - Objeto com os atributos (ex.: {Strength: 8, Dexterity: 8, ...})
 * @returns {number} Pontos alocados (soma de cada atributo - 8)
 */
export const getAllocatedPoints = (attributes) => {
  return Object.values(attributes).reduce((acc, curr) => acc + (curr - 8), 0);
};

/**
 * Calcula os pontos disponíveis para distribuir.
 * @param {number} totalPoints - Total de pontos disponíveis (ex.: 27)
 * @param {number} allocatedPoints - Pontos já alocados
 * @returns {number} Pontos restantes
 */
export const getAvailablePoints = (totalPoints, allocatedPoints) => {
  return totalPoints - allocatedPoints;
};

/**
 * Retorna um novo objeto de atributos com o atributo incrementado,
 * respeitando que o valor inicial mínimo é 8.
 * @param {Object} attributes - Objeto de atributos
 * @param {string} attr - Nome do atributo a incrementar
 * @returns {Object} Novo objeto com o atributo atualizado
 */
export const incrementAttribute = (attributes, attr) => {
  const newAttributes = { ...attributes };
  newAttributes[attr] = newAttributes[attr] + 1;
  return newAttributes;
};

/**
 * Retorna um novo objeto de atributos com o atributo decrementado,
 * não deixando que o valor caia abaixo de 8.
 * @param {Object} attributes - Objeto de atributos
 * @param {string} attr - Nome do atributo a decrementar
 * @returns {Object} Novo objeto com o atributo atualizado
 */
export const decrementAttribute = (attributes, attr) => {
  const newAttributes = { ...attributes };
  if (newAttributes[attr] > 8) {
    newAttributes[attr] = newAttributes[attr] - 1;
  }
  return newAttributes;
};