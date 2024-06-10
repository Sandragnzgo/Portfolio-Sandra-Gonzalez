const carrusel = document.querySelector(".carrusel-items");
const descriptionContainer = document.getElementById("description-container");
const descriptionText = document.getElementById("description-text");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;

const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

const items = document.querySelectorAll('.carrusel-item');

items.forEach(item => {
  item.addEventListener('mouseover', () => {
    const description = item.querySelector('.descripcion').textContent;
    descriptionText.textContent = description;
    descriptionContainer.style.display = 'block';
  });

  item.addEventListener('mouseout', () => {
    descriptionContainer.style.display = 'none';
  });
});

start();

var modal = document.getElementById("myModal");

// Obtener la imagen y el elemento modal
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en <span> (x), cerrar el modal
span.onclick = function () {
    modal.style.display = "none";
}

// También cerrar el modal cuando el usuario haga clic fuera de la imagen modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

