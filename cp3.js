// Obtém o elemento checkbox
const checkbox = document.querySelector('.checkbox');

// Adiciona um listener de evento para o checkbox
checkbox.addEventListener('change', function() {
  // Obtém o elemento body
  const body = document.body;
  
  // Alterna a classe 'dark' no body
  body.classList.toggle('dark');

  // Verifica se o body possui a classe 'dark'
  const isDarkMode = body.classList.contains('dark');

  // Atualiza a imagem de fundo com base no modo
  if (isDarkMode) {
    body.style.backgroundImage = "url('https://images7.alphacoders.com/561/561443.jpg')";
    applyDarkModeStyles();
  } else {
    body.style.backgroundImage = "url('https://i.pinimg.com/originals/27/20/2d/27202db0746e9a95886da864f4e89b79.jpg')";
    applyLightModeStyles();
  }
});

// Função para aplicar estilos no modo claro
function applyLightModeStyles() {
  const form = document.querySelector('form');
  form.classList.remove('dark');

  const title = document.querySelector('h1');
  title.classList.remove('dark');

  const formElements = form.querySelectorAll('label, input[type="text"], input[type="email"], input[type="password"], button[type="submit"], .error');
  formElements.forEach(element => {
    element.classList.remove('dark');
  });
}

// Função para aplicar estilos no modo escuro
function applyDarkModeStyles() {
  const form = document.querySelector('form');
  form.classList.add('dark');

  const title = document.querySelector('h1');
  title.classList.add('dark');

  const formElements = form.querySelectorAll('label, input[type="text"], input[type="email"], input[type="password"], button[type="submit"], .error');
  formElements.forEach(element => {
    element.classList.add('dark');
  });
}

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordConfirmationValue = passwordConfirmation.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else if (usernameValue.length < 5) {
    setErrorFor(username, "O nome de usuário precisa ter no mínimo 5 caracteres.");
  } else {
    setSuccessFor(username);
  }
  
  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else if (emailValue.length < 5) {
    setErrorFor(email, "O email precisa ter no mínimo 5 caracteres.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 6 || passwordValue.length > 8) {
    setErrorFor(password, "A senha precisa ter entre 6 e 8 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");
  const errorMessages = form.querySelectorAll(".error-message");

  let formIsValid = true;

  formControls.forEach((formControl, index) => {
    if (formControl.classList.contains("error")) {
      formIsValid = false;
      errorMessages[index].style.visibility = "visible";
    } else {
      errorMessages[index].style.visibility = "hidden";
    }
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    const errorIcon = formControl.querySelector(".fa-exclamation-circle");
    const successIcon = formControl.querySelector(".fa-check-circle");
  
    // Adiciona a mensagem de erro
    small.innerText = message;
    small.style.color = "#e74c3c"; // Define a cor do texto para vermelho
  
    // Adiciona a classe de erro e remove a classe de sucesso
    formControl.classList.add("error");
    formControl.classList.remove("success");
  
    // Mostra o ícone de erro e esconde o ícone de sucesso
    errorIcon.style.color = "#e74c3c";
    successIcon.style.color = "transparent";
  
    // Exibe a mensagem de erro
    small.style.visibility = "visible";
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    const successIcon = formControl.querySelector(".fa-check-circle");
    const errorIcon = formControl.querySelector(".fa-exclamation-circle");
  
    // Adiciona a classe de sucesso e remove a classe de erro
    formControl.classList.add("success");
    formControl.classList.remove("error");
  
    // Mostra o ícone de sucesso e esconde o ícone de erro
    successIcon.style.color = "#2ecc71";
    errorIcon.style.color = "transparent";
  
    // Oculta a mensagem de erro
    const small = formControl.querySelector("small");
    small.style.visibility = "hidden";
  }
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }