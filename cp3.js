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
 
  
  
  
  
  
  