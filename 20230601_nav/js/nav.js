const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];

console.log(navToggleI);
console.log(navListUl);
//.nav-toggle클릭하면
nav_toggle.onclick=()=>{
    //.nav-toggle i 햄버거메뉴 <-> X
    //클래스에서 bi-list <-> bi-x-lg
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");
    //.nav-list .show-menu toggle
    navListUl.classList.toggle("show-menu");
};



//HTML -> js요소를 가져오기 
//HTML -> js요소를 가져오는 방법
//1. id로 가져오기 (요소가 1개 )
  // const navToggleDiv = document.getElementById("nav-toggle"); //id를 통해서 문서에서 값을 가져오기(아이디는 한 문서에서 딱 1개/아이디로 갖고 온 것은 getElementById 이다.)
  // nav-toggle

//2. class로 가져오기 (요소가 여러개일 수 있다.)
   // const navToggleDiv = document.getElementsByClassName("nav-toggle"); //id를 통해서 문서에서 값을 가져오기(아이디는 한 문서에서 딱 1개/아이디로 갖고 온 것은 getElementById 이다.)

//3. Tag로 가져오기 
  //const navToggleDiv = document.getElementsByTagName("div")[0]; //태그로 값을 가져오기 [ ]안의 인덱스는 바뀔 수 있다. 인덱스는 몇번째 div를 가져올 것인지 

//4. CSS selector로 가져오기 
//단점: 느림
//  const navToggleDiv = document.querySelector("#nav-toggle"); //id값으로 가져오는 것처럼 하나만 있다. CSS 생성자로 가져오기 
//  const navToggleDiv2 = document.querySelectorAll(".nav-toggle")[0]; //리스트로 가져옴
//  const nav = document.querySelectorAll("div")[0];

//5. XPath로 가져오기 
// 브라우저에서 

//함수의 변천사]
/*
nav_toggle.onclick=alert("안녕"); 은 alert창의 리턴값을 되돌려준다. 
function sayHello(){
    alert("안녕");
}
sayHello(); //꼭 호출 해야 실행

 안녕이라는 창을 띄우는 함수를 실행한다. 
nav_toggle.onclick = sayHello; //클릭을 하면 sayHello()를 실행한다는 것을 기억하고 있어야하는데 ()를 붙이면 바로 실행된다. ()를 붙이지 않으면 이름만 알려주기 떄문에 기억하고만 있다가 누르면 실행한다. 

nav_toggle.onclick = function () { //이름 없는 함수 :  함수를 정의만 할 뿐 실행하지 않는다. 
    alert("안녕");
}
nav_toggle.onclick = () => { //람다식 위의 이름없는 함수의 형태와 똑같다. 
    alert("안녕");
};
 nav_toggle.onclick = () => alert("안녕"); 
 */
 //nav_toggle.onclick=()=>alert("안녕"); //안녕이라는 창을 띄우는 함수를 실행한다. 
