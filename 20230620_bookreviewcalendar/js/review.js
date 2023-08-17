//URL에 있는 book parameter 값(string): bookId
let url_href = window.location.href;        //브라우저 창에 있는 주소
const bookId = new URL(url_href).searchParams.get("book");
console.log(`bookId: ${bookId}, type: ${typeof bookId}`);   //"3", string
//20230817
//bookId가 null이면, index.html 로 가게 하기 
if(bookId == null){
    window.location.href="index.html"
    // window.open("index.html",target="_top"); //새로운 창 열어서 이동하는 문제 해결 

}

// -> string을 number로 변환: bookIdNumber
let bookIdNumber = parseInt(bookId);    //string->number
// let bookIdNumber = Number(bookId);  //string->number
// let bookIdNumber = bookId * 1;  //string->number
console.log(`bookIdNumber: ${bookIdNumber}, type: ${typeof bookIdNumber}`); //3, number

// -> books에서 하나씩 꺼내어 bookIdNumber랑 꺼낸 book의 id랑 같으면 데이터 빼자: bookData
//bookIdNumber: URL에서 가져온 id 값 === books 하나씩 꺼낸 book의 id 값
let bookData;
for (let book of books) {
    if (bookIdNumber === book.id) {
        bookData = book;        //id가 같으면, 그놈을 꺼내서 bookData에 넣자
        break;
    }
}
// -> title, author, publisher, bookImage 알아내자
//왜 안되는지 알아보기 -> title 변수 선언을 여러번 해서(민서 바보)
// let title = bookData.title;
// title=bookData.title;
let title = bookData["title"];
let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.img;
console.log(title, author, publisher, bookImage);

// -> HTML에 넣자
//HTML 요소 -> js 변수
const titleDiv = document.getElementsByClassName("title")[1];
titleDiv.innerHTML = `<u>${title}</u>`;
const authorDiv = document.getElementsByClassName("author")[1];
authorDiv.innerHTML = author;
const publisherDiv = document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = publisher;
const bookImageDiv = document.getElementsByClassName("book-image")[0];
bookImageDiv.innerHTML = `<img src="${bookImage}" />`
const readDateDiv= document.getElementsByClassName("read-date")[1];
let now = "2030년 8월 17일";
now = new Date(); //현재 날짜와 시각 객체 
let year=now.getFullYear(); 
let month = now.getMonth(); //8월이 7로 나와.즉, (실제 월)-1로 리턴되는 경우가 많다.  
let date=now.getDate(); //js에서는 요일로 이야기 하는 경우가 많다. 
let day;
let weeks=["일","월","화","수","목","금","토"];
day = weeks[day] + "요일";
readDateDiv.innerHTML = now
now = `${year}년 ${month+1}월 ${date}일 ${day}`; 
readDateDiv.innerHTML = now;

// let name = "최유진";
// console.log(`안녕, ${name}`);
// //java
// String name = "최유진";
// System.out.println("안녕, " + name);
// //c
// printf("안녕, %s", name);
// //python
// print("안녕, " + name)
// print(f"안녕, {name}")