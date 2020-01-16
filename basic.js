/*eslint-env browser*/
// 자바스크립트는 좋지 않은 문법을 사용해도 그에 대해 잘 알려주지 않는다
// 각각의 라인(문장)들을 Expressions라고 칭한다
// 모든 expression은 한줄에 있어야 하며,모든 instruction 또한 한줄에 있어야 한다
// 변수 >>>생성,초기화,사용
// let은 수학적 상태를 의미한다, 변수를 초기화하거나 생성할때에는 let을 써야 한다
// alert("Im Working");
// const=constant
// 변수를 선언할때는 기본으로 const사용하고 필요하면 let으로 바꿀것
console.log("Im working");
let a = 10;
let b = a - 5;
a = 4;
console.log(b, a);

//String
const what = "choi";
console.log(what);

// Boolean
const wat = true;

// Number
const wats = 666;

// 변수에 띄워쓰기가 필요한 경우 바로 다음에오는 글자를 대문자로 대신하여 처리
const dayOfWeek = 0;

// 데이터 정렬 방식에는 Array , Object 가 있다
// 만약 DB에서 가져온 리스트 데이터라면,Array를 선택하고,
// object나 Array 서로서로 호출할수 있다
// 배열은 우변에 []사이에 값을 넣어주면 된다.
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(daysOfWeek[2]);

// Object는 우변에 {}(=컬리브라켓) 사용하면 된다
const nicoInfo = {
  name: "Nico",
  age: 33,
  gender: "Male",
  from: "Seoul"
};
console.log(nicoInfo.gender);

// nicoInfo안에 값을 바꿀 수 있다
nicoInfo.gender = "female";
console.log(nicoInfo.gender);
console.log(nicoInfo);

//함수
function sayhello(argument) {
  console.log("\nhello", argument);
}

sayhello("potato");

//위의 방식의 함수는 비효율적이라서 ``(=백틱)을 이용해서 구성
function sayhi(name, age) {
  console.log(`Hello ${name} you are ${age} years old`);
  return name;
}

const greethi = sayhi("choi", 22);
console.log(greethi);

const calculator = {
  plus: function(a, b) {
    return a + b;
  }
};
const plus = calculator.plus(5, 5);
console.log(plus);
