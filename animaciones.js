// Animaciones y navegación entre secciones

// Obtener referencias a los links del menú
const linkInicio = document.getElementById('menu-inicio');
const linkProductos = document.getElementById('menu-productos');
const linkOfertas = document.getElementById('menu-ofertas');
const linkContacto = document.getElementById('menu-contacto');

// Obtener referencias a las secciones
const seccionProductos = document.getElementById('seccion-productos');
const seccionOfertas = document.getElementById('seccion-ofertas');

// Funciones para mostrar/ocultar secciones
function mostrarInicio() {
  seccionProductos.style.display = 'block';
  seccionOfertas.style.display = 'none';
}

function mostrarProductos() {
  seccionProductos.style.display = 'block';
  seccionOfertas.style.display = 'none';
}

function mostrarOfertas() {
  seccionProductos.style.display = 'none';
  seccionOfertas.style.display = 'block';
  seccionOfertas.scrollIntoView({ behavior: 'smooth' });
}

function mostrarContacto() {
  // Aquí puedes agregar comportamiento para contacto si quieres
  alert('Sección Contacto no implementada aún.');
}

// Asignar eventos
linkInicio.addEventListener('click', (e) => {
  e.preventDefault();
  mostrarInicio();
});

linkProductos.addEventListener('click', (e) => {
  e.preventDefault();
  mostrarProductos();
});

linkOfertas.addEventListener('click', (e) => {
  e.preventDefault();
  mostrarOfertas();
});

linkContacto.addEventListener('click', (e) => {
  e.preventDefault();
  mostrarContacto();
});

// Mostrar sección productos por defecto al cargar la página
mostrarInicio();
