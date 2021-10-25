// import { observable, action } from "mobx";
import { TodoStore } from "./TodoStore";
export class RootStore {
    todos;

    constructor() {
        this.todos = new TodoStore();
    }
}
