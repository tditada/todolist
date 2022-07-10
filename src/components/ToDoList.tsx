import React from 'react';
import AddItem from './AddItemForm';
import ToDoItem from './ToDoItem';
import { AddTaskType, HandleToggleType, HandleRemoveType, TodoItemType, ToDoListType } from './types';

const ToDoList = ({ toDoList, handleToggle, addTask, handleRemove }: { toDoList: ToDoListType, handleToggle: HandleToggleType, addTask: AddTaskType, handleRemove: HandleRemoveType }) => {
    return (
        <div>
            {toDoList.map((item: TodoItemType) => {
                return (
                    <ToDoItem key={item.id} item={item} handleToggle={handleToggle} handleRemove={handleRemove} />
                )
            })}

            <AddItem addTask={addTask} />
        </div>
    );
};

export default ToDoList;