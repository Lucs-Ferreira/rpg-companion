// src/firebase/message.js
export function showMessage(code, type) {
    const firebaseErrors = {
      "auth/email-already-in-use": "Este email já está cadastrado.",
      "auth/invalid-email": "O email informado é inválido.",
      "auth/weak-password": "A senha deve ter pelo menos 6 caracteres.",
      "auth/missing-password": "Por favor, informe uma senha.",
      "auth/missing-email": "Por favor, informe um email.",
      "auth/user-not-found": "O email informado é inválido.",
      "auth/wrong-password": "A senha informada é inválida.",
      "auth/invalid-credential": "Email ou senha incorretos",
    };
  
    const firebaseSuccess = {
      "register-success": "Bem vindo a Guilda!",
      "login-success": "Bem-vindo, aventureiro!",
      "reset-success": "Sua senha foi enviada por um sussurro!",
    };
  
    const isCustomMessage = !code.includes("auth/") && !firebaseSuccess[code];

  const message =
    isCustomMessage
      ? code
      : type === "success"
        ? firebaseSuccess[code] || "Operação realizada com sucesso!"
        : firebaseErrors[code] || "Algo deu errado. Tente novamente.";

  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");

  const modalContent = document.createElement("div");
  modalContent.classList.add(
    "modal-content",
    type === "success" ? "modal-success" : "modal-error"
  );
  modalContent.textContent = message;

  modalContainer.appendChild(modalContent);
  document.body.appendChild(modalContainer);

  setTimeout(() => {
    modalContainer.classList.add("fade-out");
    setTimeout(() => {
      modalContainer.remove();
    }, 500);
  }, type === "success" ? 2000 : 1000);
}
  