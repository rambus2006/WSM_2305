let result_km;
// const button = document.getElementById('sub');
function api_result(){
    // 결과물 넣기 
    let travelplace = document.getElementById('travelplace');
    // let 변수이름 = document.createElement('태그');
    result_km_div = document.createElement('div');
    // 생성한 태그 변수.setAttribute('속성','값');
    result_km_div.setAttribute('class','result_km');

    let traveltime = document.getElementById('traveltime');
    // let 변수이름 = document.createElement('태그');
    result_time_div = document.createElement('div');
    // 생성한 태그 변수.setAttribute('속성','값');
    result_time_div.setAttribute('class','result_time');


    
    const endCode = document.getElementById('start_Code').value;
    let result_km;
    
    switch(endCode){
        case "ICN":
            result_km = 0;
            result_min = 0;
            break;
        case "DEL":
            result_km = 5014;
            result_min = 480;
            break;
        case "CUN":
            result_km = 7785;
            result_min = 155;
            break;
        case "IST":
            result_km = 2117;
            result_min = 600;
            break;
        case "HND":
            result_km = 942;
            result_min = 150;
            break;
        case "DCA":
            result_km = 10632;
            result_min = 815;
            break;
    }    
    //속성까지 부여해준 태그를 지정된 태그의 자식 태그로 넣는다
    travelplace.innerHTML=result_km + "km";
    traveltime.innerHTML=result_min + "분";

    travelplace.appendChild(result_km_div);
    traveltime.appendChild(result_time_div);
    
    // let api = window.location.href=("http://openapi.airport.co.kr/service/rest/serviceLine/serviceLines?schStDate=20230701&schEdDate=20230821&schLineType=D&ServiceKey=Q6T8IL7mtX3W3S5CWAuzMfd3UZM5SX3rKq3voJtXbrddHsCWKkdFsbym0PYogq9NKbsuskPi3YPIgsUFbnayeg%3D%3D");
    
};

function button(result_km){
    if(result_km==0){
        window.location.href="./burger.html?burgerId=1";
        
        
    }
};

