import { observable, action, makeObservable } from "mobx";
export class TodoStore {
    todoList = [];

    constructor() {
        makeObservable(this, {
            todoList: observable,
            createTodo: action,
            updateTodo: action,
            delTodo: action,
            updateTodoStatus: action,
        });
    }
    createTodo = (todoItem) => {
        this.todoList.push(todoItem);
    };
    updateTodo = (id, title) => {
        this.todoList = this.todoList.map((item) => (item.id === id ? { ...item, title } : item));
    };
    delTodo = (id) => {
        this.todoList = this.todoList.filter((item) => item.id !== id);
    };
    updateTodoStatus = (id) => {
        this.todoList = this.todoList.map((item) => (item.id === id ? { ...item, done: !item.done } : item));
    };
}
