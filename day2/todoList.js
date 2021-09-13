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
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    const doingCheckBoxElement = document.createElement("input");
    const doneCheckBoxElement = document.createElement("input");

    doingCheckBoxElement.type = "checkbox";
    doneCheckBoxElement.type = "checkbox";
    td1.appendChild(doingCheckBoxElement);
    td2.appendChild(doneCheckBoxElement);

    td3.innerText = PRIORITY[priority];
    td4.innerText = contents;
    td5.innerText = date.toLocaleString();

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    // 고유한 ID값을 줄 수 있을까?
    // 왜 리엑트에서 고유한 ID값을 어떻게 쓰는지?

    TableTodo.children[1].append(tr);
    doingCheckBoxElement.addEventListener("click", (e) => checkDoing(e, tr));
    doneCheckBoxElement.addEventListener("click", (e) => checkDone(e, tr));
}

function checkDoing(e, tr) {
    const doneCheckBox = tr.children[1].children[0].checked;
    tr.remove();
    if (e.target.checked === true) {
        doneCheckBox === true ? TableDone.children[1].append(tr) : TableDoing.children[1].append(tr);
    } else {
        doneCheckBox === true ? TableDone.children[1].append(tr) : TableTodo.children[1].append(tr);
    }
}

function checkDone(e, tr) {
    const doingCheckBox = tr.children[0].children[0].checked;
    tr.remove();
    if (e.target.checked === true) {
        TableDone.children[1].append(tr);
    } else {
        doingCheckBox === true ? TableDoing.children[1].append(tr) : TableTodo.children[1].append(tr);
    }
}
