// Smooth Scroll for Navigation
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Modal Functionality
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalText = document.getElementById('modal-text');

function openModal(content) {
  modalText.textContent = content;
  modal.style.display = 'flex';
}

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Scroll Animation
const animateOnScroll = () => {
  const elements = document.querySelectorAll('[data-animate]');
  const triggerHeight = window.innerHeight * 0.9;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerHeight) {
      el.classList.add('in-view');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

const matrixContainer = document.getElementById('matrix-animation');

// Generate random matrix characters
const createMatrixRain = () => {
  for (let i = 0; i < 100; i++) {
    const matrixChar = document.createElement('div');
    matrixChar.textContent = String.fromCharCode(0x30A0 + Math.random() * 96); // Random Unicode Katakana
    matrixChar.style.position = 'absolute';
    matrixChar.style.left = Math.random() * window.innerWidth + 'px';
    matrixChar.style.top = Math.random() * window.innerHeight + 'px';
    matrixChar.className = 'matrix-char';
    matrixChar.style.animationDuration = 2 + Math.random() * 3 + 's'; // Random speed
    matrixContainer.appendChild(matrixChar);
  }
};

createMatrixRain();

