
 export default function navBar(){
  
  const content = document.querySelector("#content");

  const header = document.createElement("header");
  header.innerHTML = `
  <nav class="tabs">
  <h2 class="company-name">CoffeeLovers</h2>
  <a href="#" class="hamburger">
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
  </a>
  <ul class="links">
    <li class="is-active"><a href="#home" class="link--">Home</a></li>
    <li><a href="#menu" class="link--">Menu</a></li>
    <li><a href="#contact" class="link--">Contact</a></li>
  </ul>
</nav>`;

    content.appendChild(header)
 }