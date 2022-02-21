
export default function contactPage(){
  const content = document.querySelector("#content");
  const contact = document.createElement('div');
  contact.setAttribute('class', 'tab-content');
  contact.innerHTML = `
  
      <section data-tab-content id="contact">
        <div class="container"> 
          <h3 class="heading">Contact Us</h3>
         <div class="grid-2cols">
           <div class="contact-info">
         
               <h4 class="subheading"><span><ion-icon name="accessibility-outline" class="icon"></ion-icon></span>Contact</h4>
               <div class="contacts">
                 <ion-icon name="location-outline" class="contact-icon"></ion-icon>
                 <span class="address">Minneapolis,Minnesota</span>
               </div>
         
               <div class="contacts">
                 <ion-icon name="call-outline" class="contact-icon"></ion-icon>
                  <a href="tel:6122222222" class="contact-link">6122222222</a>
               </div>
         
               <div class="contacts">
                 <ion-icon name="mail-outline" class="contact-icon"></ion-icon>
                 <a href="mailto:example@gmail.com"class="contact-link">example@gmail.com</a>
               </div>
             
           </div>
             <div class="hours">
               <h4 class="subheading"><span><ion-icon name="alarm-outline" class="icon"></ion-icon></span>Hours</h4>
               <ul>
                 <li>Monday:<span> 8:00am - 6:00pm</span></li>
                 <li>Tuesday:<span> 8:00am - 6:00pm</span></li>
                 <li>Wednesday:<span> 8:00am - 6:00pm</span></li>
                 <li>Thursday:<span> 8:00am - 6:00pm</span></li>
                 <li>Friday:<span> 8:00am - 6:00pm</span></li>
                 <li>Saturday:<span> Closed</span></li>
                 <li>Sunday:<span> Closed</span></li>
               </ul>
             </div>
         </div>
           <footer id="footer">
             <a href="https://github.com/ZakariyeAden/resturant-"target="_blank"><ion-icon name="logo-github" class="github-logo"></ion-icon></a>
           </footer> 
          </div>
      </section> 
  `
  content.appendChild(contact);
}
