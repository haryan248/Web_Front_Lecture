import React, { useState, useEffect } from "react";
import MemoItem from "../../Component/day8/MemoItem";
import useStore from "../../hook/useStore";
import { observer } from "mobx-react";
import "../../style/MemoList.css";

const MemoList = () => {
    // mobx 사용
    const { memoList, createMemo, updateMemo, deleteMemo, getDataInLocalStorage } = useStore((store) => store.memos);

    const [memoTitleInput, setMemoTitleInput] = useState("");
    const [memoDescInput, setMemoDescInput] = useState("");

    const memoItemId = memoList.length === 0 ? 1 : memoList[memoList.length - 1].id + 1;

    useEffect(() => {
        getDataInLocalStorage();
    }, []);

    const reset = () => {
        setMemoDescInput("");
        setMemoTitleInput("");
    };

    const create = () => {
        createMemo({ id: memoItemId, title: memoTitleInput, desc: memoDescInput, date: new Date().toLocaleString() });
        reset();
    };

    const update = (id, title, desc, date) => {
        updateMemo(id, title, desc, date);
    };

    const del = (id) => {
        deleteMemo(id);
    };

    return (
        <div>
            <h2>메모장 실습</h2>
            <div className="memo_input--container">
                <div>제목</div>
                <input
                    type="text"
                    placeholder="제목을 입력해주세요."
                    value={memoTitleInput}
                    onChange={(e) => setMemoTitleInput(e.target.value)}
                ></input>
                <div className="desc">내용 </div>
                <textarea
                    placeholder="내용을 입력해주세요."
                    rows="5"
                    cols="100"
                    value={memoDescInput}
                    onChange={(e) => setMemoDescInput(e.target.value)}
                ></textarea>
                <div className="action-button save-button" onClick={create}>
                    저장
                </div>
            </div>
            <h2>메모장 목록</h2>
            <div className="memo-list">
                {memoList.map((memo) => {
                    return <MemoItem key={memo.id} memo={memo} del={del} update={update} />;
                })}
            </div>
        </div>
    );
};

export default observer(MemoList);
