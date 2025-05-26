// carrito.js

// Obtener el carrito desde localStorage o crear uno vacío
function obtenerCarrito() {
  return JSON.parse(localStorage.getItem('carrito')) || [];
}

// Guardar carrito en localStorage
function guardarCarrito(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Actualizar contador en el menú
function actualizarContadorCarrito() {
  const carrito = obtenerCarrito();
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  const linkCarrito = document.getElementById('link-carrito');
  if (linkCarrito) {
    linkCarrito.textContent = `Carrito (${totalItems})`;
  }
}

// Agregar producto al carrito
function agregarAlCarrito(producto) {
  let carrito = obtenerCarrito();
  const index = carrito.findIndex(item => item.id === producto.id);
  if (index !== -1) {
    // Ya existe, aumenta cantidad
    carrito[index].cantidad += 1;
  } else {
    // Nuevo producto
    carrito.push({...producto, cantidad: 1});
  }
  guardarCarrito(carrito);
  actualizarContadorCarrito();
  alert(`Mi Tiendita dice: Agregaste "${producto.nombre}" al carrito.`);
}

// Iniciar eventos para botones "Agregar al carrito"
function initAgregarCarrito() {
  const botones = document.querySelectorAll('.agregar-carrito');
  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const productoDiv = btn.closest('.producto') || btn.closest('.producto-oferta');
      if (!productoDiv) return;
      const precio = parseFloat(productoDiv.dataset.precio);
      if (isNaN(precio)) {
        alert("Error: Precio inválido para este producto.");
        return;
      }
      const producto = {
        id: productoDiv.dataset.id,
        nombre: productoDiv.dataset.nombre,
        precio: precio
      };
      agregarAlCarrito(producto);
    });
  });
}

// Al cargar la página:
document.addEventListener('DOMContentLoaded', () => {
  actualizarContadorCarrito();
  initAgregarCarrito();
});