import React from 'react';
import styled from 'styled-components';
import { FaTrashAlt, FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { HandleRemoveType, HandleToggleType, TodoItemType } from './types';

const StyledToDoItem = styled.div<Pick<TodoItemType, 'complete'>>`
  text-decoration:  ${props => props.complete ? "line-through" : "none"};
  display: inline-block;
  margin-right: 1em;
`;

const StyledTrashIcon = styled(FaTrashAlt)`
    cursor: pointer;
    margin-left: 1em;
`

const StyledFaRegCheckCircle = styled(FaRegCheckCircle)`
    cursor: pointer;
    margin-right: 0.5em;
`;

const StyledFaRegCircle = styled(FaRegCircle)`
    cursor: pointer;
    margin-right: 0.5em;
`;

const ToDoItem = ({ item, handleToggle, handleRemove }: { item: TodoItemType, handleToggle: HandleToggleType, handleRemove: HandleRemoveType }) => {
    const { id, task, complete } = item;

    const handleClick = (e: any) => {
        console.log('handleClick', e.currentTarget);
        e.preventDefault();
        handleToggle(e.currentTarget.getAttribute("item-id"));
    }

    const handleRemoveClick = (e: any) => {
        e.preventDefault();
        handleRemove(e.currentTarget.getAttribute("item-id"));
    }

    return (
        <div id={id}>
            {complete ? <StyledFaRegCheckCircle item-id={id} onClick={handleClick} /> : <StyledFaRegCircle item-id={id} onClick={handleClick} />}
            <StyledToDoItem item-id={id} complete={complete} >
                {task}
                <StyledTrashIcon item-id={id} onClick={handleRemoveClick} />
            </StyledToDoItem>
        </div>

    );
};

export default ToDoItem;