import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Advice from './components/Advice';
import Footer from './components/Footer';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import { TodoItemType } from './components/types';

const StyledApp = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const TODO_API = 'https://62c9e916d9ead251e8c237f0.mockapi.io/ToDoItem';

//TODO: Test hook and component
//TODO: Typescript strict
//TODO: Redux/Pass state to children

function App() {
  const [toDoList, setToDoList] = useState<Array<TodoItemType>>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<String | null>(null);

  const getData = async () => {
    try {
      const response = await axios.get(TODO_API);
      setToDoList(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setToDoList([]);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = (id: string) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }

  const addTask = (userInput: string) => {
    axios.post(`${TODO_API}`, {
      task: userInput,
      completed: false,
    }).then(() => {
      getData();
    })
  }

  const removeTask = (id: string) => {
    axios.delete(`${TODO_API}/${id}`)
      .then(() => {
        getData();
      })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledApp>
      <Header />
      <main>
        <Advice />
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} addTask={addTask} handleRemove={removeTask} />
      </main>
      <Footer />
    </StyledApp>
  );
}

export default App;
