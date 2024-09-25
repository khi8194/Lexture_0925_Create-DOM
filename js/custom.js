//innerHTML을 활용한 동적 DOM생성
const frame = document.querySelector("section");
const data = ["title1", "title2", "title3"];

//전체 태그 문자열이 담길 변수
let tags = "";

//배열을 반복돌면서 tags에 생성할 태그 문자열 쌓기
data.forEach((el) => {
	tags += `
    <article>
      <h1>${el}</h1>
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
  <button>CLOSE</button>
`;

//자식 요소까지 적용된 aside요소를 기존 자식 요소를 유지한 상태에서 추가
// frame.append(asideEl);
document.body.append(asideEl);
