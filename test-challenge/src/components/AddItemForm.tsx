import React, { useState} from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { AddTaskType } from './types';

const AddItem = ({ addTask } : { addTask: AddTaskType}) => {
    const [ userInput, setUserInput ] = useState('');

    //TODO: Type of events shouldn't be any
    const handleChange = (e: any) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button><FaPlusCircle/></button>
        </form>
    );
}

export default AddItem;