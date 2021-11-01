import React, { useState, useEffect, useRef } from "react";

export default function MemoItem({ memo, del, update }) {
    const [edit, setEdit] = useState(false);
    const [memoTitleUpdateInput, setMemoTitleUpdateInput] = useState(memo.title);
    const [memoDescUpdateInput, setMemoDescUpdateInput] = useState(memo.desc);

    return (
        <div className="memo-item">
            <div className="memo-item-content">
                <div className="register-date">최종 등록일 : {memo.date}</div>
                {edit ? (
                    <div>
                        <div>
                            제목 : <input type="text" value={memoTitleUpdateInput} onChange={(e) => setMemoTitleUpdateInput(e.target.value)} />
                        </div>
                        <div>
                            내용 :
                            <textarea rows="5" cols="40" value={memoDescUpdateInput} onChange={(e) => setMemoDescUpdateInput(e.target.value)} />
                        </div>
                        <div
                            className="action-button modify-button"
                            onClick={() => {
                                setEdit(false);
                                update(memo.id, memoTitleUpdateInput, memoDescUpdateInput, new Date().toLocaleString());
                            }}
                        >
                            수정 완료
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="title">제목 : {memo.title}</div>
                        <div className="desc">내용 : {memo.desc}</div>
                        <div className="action-button modify-button" onClick={() => setEdit(true)}>
                            수정
                        </div>
                    </div>
                )}
                <div className="action-button delete-button" onClick={() => del(memo.id)}>
                    삭제
                </div>
            </div>
        </div>
    );
}
