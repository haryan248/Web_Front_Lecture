import React, { useState } from "react";
import TodoTable from "../Component/day4/TodoTable";
import "../style/TodoList.css";
import { nextStepIndex, createDataId } from "../util/pureFunc";
import { TYPES } from "../util/constantVal";
const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [priority, setPriority] = useState("normal");
    const [todoList, setTodoList] = useState([]);

    const handleSelectPriority = (e) => {
        setPriority(e.target.value);
    };

    const handleTodoInput = (e) => {
        setTodo(e.target.value);
    };

    const SaveBtnClick = () => {
        let date = new Date();
        const todoObject = {
            type: "todo",
            todo,
            priority,
            saveDate: date.toLocaleString(),
            dataId: createDataId(date),
        };
        setTodoList([...todoList, todoObject]);
        setTodo("");
        setPriority("normal");
    };

    const reset = () => {
        setTodoList([]);
        setTodo("");
        setPriority("normal");
    };

    const checkboxClick = (item) => {
        return (e) => {
            const nextIndex = nextStepIndex(item.type);
            let filterList = todoList.filter((todo) => todo.dataId !== item.dataId);
            setTodoList([...filterList, { ...item, type: TYPES[nextIndex] }]);
        };
    };

    return (
        <>
            <h1>TodoList</h1>
            <div className="form">
                <input type="text" name="title" onChange={handleTodoInput} value={todo} />
                <select name="priority" onChange={handleSelectPriority} value={priority}>
                    <option value="normal">일반</option>
                    <option value="high">높음</option>
                    <option value="low">낮음</option>
                </select>
                <button name="save" onClick={SaveBtnClick}>
                    저장
                </button>
                <button name="clear" onClick={reset}>
                    localStorage 초기화
                </button>
            </div>

            <TodoTable status="todo" list={todoList} checkboxClick={checkboxClick} />
            <TodoTable status="doing" list={todoList} checkboxClick={checkboxClick} />
            <TodoTable status="done" list={todoList} checkboxClick={checkboxClick} />
        </>
    );
};

export default TodoList;
