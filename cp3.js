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



// Função para validar o campo do primeiro nome
function validateFirstName() {
    const firstNameInput = document.getElementById('first-name');
    const firstNameValue = firstNameInput.value.trim();
  
    if (firstNameValue === '') {
      firstNameInput.classList.add('error');
    } else if (firstNameValue.length < 5) {
      firstNameInput.classList.add('error');
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
  
    if (lastNameValue === '') {
      lastNameInput.classList.add('error');
    } else if (lastNameValue.length < 5) {
      lastNameInput.classList.add('error');
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

  if (emailValue === '') {
    emailInput.classList.add('error');
  } else if (emailValue.length < 5 || !emailValue.includes('@')) {
    emailInput.classList.add('error');
  } else {
    emailInput.classList.remove('error');
  }
}

// Adicionar evento de escuta ao campo de e-mail
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', validateEmail);

// Função para validar o campo de senha
function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordValue = passwordInput.value;
  
    if (passwordValue === '') {
      passwordInput.classList.add('error');
    } else if (passwordValue.length < 6 || passwordValue.length > 8) {
      passwordInput.classList.add('error');
    } else {
      passwordInput.classList.remove('error');
    }
  }
  
  // Adicionar evento de escuta ao campo de senha
  const passwordInput = document.getElementById('password');
  passwordInput.addEventListener('input', validatePassword);

  // Função para validar o campo de confirmação de senha
function validateConfirmPassword() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const confirmPasswordValue = confirmPasswordInput.value;
  
    if (confirmPasswordValue === '') {
      confirmPasswordInput.classList.add('error');
    } else if (confirmPasswordValue !== passwordInput.value) {
      confirmPasswordInput.classList.add('error');
    } else {
      confirmPasswordInput.classList.remove('error');
    }
  }
  
  // Adicionar evento de escuta ao campo de confirmação de senha
  const confirmPasswordInput = document.getElementById('confirm-password');
  confirmPasswordInput.addEventListener('input', validateConfirmPassword);

  // Função para validar todos os campos do formulário
function validateForm(event) {
    event.preventDefault(); // Impede o envio do formulário se houver campos inválidos
  
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
  
    // Validar o campo do primeiro nome
    if (firstNameInput.value.trim() === '' || firstNameInput.value.length < 5) {
      firstNameInput.classList.add('error');
    } else {
      firstNameInput.classList.remove('error');
    }
  
    // Validar o campo do segundo nome
    if (lastNameInput.value.trim() === '' || lastNameInput.value.length < 5) {
      lastNameInput.classList.add('error');
    } else {
      lastNameInput.classList.remove('error');
    }
  
    // Validar o campo de e-mail
    if (
      emailInput.value.trim() === '' ||
      emailInput.value.length < 5 ||
      !emailInput.value.includes('@')
    ) {
      emailInput.classList.add('error');
    } else {
      emailInput.classList.remove('error');
    }
  
    // Validar o campo de senha
    if (
      passwordInput.value === '' ||
      passwordInput.value.length < 6 ||
      passwordInput.value.length > 8
    ) {
      passwordInput.classList.add('error');
    } else {
      passwordInput.classList.remove('error');
    }
  
    // Validar o campo de confirmação de senha
    if (confirmPasswordInput.value === '' || confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordInput.classList.add('error');
    } else {
      confirmPasswordInput.classList.remove('error');
    }
  } 
 
  // Verificar se há campos inválidos
  const invalidInputs = document.querySelectorAll('.error');

  if (invalidInputs.length > 0) {
    alert('Existem campos inválidos. Por favor, verifique novamente.');
  } else {
    // Alternar para o modo noturno
    const body = document.body;
    body.classList.toggle('dark');
    // Submeter o formulário
    form.submit();
  }

  
  // Adicionar evento de escuta ao formulário no momento do submit
  const form = document.getElementById('registration-form');
  form.addEventListener('submit', validateForm);
  
  
  
  
  
  
  
  