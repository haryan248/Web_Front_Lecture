const TextElement = document.querySelector("input[name=title]");
const SelectElement = document.querySelector("select[name=priority]");
const ButtonElement = document.querySelector("button[name=save]");

const TableTodo = document.getElementById("table_todo");
const TableDoing = document.getElementById("table_doing");
const TableDone = document.getElementById("table_done");

const PRIORITY = {
    normal: "일반",
    high: "높음",
    low: "낮음",
};
// 저장 버튼 이벤트 추가
ButtonElement.addEventListener("click", () => {
    // TextElement 값, SelectElement 값
    const contents = TextElement.value;
    const priority = SelectElement.value;

    // 테스크를 추가
    addTask(priority, contents);
    // 테스크 추가 이후
    reset();
});

// 초기화 함수
function reset() {
    TextElement.value = "";
    SelectElement.value = "normal";
}

// 할일 추가
function addTask(priority, contents) {
    const date = new Date();
    // console.log("TASK CREATE!!", { priority: PRIORITY[priority], contents, date });
    //
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");

    const checkBoxElement = document.createElement("input");
    checkBoxElement.type = "checkbox";
	td1.appendChild(checkBoxElement);

    td2.innerText = PRIORITY[priority];
    td3.innerText = contents;
    td4.innerText = date.toLocaleString();

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
	
	
	// 고유한 ID값을 줄 수 있을까?
	// 왜 리엑트에서 고유한 ID값을 어떻게 쓰는지?

    TableTodo.children[1].append(tr);
}
