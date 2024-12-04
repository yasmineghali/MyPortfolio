// Scroll sections active link
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    // Check if the current scroll position is within the section
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + '] span').classList.add('active-link');
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + '] span').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

// hamburger menu function
const  body = document.querySelector("body");
const  nav = document.querySelector(".nav");
const  menu = document.querySelector(".nav_menu");
const  menuBtn = document.querySelector(".menu_bar");
const  cancelBtn = document.querySelector(".cancel_bar");

         menuBtn.onclick = () =>{
             menu.classList.add("active");
             menuBtn.classList.add("hide");
             body.classList.add("disabledScroll");
         }
         cancelBtn.onclick = () =>{
            menu.classList.remove("active");
            menuBtn.classList.remove("hide");
            body.classList.remove("disabledScroll");
        }


// hide menu onclick
        const navLink = document.querySelectorAll('.nav__link');
        navLink.forEach(n => n.addEventListener('click', () =>{
              const  menu = document.querySelector(".nav_menu");
              const  menuBtn = document.querySelector(".menu_bar");
              const  body = document.querySelector("body");

              menu.classList.remove("active");
            menuBtn.classList.remove("hide");
            body.classList.remove("disabledScroll");
        }));


//  stikcy navbar
        window.onscroll = () =>{
           if ( this.scrollY > 100) {
                nav.classList.add("sticky");
        }
        else{
            nav.classList.remove("sticky");
        }
        }



        
// Sélection des éléments
let scrollContainer = document.querySelector(".con");
let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");


function scrollHorizontally(direction) {
    scrollContainer.scrollLeft += direction * 100; 
}
// Ajout des événements de clic sur les boutons
rightBtn.addEventListener("click", () => {
    scrollHorizontally(1); // Défile vers la droite
});

leftBtn.addEventListener("click", () => {
    scrollHorizontally(-1); // Défile vers la gauche
});
 /*======================Remove Menu Mobile====================*/
//  const navLink=document.querySelectorAll('.nav-link')
//  const linkAction=() =>{
//     const navMenu=document.getElementById('nav--menu')
//     navMenu.classList.remove('show-menu')  
//  }


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


