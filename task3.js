window.addEventListener("scroll",function(){
    var header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0)
})
/*========================show Menu======================*/
const navMenu=document.getElementById('nav--menu'),
      navToggle=document.getElementById('navToggle'),
      navClose=document.getElementById('nav--navClose')
/*Menu show*/
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}
/*Menu Hidden*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
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
 const navLink=document.querySelectorAll('.nav-link')
 const linkAction=() =>{
    const navMenu=document.getElementById('nav--menu')
    navMenu.classList.remove('show-menu')  
 }


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


