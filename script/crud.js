// Funções CRUD
document
  .getElementById('crudForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const name = document.getElementById('crudName').value;
    const age = document.getElementById('crudAge').value;

    // Armazena dados no localStorage
    const data = JSON.parse(localStorage.getItem('crudData')) || [];
    data.push({ name, age });
    localStorage.setItem('crudData', JSON.stringify(data));

    // Limpa o formulário
    document.getElementById('crudName').value = '';
    document.getElementById('crudAge').value = '';

    // Atualiza a lista de dados
    loadStoredData();
  });

// Função para carregar dados armazenados
function loadStoredData() {
  const data = JSON.parse(localStorage.getItem('crudData')) || [];
  const dataList = document.getElementById('dataList');
  dataList.innerHTML = '';

  data.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `Nome: ${item.name}, Idade: ${item.age}`;
    dataList.appendChild(li);
  });
}

// Carregar dados ao carregar a página
window.addEventListener('DOMContentLoaded', loadStoredData);
