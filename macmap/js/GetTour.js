
const urlParams = new URLSearchParams(window.location.search);

// Get the value of 'burgerid' from the URL
const burgerId = urlParams.get('burgerid');
// burgerId가 null일 때 index로 돌아가기 

// url 뒤쪽에 붙어 있는 id int로 바꾸기 
let burgerIdtoint = parseInt(burgerId);
console.log(burgerIdtoint)

// id 가 같으면 데이터들을 변수에 넣기 
let result;
for (let Tourestdata of Tourdata) {
    if (burgerIdtoint == Tourestdata.id) {
        result = Tourestdata;        //id가 같으면, 그놈을 꺼내서 bookData에 넣자
        break;
    }
}

// 국가 이름 가져오는 코드
let countrynamefromhtml = document.getElementById('countryname');

// let 변수이름 = document.createElement('태그');
let countryname = document.createElement('div');
// 생성한 태그 변수.setAttribute('속성','값');
countryname.setAttribute('class','country');
//속성까지 부여해준 태그를 지정된 태그의 자식 태그로 넣는다
countrynamefromhtml.appendChild(countryname);
countrynamefromhtml.innerHTML=result.country;

// 국가 지도 링크 가져오는 코드 
let countrymapfromhtml = document.getElementById('map');
let countrymap = document.createElement('iframe');
countrymap.setAttribute('src',result.map);
countrymapfromhtml.appendChild(countrymap);
countrymapfromhtml.innterHtml = result.map;

//국가 설명 
let descfromhtml = document.getElementById('desc');
let desc = document.createElement('div');
desc.setAttribute('id','desc');
descfromhtml.appendChild(desc);
descfromhtml.innerHTML = result.desc;

//관광지html id 가져오기 
let destination = document.getElementById('destination');



//관광지 정보 가져오는 코드 
let i=0;
for(let loaddata of result.destination){
    //div
    let destination_div = document.createElement("div");
    destination_div.setAttribute('class','destination_div');
    
    //관광지 이름 가져오는 태그 
    let destination_name = document.createElement("div");
    destination_name.setAttribute('class','destination_name');
    destination_div.appendChild(destination_name);
    destination_name.innerHTML = loaddata.name;
    
    //관광지 사진 가져오는 태그 
    let destination_img = document.createElement("img");
    let img = loaddata.img;
    destination_img.setAttribute('src',img);
    destination_div.appendChild(destination_img);
    destination_img.innerHTML = loaddata.img;
    
    
    destination.appendChild(destination_div);
    
}

