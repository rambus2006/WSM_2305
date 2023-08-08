/*과제 내용
url = https://gillog/post/1?tag=javascript&like=backend
let urlParameter = window.location.search;
//앞의 ?book= 부분 제거
let url=urlParameter.slice(6,);
// ?tag=javascript&like=backend
console.log(`bookId:`+ url);*/

//URL에 있는 book parameter 값 (string)
let url_href=window.location.href;   //브라우저 창에 있는 주소 
console.log(typeof url_href);
const bookId = new URL(url_href).searchParams.get("book"); //파라미터로 주고 객체로 준 것 searchParams/.get("book") ->book 인 것을 가져와라 
console.log(`bookId: ${bookId},type:${typeof bookId}`); //백틱 문법 "3",string
//---->string 을 number로 변환 :bookIdNumber
// 방법 1
// let bookIdNumber=Number(bookId); //string ->number
// 방법 2
let bookIdNumber = parseInt(bookId); //string ->nubmer
// 방법 3 (이런 문법은 쓰지 말기,코드를 보는 다른 사람들이 오해할 수 있음)
// let bookIdNumber = bookId*1; //string->number 곱할 때는 bookId가 string 에서 int로 바뀐다. 
// let bookIdNumber = bookId+0; //0이 문자열로 바뀐다. 
console.log(`bookIdNumber: ${bookIdNumber},type:${typeof bookIdNumber}`); //3,number

//books 에서 하나씩 꺼내어 bookIdNumber의 인덱스로 변환(Int)랑 꺼낸 book 의 id랑 같으면 데이터 빼자: bookData
//bookIdNumber:URL에서 가져온 id값 === books 하나씩 꺼낸 book의 id 값 
let bookData;
for (let bookData of books){ //books  중에 book을 꺼내와서 비교할꺼임
    if(bookIdNumber === book.id){ //[==과 ===의 차이: ==는 값을 비교하는 것, ===은 타입까지 비교하는 것]->회사에서는 ===까지 하는 것이 좋다.
        bookData = book; //id가 같으면,그놈을 꺼내서 bookData에 넣자 
        break;
    }
}
console.log(bookData);
//->title,author,publisher,bookImage 알아내자 
let title=bookData.title;
// let title=bookData.["title"];
let author=bookData.author;
let publisher=bookData.publisher;
let bookImage=bookData.img;
console.log(title,author,publisher,bookImage);

//->HTML 에 넣자
const titleDiv = document.getElementsByClassName("title")[1];
titleDiv.innerHTML = `<u>${title}</u>`; 
const publisherDiv = document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = publisher
const bookImageDiv = document.getElementsByClassName("book-image")[0];
titleDiv.innerHTML=`<img href="${bookImage}"/>`;
