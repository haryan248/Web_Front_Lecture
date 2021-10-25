export const todoInitialState = [];

export default function todoReducer(todoItems, action) {
    const { todoItem, id, title } = action;
    switch (action.type) {
        case "CREATE":
            return [...todoItems, todoItem];
        case "UPDATE":
            return todoItems.map((item) => (item.id === id ? { ...item, title } : item));
        case "UPDATE_STATUS":
            return todoItems.map((item) => (item.id === id ? { ...item, done: !item.done } : item));
        case "DELETE":
            return todoItems.filter((item) => item.id !== id);
        default:
            return todoItems;
    }
}
