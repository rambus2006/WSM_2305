<<<<<<< HEAD
// burgerid 가져오는 것 
// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the value of 'burgerid' from the URL
const burgerId = urlParams.get('burgerid');
// burgerId가 null일 때 index로 돌아가기 
if(burgerId == null){
    window.location.href="index.html";
}
// url 뒤쪽에 붙어 있는 id int로 바꾸기 
let burgerIdtoint = parseInt(burgerId);
console.log(burgerIdtoint)

// id 가 같으면 데이터들을 변수에 넣기 
let selected;
for (let burgerdata of data) {
    if (burgerIdtoint == burgerdata.id) {
        selected = burgerdata;        //id가 같으면, 그놈을 꺼내서 bookData에 넣자
        break;
    }
}
//국가 이름 가져오는 코드 
// 태그 만들기 
let travel = document.getElementById('travel');
// let 변수이름 = document.createElement('태그');
let country = document.createElement('div');
// 생성한 태그 변수.setAttribute('속성','값');
country.setAttribute('class','country');
//속성까지 부여해준 태그를 지정된 태그의 자식 태그로 넣는다
travel.appendChild(country);
country.innerHTML=selected.country + "까지의 거리";

// 거리 가져오는 코드 
// let distancefromburger = document.getElementById('distance');
let distance=document.createElement('div');
distance.setAttribute('class','distance');
travel.appendChild(distance);
distance.innerHTML=selected.distance + "km";

let contents = document.getElementById("burger_list");
//버거 가져오는 코드 
for(let burger of selected.burger) {
    //div 만드는 코드 
    let burger_div = document.createElement('div');
    burger_div.setAttribute('class','burger_div');
    
    // console.log(burger) 
    // 버거1 이미지 만드는 코드 
    let burger1_img = document.createElement('img');
    let img=burger.img;
    burger1_img.setAttribute('src',img);
    burger_div.appendChild(burger1_img);
    burger1_img.innerHTML = burger.img;
    //버거 1 이름 불러와서 태그 만드는 코드 
    let burger1_name = document.createElement('div');
    burger1_name.setAttribute('class','burger_name');
    burger_div.appendChild(burger1_name);
    burger1_name.innerHTML = burger.name;
    //버거1 특징 불러와 태그 만들어 html 에 넣는 코드 
    let burger1_feature = document.createElement('div');
    burger1_feature.setAttribute('class','burger_feature');
    burger_div.appendChild(burger1_feature);
    burger1_feature.innerHTML = burger.feature;

    contents.appendChild(burger_div);
}

const idmove = document.getElementById("airplane");
idmove.addEventListener('click',()=>{
    location.href = `GetTour.html?burgerid=${burgerId}`;
});






=======
// burgerid 가져오는 것 
// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the value of 'burgerid' from the URL
const burgerId = urlParams.get('burgerid');
// burgerId가 null일 때 index로 돌아가기 
if(burgerId == null){
    window.location.href="index.html";
}
// url 뒤쪽에 붙어 있는 id int로 바꾸기 
let burgerIdtoint = parseInt(burgerId);
console.log(burgerIdtoint)

// id 가 같으면 데이터들을 변수에 넣기 
let selected;
for (let burgerdata of data) {
    if (burgerIdtoint == burgerdata.id) {
        selected = burgerdata;        //id가 같으면, 그놈을 꺼내서 bookData에 넣자
        break;
    }
}
//국가 이름 가져오는 코드 
// 태그 만들기 
let travel = document.getElementById('travel');
// let 변수이름 = document.createElement('태그');
let country = document.createElement('div');
// 생성한 태그 변수.setAttribute('속성','값');
country.setAttribute('class','country');
//속성까지 부여해준 태그를 지정된 태그의 자식 태그로 넣는다
travel.appendChild(country);
country.innerHTML=selected.country + "까지의 거리";

// 거리 가져오는 코드 
// let distancefromburger = document.getElementById('distance');
let distance=document.createElement('div');
distance.setAttribute('class','distance');
travel.appendChild(distance);
distance.innerHTML=selected.distance + "km";

let contents = document.getElementById("burger_list");
//버거 가져오는 코드 
for(let burger of selected.burger) {
    //div 만드는 코드 
    let burger_div = document.createElement('div');
    burger_div.setAttribute('class','burger_div');
    
    // console.log(burger) 
    // 버거1 이미지 만드는 코드 
    let burger1_img = document.createElement('img');
    let img=burger.img;
    burger1_img.setAttribute('src',img);
    burger_div.appendChild(burger1_img);
    burger1_img.innerHTML = burger.img;
    //버거 1 이름 불러와서 태그 만드는 코드 
    let burger1_name = document.createElement('div');
    burger1_name.setAttribute('class','burger_name');
    burger_div.appendChild(burger1_name);
    burger1_name.innerHTML = burger.name;
    //버거1 특징 불러와 태그 만들어 html 에 넣는 코드 
    let burger1_feature = document.createElement('div');
    burger1_feature.setAttribute('class','burger_feature');
    burger_div.appendChild(burger1_feature);
    burger1_feature.innerHTML = burger.feature;

    contents.appendChild(burger_div);
}

const idmove = document.getElementById("airplane");
idmove.addEventListener('click',()=>{
    location.href = `GetTour.html?burgerid=${burgerId}`;
});






>>>>>>> f1d49be0baeee418e7d0a378a819cb85dcc301dc
