import React, { useReducer, useState } from "react";
// import todoReducer, { todoInitialState } from "../../reducer/TodoReducer";
import TodoItem from "../../Component/day7/TodoItem";
import "../../style/TodoList.css";
import useStore from "../../hook/useStore";
import { observer } from "mobx-react";

const Todo = ({ title = "TodoList" }) => {
    // mobx 사용
    const { todoList, createTodo, updateTodo, delTodo, updateTodoStatus } = useStore((store) => store.todos);

    // useReducer 사용
    // const [todoList, todoDispatch] = useReducer(todoReducer, todoInitialState);
    const [todoInput, setTodoInput] = useState("");

    const todoItemId = todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;

    const create = () => {
        createTodo({ id: todoItemId, title: todoInput, done: false });
        // todoDispatch({
        //     type: "CREATE",
        //     todoItem: { id: todoItemId, title: todoInput, done: false },
        // });
    };

    const update = (id, title) => {
        updateTodo(id, title);
        // todoDispatch({ type: "UPDATE", id, title });
    };

    const del = (id) => {
        delTodo(id);
        // todoDispatch({ type: "DELETE", id });
    };
    const updateStatus = (id) => {
        console.log(id);
        updateTodoStatus(id);
        // todoDispatch({ type: "UPDATE_STATUS", id });
    };

    return (
        <div>
            {title}
            <div>
                <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)}></input>
                <button onClick={create}>추가</button>
            </div>
            <div>
                {todoList.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} del={del} update={update} updateStatus={updateStatus} />;
                })}
            </div>
        </div>
    );
};

export default observer(Todo);
