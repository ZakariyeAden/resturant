
 export default function navBar(){
  
  const content = document.querySelector("#content");

  const header = document.createElement("header");
  header.innerHTML = `
  
  <nav>
  <h2 class="company-name">Hamdi Cafe</h2>
  <a href="#" class="hamburger">
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
  </a>
  
  <ul class="links">
    <li data-tab-target="#home"><a href="" class="link--">Home</a></li>
    <li data-tab-target="#menu"><a href="" class="link--">Menu</a></li>
    <li data-tab-target="#contact"><a href="" class="link--">Contact</a></li>
  </ul>
  </nav>
  `
  ;
  content.appendChild(header);
}