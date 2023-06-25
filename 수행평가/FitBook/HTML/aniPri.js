const mainText = document.querySelector("h1")
window.addEventListener("scroll",function(){
    const value = window.scrollY;
    if(value>400){
        mainText.style.animation='disappear 1s ease-out forwards';
    }
    else{
        mainText.style.animation="slide 1s ease-out";
    }
})