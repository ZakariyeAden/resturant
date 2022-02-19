
  export default function menuPage(){
    const content = document.querySelector("#content");
    const menu = document.createElement('div');
    menu.setAttribute('class', 'my-tabs');
    menu.innerHTML =  ` 
  
   <section class="tab-content" id="menu">

      <div class="container">
        <h3 class="heading">Menu</h3>
          <div class="img-box">
            <img src="/dist/images/Menu.jpg" class="menu-img" alt="Menu">
          </div>
        </div>
          <footer id="footer">
            <a href=""target="_blank"><ion-icon name="logo-github" class="github-logo"></ion-icon></a>
          </footer>
      </section> 
    `
    content.appendChild(menu);
  }
  
  