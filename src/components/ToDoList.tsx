import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import AddItem from './AddItemForm';
import { useGetRequest } from './helpers';
import ToDoItem from './ToDoItem';
import { AddTaskType, HandleToggleType, HandleRemoveType, TodoItemType, ToDoListType } from './types';

const TODO_API = 'https://62c9e916d9ead251e8c237f0.mockapi.io/ToDoItem';

const ToDoList = () => {
    const [ toDoList, setToDoList ] = useState<ToDoListType>([]); 
    const { isLoading, error, getData } = useGetRequest();
    
    const setTransformedList = useCallback((response: any) => { 
      setToDoList(response ? response.data : []); 
    }, []);

    const handleToggle: HandleToggleType = (id: string) => {
      let mapped = toDoList.map(task => {
        return task.id === id ? { ...task, complete: !task.complete } : { ...task };
      });
      setToDoList(mapped);
    }
  
    const addTask: AddTaskType = (userInput: string) => {
      axios.post(`${TODO_API}`, {
        task: userInput,
        completed: false,
      }).then(() => {
        getData(TODO_API, setTransformedList);
      })
    }
  
    const handleRemove: HandleRemoveType = (id: string) => {
      axios.delete(`${TODO_API}/${id}`)
        .then(() => {
          getData(TODO_API, setTransformedList);
        })
    }
  
    useEffect(() => {
      getData(TODO_API, setTransformedList);
    }, [getData, setTransformedList]);
  
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