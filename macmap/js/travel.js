
let result_km;
// const button = document.getElementById('sub');
function api_result(){
    // 결과물 넣기 
    let travelplace = document.getElementById('travelplace');
    // let 변수이름 = document.createElement('태그');
    result_km_div = document.createElement('div');
    // 생성한 태그 변수.setAttribute('속성','값');
    result_km_div.setAttribute('class','result_km');

    

    
    const endCode = document.getElementById('start_Code').value;
    let result_km;
    
    switch(endCode){
        case "ICN":
            

            break;
        case "DEL":
            result_km = 5014;
            break;
        case "CUN":
            result_km = 7785;
            break;
        case "IST":
            result_km = 2117;
            break;
        case "HND":
            result_km = 942;
            result_min = 150;
            break;
        case "DCA":
            result_km = 10632;
            break;
    }    
    //속성까지 부여해준 태그를 지정된 태그의 자식 태그로 넣는다
    travelplace.innerHTML=result_km + "km";

    travelplace.appendChild(result_km_div);
  
    
    // let api = window.location.href=("http://openapi.airport.co.kr/service/rest/serviceLine/serviceLines?schStDate=20230701&schEdDate=20230821&schLineType=D&ServiceKey=Q6T8IL7mtX3W3S5CWAuzMfd3UZM5SX3rKq3voJtXbrddHsCWKkdFsbym0PYogq9NKbsuskPi3YPIgsUFbnayeg%3D%3D");
    
};

function button(result_km){
    if(result_km==0){
        window.location.href="./burger.html?burgerId=1";
        
        
    }
};
