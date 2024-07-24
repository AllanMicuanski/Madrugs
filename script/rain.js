const rains = document.querySelectorAll(".rain");

const getRandonNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

rains.forEach((rain) => {
  // Adiciona um atraso aleatório para cada gota
  const delay = getRandonNumber(0, 1000);
  rain.style.animationDuration = `${getRandonNumber(1000, 2000)}ms`;
  rain.style.animationDelay = `${delay}ms`;
  rain.style.left = `${getRandonNumber(0, 100)}%`;
});
