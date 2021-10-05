import React from "react";

const TodoTable = ({ status, list, checkboxClick }) => {
    return (
        <>
            <div className="list">
                <div className="list_title"> {status.toUpperCase()} </div>
                <table id="table_doing">
                    <thead>
                        <tr>
                            <th>체크박스</th>
                            <th>우선순위</th>
                            <th>내용</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list &&
                            list.map((item, key) => {
                                const checkBoxHandler = checkboxClick(item);
                                return (
                                    item.type === status && (
                                        <tr key={key}>
                                            <td>
                                                {status !== "done" ? (
                                                    <input type="checkbox" value={status} onClick={checkBoxHandler} />
                                                ) : (
                                                    <input disabled type="checkbox" value={status} onClick={checkBoxHandler} />
                                                )}
                                            </td>
                                            <td>{item.priority}</td>
                                            <td>{item.todo}</td>
                                            <td>{item.saveDate}</td>
                                        </tr>
                                    )
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default TodoTable;
