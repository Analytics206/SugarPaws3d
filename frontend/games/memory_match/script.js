const images = [
  'model1.png', 'model2.png', 'model3.png', 'model4.png',
  'model1.png', 'model2.png', 'model3.png', 'model4.png'
];

let firstCard = null;
let secondCard = null;
let matched = 0;

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function createCard(imageSrc) {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = 'images/' + imageSrc;

  card.appendChild(img);

  card.addEventListener('click', () => {
    if (img.style.display === 'block' || secondCard) return;

    img.style.display = 'block';

    if (!firstCard) {
      firstCard = {card, img, imageSrc};
    } else {
      secondCard = {card, img, imageSrc};
      checkMatch();
    }
  });

  return card;
}

function checkMatch() {
  setTimeout(() => {
    if (firstCard.imageSrc === secondCard.imageSrc) {
      matched += 1;
      if (matched === images.length / 2) {
        document.getElementById('win-message').hidden = false;
      }
    } else {
      firstCard.img.style.display = 'none';
      secondCard.img.style.display = 'none';
    }
    firstCard = null;
    secondCard = null;
  }, 800);
}

function setupGame() {
  const board = document.getElementById('game-board');
  board.innerHTML = '';
  matched = 0;
  const shuffledImages = shuffle(images.slice());
  shuffledImages.forEach(img => {
    board.appendChild(createCard(img));
  });
}

setupGame();