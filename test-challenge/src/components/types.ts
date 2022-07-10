export type TodoItemType = {
    id: string,
    complete: boolean,
    task: string,
};

export type HandleToggleType = (id: string) => void;

export type AddTaskType = (userInput: string) => void;

export type HandleRemoveType = (itemId: string) => void;

export type ToDoListType = Array<TodoItemType>;