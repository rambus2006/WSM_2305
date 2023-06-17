const navbar_links = nav_toggle.getElementsByTagName("i")[0];
const navbar_menu = document.getElementsByClassName("nav_item")[0];

console.log(navbar_links);
console.log(navbar_menu);
//.nav-toggle클릭하면
nav_toggle.onclick=()=>{
    //.nav-toggle i 햄버거메뉴 <-> X
    //클래스에서 bi-list <-> bi-x-lg
    navbar_links.classList.toggle("bi-list");
    navbar_links.classList.toggle("bi-x-lg");
    //.nav-list .show-menu toggle
    navbar_menu.classList.toggle("show-menu");
};