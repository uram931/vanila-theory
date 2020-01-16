// querySelector는 노드의 첫번째 자식을 반환한다
// const title = document.querySelector("#title");
// title.innerHTML = "Hi! From JS";
// title.style.color = "red";
// document.title = "oh my god!";
// console.dir(title);

// const title = document.querySelector("#title");

// function handleResize() {
//   console.log("I have been resized");
// }
// function handleResize(event) {
//   console.log(event);
// }
// window.addEventListener("resize",handleResize);는 내가 필요한 시점에 handleResize함수를 호출하는것
// window.addEventListener("resize",handleResize());는 즉시 handleResize함수를 호출하는것
// window.addEventListener("resize", handleResize);

///////////////////////////////////////////////////////////////////////
// function handleClick() {
//   title.style.color = "red";
// }

// title.addEventListener("click", handleClick);

// ==는 타입과 상관없이 비교하고 ===는 타입까지 비교한다
// if (10===5)) {
//   console.log("hi");
// } else {
//   console.log("bye");
// }

// 이벤트의 근원을 알고 싶으면 구글에 MDN을 검색해서 찾아볼것
// const title = document.querySelector("#title");

// const BASE_COLOR = "white";
// const OTHER_COLOR = "red";

// function handleClick() {
//   const currentColor = title.style.color;
//   if (currentColor === BASE_COLOR) {
//     title.style.color = "red";
//   } else {
//     title.style.color = "white";
//   }
// }

// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener("mouseenter", handleClick);
// }
// init();

// function handleOffline() {
//   console.log("fff");
// }

// window.addEventListener("offline", handleOffline);

//////////////////////////////////////////////////////
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  //   const hasClass = title.classList.contains(CLICKED_CLASS);
  //   if (!hasClass) {
  //     title.classList.add(CLICKED_CLASS);
  //   } else {
  //     title.classList.remove(CLICKED_CLASS);
  //   }

  title.classList.toggle(CLICKED_CLASS);
}
function init() {
  title.addEventListener("click", handleClick);
}
init();
