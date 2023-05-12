import * as React from 'react';
import { Stack } from '@fluentui/react/lib/Stack';
import Form from './components/form/Form';
import TodoTab from './components/todotab/TodoTab';

// Custom styles for outer stack
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

// App component
function App() {
  return (
    <Stack enableScopedSelectors styles={outerStackStyles}>
      <Stack  styles={innerStackStyles}>
        <Form/>
        <TodoTab/>
      </Stack>
    </Stack>
  );
}

export default App;
