// let name = "최유진";
// console.log(`안녕, ${name}`);

// const bookId = "1"
// console.log(`bookId:${bookId}`); 

const parameter = new URLSearchParams(location.search);
console.log(parameter);
//URL에 있는 book parameter 값(String) -> books의 인덱스로 변환(String을 int로 변환)->-1 
//해야 books의 데이터 값을 자동으로 가져올 수 있다. 
index=parseInt(parameter)-1;
const bookTitle = books[index].title;
console.log(`bookTitle: ${bookTitle}`)