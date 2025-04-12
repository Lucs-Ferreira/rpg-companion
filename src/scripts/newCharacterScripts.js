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
  