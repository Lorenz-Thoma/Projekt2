const img = document.getElementById('popupImage');
const modal = document.getElementById('imageModal');
const closeBtn = document.querySelector('.close');

img.onclick = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

closeBtn.onclick = () => {
  modal.style.display = 'none';
  document.body.style.overflow = "auto";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = "auto";
  }
};
