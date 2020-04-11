document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.querySelector('#close');
  const flashCardAside = document.querySelector('.flashcard__aside');
  const openBtn = document.querySelector('.flashcard__aside__open');
  const overLay = document.querySelector('.overlay');
  closeBtn.addEventListener('click', () => {
    flashCardAside.style.msTransform = 'translateX(-100%)';
    flashCardAside.style.transform = 'translateX(-100%)';
    overLay.style.display = 'none';
    openBtn.style.display = 'block';
  });
  openBtn.addEventListener('click', () => {
    flashCardAside.style.msTransform = 'translateX(0)';
    flashCardAside.style.transform = 'translateX(0)';
    overLay.style.display = 'block';
    openBtn.style.display = 'none';
  });
  overLay.addEventListener('click', () => {
    flashCardAside.style.transform = 'translateX(-100%)';
    flashCardAside.style.msTransform = 'translateX(-100%)';
    overLay.style.display = 'none';
    openBtn.style.display = 'block';
  });
});
