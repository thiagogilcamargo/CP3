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

