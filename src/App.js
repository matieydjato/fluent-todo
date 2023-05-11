import * as React from 'react';
import { Stack } from '@fluentui/react/lib/Stack';
import Form from './components/form/Form';
import TodoList from './components/todolist/TodoList';

// Styles definition
const outerStackStyles = {
  root: {
    background: '#faf9f8',
    height: '100vh',
    alignItems: 'center',
    display: 'flex',
  },
};

const innerStackStyles = {
  root: {
    background: '#ffffff',
    width: 450,
    height: 500,
    margin: 50,
    padding: 30
  }
}

function App() {
  return (
    <Stack enableScopedSelectors styles={outerStackStyles}>
      <Stack  styles={innerStackStyles}>
        <Form/>
        <TodoList/>
      </Stack>
    </Stack>
  );
}

export default App;
