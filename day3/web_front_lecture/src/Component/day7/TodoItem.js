import React, { useState, useEffect, useRef } from "react";

export default function TodoItem({ todo, del, update, updateStatus }) {
    const [edit, setEdit] = useState(false);
    const inputElement = useRef();

    useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }, [edit]);
    return (
        <div className={`todoItem ${todo.done && "isDone"}`} onClick={() => updateStatus(todo.id)}>
            {edit ? (
                <input
                    type="text"
                    ref={inputElement}
                    defaultValue={todo.title}
                    onBlur={(e) => {
                        setEdit(false);
                        update(todo.id, e.target.value);
                    }}
                />
            ) : (
                <span className="title" onClick={() => setEdit(true)}>
                    {todo.title}
                </span>
            )}
            <button onClick={() => del(todo.id)}>삭제</button>
        </div>
    );
}
