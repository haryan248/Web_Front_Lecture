// import { observable, action } from "mobx";
import { TodoStore } from "./TodoStore";
import { MemoStore } from "./MemoStore";
export class RootStore {
    todos;
    memos;

    constructor() {
        this.todos = new TodoStore();
        this.memos = new MemoStore();
    }
}
