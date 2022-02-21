

  export default function menuPage(){
   
    const content = document.querySelector("#content");
    const menu = document.createElement('div');
    menu.setAttribute('class', 'tab-content');
    menu.innerHTML =  ` 
  
   <section data-tab-content id="menu">
      <div class="container menu-container">
        <h3 class="heading">Menu</h3>
           <div class="img-box">
              <img src="../dist/images/Menu.jpg" class="menu-img" alt="Menu">
            </div>
            <footer id="footer">
              <a href="https://github.com/ZakariyeAden/resturant-"target="_blank"><ion-icon name="logo-github" class="github-logo"></ion-icon></a>
            </footer>
        </div>
        </section> 
        `
         
          content.appendChild(menu);
        }
        
        