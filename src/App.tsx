import React from 'react';
import styled from 'styled-components';
import Advice from './components/Advice';
import Footer from './components/Footer';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

const StyledApp = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {

  return (
    <StyledApp>
      <Header />
      <main>
        <Advice />
        <ToDoList />
      </main>
      <Footer />
    </StyledApp>
  );
}

export default App;
