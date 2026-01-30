let precio = 400000;
let cantidad = 0;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

precioSpan.innerHTML = precio;
cantidadSpan.innerHTML = cantidad;
totalSpan.innerHTML = 0;

const botones = document.querySelectorAll("button");
const btnMas = botones[0];
const btnMenos = botones[1];

// Botón +
btnMas.addEventListener("click", () => {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  totalSpan.innerHTML = cantidad * precio;
});

// Botón -
btnMenos.addEventListener("click", () => {
  if (cantidad > 0) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = cantidad * precio;
  }
});
