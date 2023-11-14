<<<<<<< HEAD
//URL에 있는 book parameter 값(string): bookId
let url_href = window.location.href;        //브라우저 창에 있는 주소
console.log(url_href);
const burgerid = new URL(url_href).searchParams.get("burgerid");
// null 일 때 index로 가져오기 
if(burgerid == null){
    window.location.href="index.html";
}
let burgeridint = parseInt(burgerid); 
=======
//URL에 있는 book parameter 값(string): bookId
let url_href = window.location.href;        //브라우저 창에 있는 주소
console.log(url_href);
const burgerid = new URL(url_href).searchParams.get("burgerid");
// null 일 때 index로 가져오기 
if(burgerid == null){
    window.location.href="index.html";
}
let burgeridint = parseInt(burgerid); 
>>>>>>> f1d49be0baeee418e7d0a378a819cb85dcc301dc
console.log(`burgeridint: ${burgerid}, type: ${typeof burgeridint}`);