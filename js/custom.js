//innerHTML을 활용한 동적 DOM생성
const frame = document.querySelector("section");
// const data = ["title1", "title2", "title3"];
const data = [
	{ text: "title", bg: "hotpink" },
	{ text: "title2", bg: "aqua" },
	{ text: "title3", bg: "orange" },
];

//전체 태그 문자열이 담길 변수
let tags = "";

//배열을 반복돌면서 tags에 생성할 태그 문자열 쌓기
/*
data.forEach((el) => {
	tags += `
    <article>
      <h1 class='tit'>${el}</h1>
    </article>
  `;
});
*/
data.forEach((el) => {
	tags += `
    <article>
      <h1 class='tit' data-bg=${el.bg}>${el.text}</h1>
    </article>
  `;
});

//section요소안에 최종적으로 DOM생성
frame.innerHTML = tags;

//aside라는 엘리먼트 노드를 직접 생성하고 클래스명, 텍스트 추가
const asideEl = document.createElement("aside");
asideEl.classList.add("modal");
asideEl.innerText = "Modal";

//aside요소 안쪽의 복잡한 자식 요소 구조는 innerHTML로 생성
asideEl.innerHTML = `
  <div class='con'></div>
  <button class='btnClose'>CLOSE</button>
`;

//동적으로 생성된 요소에 이벤트 연결은 이벤트위임 처리
//이벤트 위임: 항상 존재하는 body요소에 이벤트를 맡겼다가 위임처리
document.body.addEventListener("click", (e) => {
	//console.log(e.target);
	//내가 화면상에 클릭한 요소가 .tit클래스를 가진 요소일때에만 모달창 생성
	if (e.target.className === "tit") {
		document.body.append(asideEl);
		asideEl.style.backgroundColor = e.target.getAttribute("data-bg");
	}
});
//DOM요소를 완전히 제거 (DOM트리에서 제거)
document.body.addEventListener("click", (e) => {
	if (e.target.className === "btnClose") {
		document.querySelector(".modal").remove();
	}
});
