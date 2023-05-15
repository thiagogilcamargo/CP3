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

// Função para exibir o balão de dica com mensagem de erro
function showTooltip(inputElement, errorMessage) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = errorMessage;
  
    const parentElement = inputElement.parentNode;
    parentElement.appendChild(tooltip);
  }
  
  // Função para remover o balão de dica
function removeTooltip(inputElement) {
    const parentElement = inputElement.parentNode;
    const tooltip = parentElement.querySelector('.tooltip');
    if (tooltip) {
      parentElement.removeChild(tooltip);
    }
  }

// Função para validar o campo do primeiro nome
function validateFirstName() {
    const firstNameInput = document.getElementById('first-name');
    const firstNameValue = firstNameInput.value.trim();
  
    removeTooltip(firstNameInput);
  
    if (firstNameValue === '') {
      firstNameInput.classList.add('error');
      showTooltip(firstNameInput, 'O campo do primeiro nome não pode ser vazio.');
    } else if (firstNameValue.length < 5) {
      firstNameInput.classList.add('error');
      showTooltip(firstNameInput, 'O campo do primeiro nome deve ter no mínimo 5 caracteres.');
    } else {
      firstNameInput.classList.remove('error');
    }
  }

  // Adicionar evento de escuta ao campo do primeiro nome
const firstNameInput = document.getElementById('first-name');
firstNameInput.addEventListener('input', validateFirstName);

// Função para validar o campo do segundo nome
function validateLastName() {
    const lastNameInput = document.getElementById('last-name');
    const lastNameValue = lastNameInput.value.trim();
  
    removeTooltip(lastNameInput);
  
    if (lastNameValue === '') {
      lastNameInput.classList.add('error');
      showTooltip(lastNameInput, 'O campo do segundo nome não pode ser vazio.');
    } else if (lastNameValue.length < 5) {
      lastNameInput.classList.add('error');
      showTooltip(lastNameInput, 'O campo do segundo nome deve ter no mínimo 5 caracteres.');
    } else {
      lastNameInput.classList.remove('error');
    }
  }

  // Adicionar evento de escuta ao campo do segundo nome
const lastNameInput = document.getElementById('last-name');
lastNameInput.addEventListener('input', validateLastName);

// Função para validar o campo de e-mail
function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
  
    removeTooltip(emailInput);
  
    if (emailValue === '') {
      emailInput.classList.add('error');
      showTooltip(emailInput, 'O campo de e-mail não pode ser vazio.');
    } else if (emailValue.length < 5 || !emailValue.includes('@')) {
      emailInput.classList.add('error');
      showTooltip(emailInput, 'O campo de e-mail deve ter no mínimo 5 caracteres e conter o caractere "@".');
    } else {
      emailInput.classList.remove('error');
    }
  }
