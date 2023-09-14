// 이번달 
// 현재날짜, 시각 객체 만들자 
var now=new Date(); //12월 25일은 -1을 해줘야 12월이 나온다. (안그럼 1월이 나옴) 
// 현재 년
var year=now.getFullYear(); 
// 현재 월 
var month = now.getMonth()+1; //9월달은 8로 리턴해준다. -> +1을 해줘야 한다. 
// 현재 일 
var date = now.getDate(); 
console.log(now,year,month,date);
//< : 이전달 
//> : 이후달 

const setCalendar=(year,month) =>{
    // html에 있는 제목달 보여주자 
    //1. html ->js 요소 가져오기
    // const titleMonthDiv=document.getElementsByClassName("month");

    // //2. .inner =  `${month}월
    // titleMonthDiv.innerHTML=`${month}월`;
    // 1. HTML -> JS 요소 가져오기
    const titleMonthDiv = document.getElementsByClassName("month")[0]; // 인덱스 0으로 첫 번째 요소에 접근

    // 2. .innerText로 값을 설정
    titleMonthDiv.innerText = `${month}월`;

    //달력만들자 
    //해당 월의 1일이 무슨 요일 
    //직접 해본 내용
    // var currentDate = new Date();
    // currentDate.setDate(1);
    // var firstDateDay = currentDate.getDay();
    var firstDateDay = new Date(year,month-1,1).getDay();


    //해당 월의 마지막 날짜가 며칠?: 다음달의 1일 하루 전날(0일),전전날은 -1
    // 직접 해본 내용
    // currentDate.setMonth(currentDate.getMonth()+1,1);
    // currentDate.setDate(currentDate.getDate()-1);
    // var lastDate = currentDate.getDate();
    var lastDate = new Date(year,month-1+1,0).getDate();
    //dates.container의 자식으로 넣기 위한 과정(1)
    // const datesContainerDiv = document.getElementsByClassName("dates");
    const datesContainerDiv = document.querySelectorAll(".dates.container")[0]; //모든 것을 가져오도록 하게 함 

    console.log(firstDateDay);//5
    console.log(lastDate);//30

    //계속 날짜가 쌓이는 것을 없애주는 원래 있는 달력의 .date.item clear
    datesContainerDiv.replaceChildren();
    //.date.item{$}*lastDate
    //for 1~lastDate
    //var는 함수가 존재하는 영역
    //let은 중괄호에 존재하는 영역 
    for(let date=1;date<=lastDate;date++){
        //<div class="date item">date</div>
        let dateItemDiv = document.createElement("div"); //<div></div>태그 만드는 과정 
        // dateItemDiv.className="date item"; //이렇게 만드는 것도 가능하다 
        dateItemDiv.classList.add("date"); //<div class="date"></div>
        dateItemDiv.classList.add("item"); //<div class="date item"></div>
        dateItemDiv.innerHTML=date; //<div class="date item">날짜</div>
        //HTML에 .dates.container의 자식으로 넣기 위한 과정(2) 
        datesContainerDiv.appendChild(dateItemDiv);
    }
    //1일을 firstDateDay로 옮기자 
    //.dates.container의 자식 중 첫째자식(1일) style grid-column-start: day+1
    let firstDateDiv = datesContainerDiv.firstElementChild;
    //CSS { grid-column-start:firstDateDay+1;}
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;

    //토: 파랑 
    //여러개의 토요일 날짜가 리스트로 들어감 
    let saturdayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${7-firstDateDay})`); //토요일이 7일 간격
    for (let dateItem of saturdayDivs){ //하나씩 꺼내기 
        //color:blue를 표현하는 법 
        dateItem.style.color="blue"; //스타일링 
    }
    //일: 빨강 
    let sundayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${((7-firstDateDay)+1)%7})`); //일요일: 토요일 식 % 7
    for(let dateItem of sundayDivs){
        dateItem.style.color="red";
    }


}
//함수 호출 
setCalendar(year,month);
 
//html 에서 js로 가져오기 
const leftDiv = document.getElementsByClassName("left")[0];
const rightDiv = document.getElementsByClassName("right")[0];
//제목 누르면 현재 월로 오게 만들기 
const thisMonthDiv = document.getElementsByClassName("month")[0];
thisMonthDiv.onclick = () => {
    //앞에서 선언하면 지금의 날짜가 안나올 수 있기 때문에 지금 날짜구해줌 
    now=new Date();
    // 현재 년
    year=now.getFullYear(); 
    // 현재 월 
    month = now.getMonth()+1;
    setCalendar(year,month);
}

/*
1. 익명함수 생성 
- 함수를 호출하기만 하고, 실행시키면 안된다. (console.log(`${month}월`))을 쓰면 undefind라고 뜬다. 
-> 해결법: 람다 함수를 생성 (익명함수를 생성)
 leftDiv.addEventListener("click",()=>console.log(`${month}월`))
 leftDiv.addEventListener("click",function 함수명()=>console.log(`${month}월`))과 같은 원리이다. 함수를 다른 곳에서 
 쓰지 않을 꺼니까 익명함수를 썻다.

2.onclick 
요즘에는 짧게 이렇게 많이 쓴다.(시험문제 출제)
한줄짜리는 중괄호 안쓰고, 여러줄은 중괄호를 쓴다.*/ 
// < : 왼쪽 버튼을 눌렀을 때 월이 줄어드는 코드 
leftDiv.onclick = () => {
    month--;
    //날짜 객체를 만들어서 지정하여 꺼내는 방법
    let thisMonthDateObject = new Date(year,month-1);
    // if문으로 month가 0이면 바꾸게 하는법
    // if(month ==0){
    //     year--;
    //     month=12;
    // }
    year = thisMonthDateObject.getFullYear();
    month = thisMonthDateObject.getMonth()+1;
    setCalendar(year,month);
}
//람다함수(> : 이후달)
rightDiv.onclick = () => {
    month++;
    //1. 날짜 객체를 만들어서 지정하여 다시 꺼내 계산하는 법.
    // let thisMonthDateObject = new Date(year,month+1);
    //2. if 문으로 계산하여 출력하는 방법 
    if(month>12){
        year++;
        month=1;
    }
    setCalendar(year,month);

}
// console.log(`${month-1}월`);
// console.log(`${month+1}월`);


