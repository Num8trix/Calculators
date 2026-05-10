function nav() {
  return `
  <nav>
    <div class="brand" onclick="location.href='index.html'">Num8trix</div>
    <div class="menu-toggle" onclick="toggleMenu()">
      <div></div><div></div><div></div>
    </div>
    <div class="links" id="navlinks">
      <a href="index.html">Home</a>
      <a href="matrix.html">Matrix</a>
      <a href="polynomial.html">Polynomial</a>
      <a href="factorization.html">Factor</a>
      <a href="equations.html">Equations</a>
    </div>
  </nav>`;
}

function toggleMenu() {
  document.getElementById("navlinks").classList.toggle("open");
}
