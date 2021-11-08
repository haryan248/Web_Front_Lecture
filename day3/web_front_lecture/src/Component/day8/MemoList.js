import React, { useState, useEffect, useRef } from "react";
import MemoItem from "../../Component/day8/MemoItem";
import useStore from "../../hook/useStore";
import { observer } from "mobx-react";
import "../../style/MemoList.css";

const MemoList = () => {
    // mobx 사용
    const { memoList, createMemo, updateMemo, deleteMemo, getDataInLocalStorage } = useStore((store) => store.memos);

    const [memoTitleInput, setMemoTitleInput] = useState("");
    const [memoDescInput, setMemoDescInput] = useState("");
    const [errorList, setErrorList] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const inputTitleElement = useRef();
    const inputDescElement = useRef();

    const memoItemId = memoList.length === 0 ? 1 : memoList[memoList.length - 1].id + 1;

    useEffect(() => {
        getDataInLocalStorage();
    }, []);

    useEffect(() => {
        if (errorList.title) {
            inputTitleElement.current.focus();
        } else if (errorList.description) {
            inputDescElement.current.focus();
        } else if (Object.keys(errorList).length === 0 && isSubmitting) {
            createMemo({ id: memoItemId, title: memoTitleInput, desc: memoDescInput, date: new Date().toLocaleString() });
            reset();
        }
    }, [errorList]);

    const reset = () => {
        setMemoDescInput("");
        setMemoTitleInput("");
    };

    const create = () => {
        setErrorList(validate());
        setIsSubmitting(true);
    };

    const update = (id, title, desc, date) => {
        updateMemo(id, title, desc, date);
    };

    const del = (id) => {
        deleteMemo(id);
    };

    const validateTitle = () => {
        if (memoTitleInput.length === 0) {
            return "제목을 입력해주세요.";
        }
    };

    const validateDescription = () => {
        if (memoDescInput.length === 0) {
            return "내용을 입력해주세요.";
        }
    };

    const validate = () => {
        let errors = {};
        if (validateTitle()) errors.title = validateTitle();
        else if (validateDescription()) errors.description = validateDescription();
        return errors;
    };

    return (
        <div>
            <h2 className="memo_title">메모장 실습</h2>
            <div className="memo_input--container">
                <div>제목</div>
                <input
                    ref={inputTitleElement}
                    className="memo_title--input"
                    type="text"
                    placeholder="제목을 입력해주세요."
                    value={memoTitleInput}
                    onChange={(e) => setMemoTitleInput(e.target.value)}
                ></input>
                {errorList.title && <div className="memo_error">{errorList.title}</div>}
                <div className="desc">내용 </div>
                <textarea
                    ref={inputDescElement}
                    placeholder="내용을 입력해주세요."
                    rows="5"
                    cols="100"
                    value={memoDescInput}
                    onChange={(e) => setMemoDescInput(e.target.value)}
                ></textarea>
                {errorList.description && <div className="memo_error">{errorList.description}</div>}

                <div className="action-button save-button" onClick={create}>
                    저장
                </div>
            </div>
            <div className="memo-list--container">
                <h2>메모장 목록</h2>
                <div className="memo-list">
                    {memoList.map((memo) => {
                        return <MemoItem key={memo.id} memo={memo} del={del} update={update} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default observer(MemoList);
