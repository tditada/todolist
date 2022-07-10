import axios from 'axios';
import React, {useState, useEffect} from 'react';
import AddItem from './AddItemForm';
import ToDoItem from './ToDoItem';
import { AddTaskType, HandleToggleType, HandleRemoveType, TodoItemType, ToDoListType, GetDataType } from './types';

const TODO_API = 'https://62c9e916d9ead251e8c237f0.mockapi.io/ToDoItem';

const ToDoList = () => {
    const [toDoList, setToDoList] = useState<ToDoListType>([]);
    // const [loading, setLoading] = useState<Boolean>(true);
    // const [error, setError] = useState<String | null>(null);
  
    const getData: GetDataType = async () => {
      try {
        const response = await axios.get(TODO_API);
        setToDoList(response.data);
        // setError(null);
      } catch (err: any) {
        // setError(err.message);
        setToDoList([]);
      } finally {
        // setLoading(false);
      }
    };
  
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
        getData();
      })
    }
  
    const handleRemove: HandleRemoveType = (id: string) => {
      axios.delete(`${TODO_API}/${id}`)
        .then(() => {
          getData();
        })
    }
  
    useEffect(() => {
      getData();
    }, []);
  
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