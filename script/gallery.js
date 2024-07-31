// Abre o modal para visualização de imagem
function openModal(element) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const captionText = document.getElementById('caption');

  modal.style.display = 'flex';
  modalImg.src = element.src;
  captionText.innerHTML = element.alt;
}

// Fecha o modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Adiciona ou remove imagem dos favoritos
function toggleFavorite(event, button) {
  event.stopPropagation(); // Evita que o clique no botão abra o modal
  const img = button.previousElementSibling;
  const imgSrc = img.src;

  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (favorites.includes(imgSrc)) {
    favorites = favorites.filter((src) => src !== imgSrc);
    button.classList.remove('favorito');
  } else {
    favorites.push(imgSrc);
    button.classList.add('favorito');
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
  displayFavorites();
}

// Exibe as imagens favoritas na galeria de favoritos
function displayFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const favoritesContainer = document.getElementById('favorites');

  favoritesContainer.innerHTML = '';
  favorites.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Imagem Favorita';

    const div = document.createElement('div');
    div.classList.add('gallery-item');
    div.appendChild(img);

    favoritesContainer.appendChild(div);
  });
}

// Inicializa a exibição de favoritos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  displayFavorites();

  // Marcar favoritos na galeria principal
  document.querySelectorAll('.gallery-item').forEach((item) => {
    const img = item.querySelector('img');
    const favoriteButton = item.querySelector('.favorite-btn');
    if (favoriteButton) {
      const imgSrc = img.src;
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      if (favorites.includes(imgSrc)) {
        favoriteButton.classList.add('favorito');
      }
    }
  });
});

// Adiciona evento de clique ao botão Voltar
document.getElementById('backButton').addEventListener('click', () => {
  window.location.href = 'index.html'; // Substitua 'index.html' pelo caminho correto da sua página de login, se necessário
});
