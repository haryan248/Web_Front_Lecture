import { observable, action, makeObservable } from "mobx";
export class MemoStore {
    memoList = [];

    constructor() {
        makeObservable(this, {
            memoList: observable,
            createMemo: action,
            updateMemo: action,
            deleteMemo: action,
            saveDataInLocalStorage: action,
            getDataInLocalStorage: action,
        });
    }

    createMemo = (memoItem) => {
        this.memoList.push(memoItem);
        this.saveDataInLocalStorage();
    };

    saveDataInLocalStorage = () => {
        localStorage.setItem("memoList", JSON.stringify(this.memoList));
    };

    getDataInLocalStorage = () => {
        this.memoList = JSON.parse(localStorage.getItem("memoList")) === null ? [] : JSON.parse(localStorage.getItem("memoList"));
    };

    updateMemo = (id, title, desc, date) => {
        this.memoList = this.memoList.map((item) => (item.id === id ? { ...item, title, desc, date } : item));
        this.saveDataInLocalStorage();
    };

    deleteMemo = (id) => {
        this.memoList = this.memoList.filter((item) => item.id !== id);
        this.saveDataInLocalStorage();
        if (this.memoList.length === 0) {
            localStorage.removeItem("memoList");
        }
    };
}
