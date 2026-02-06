// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Popup functionality
const openPopupBtns = document.querySelectorAll('.open-popup-btn');
const popup = document.getElementById('popup1');
const closePopupBtn = popup.querySelector('.close-popup-btn');

openPopupBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popup.classList.add('active');
  });
});

closePopupBtn.addEventListener('click', () => {
  popup.classList.remove('active');
});

// Close popup on clicking outside content
popup.addEventListener('click', e => {
  if (e.target === popup) {
    popup.classList.remove('active');
  }
});