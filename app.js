// Menú desplegable en móviles
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.getElementById('nav-links');

// Abrir el menú
mobileMenu.addEventListener('click', () => {
    navLinks.classList.add('active');
    mobileMenu.style.display = 'none';
    closeMenu.style.display = 'block';
});

// Cerrar el menú
closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
    closeMenu.style.display = 'none';
    mobileMenu.style.display = 'block';
});

// Aquí podrías agregar interactividad como efectos de transición o botones de expansión para más detalles
document.addEventListener('DOMContentLoaded', function () {
  console.log('Secciones cargadas correctamente');
});

function iniciartMap() {
  var cundinamarca = { lat: 4.8666, lng: -74.0504 };
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: cundinamarca
  });
  var marker = new google.maps.Marker({
      position: cundinamarca,
      map: map
  });
}
