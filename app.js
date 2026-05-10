// Navigation component
function nav() {
return `

  <nav>
    <div class="brand">Num8trix</div>
    <div class="menu-toggle" onclick="toggleMenu()">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="links" id="navLinks">
      <a href="index.html">Home</a>
      <a href="matrix.html">Matrix</a>
      <a href="polynomial.html">Polynomial</a>
      <a href="factorization.html">Factorization</a>
      <a href="equations.html">Equations</a>
    </div>
  </nav>
  `;
}

// Toggle mobile menu
function toggleMenu() {
const links = document.getElementById(‘navLinks’);
const toggle = document.querySelector(’.menu-toggle’);
links.classList.toggle(‘active’);
toggle.classList.toggle(‘active’);
}

// Close menu when clicking outside
document.addEventListener(‘click’, (e) => {
const links = document.getElementById(‘navLinks’);
const toggle = document.querySelector(’.menu-toggle’);
if (links && !e.target.closest(‘nav’)) {
links.classList.remove(‘active’);
if (toggle) toggle.classList.remove(‘active’);
}
});

// Close menu when link is clicked (mobile)
function closeMenuOnClick() {
const links = document.querySelectorAll(’.links a’);
links.forEach(link => {
link.addEventListener(‘click’, () => {
const navLinks = document.getElementById(‘navLinks’);
const toggle = document.querySelector(’.menu-toggle’);
if (window.innerWidth <= 768) {
navLinks.classList.remove(‘active’);
if (toggle) toggle.classList.remove(‘active’);
}
});
});
}

// Initialize after DOM loads
document.addEventListener(‘DOMContentLoaded’, closeMenuOnClick);