import React, { useContext, useState } from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { TodoContext } from '../../context/TodoContext';

const styles = {
    root: {
      width: '100%',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    },
};

const tokens = {
    childrenGap: 10,
}

const inputStyles = {
     root: { width: 300 },
};
  
const Form = () => {
    const {addTodo} = useContext(TodoContext)
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = (event) => {
        event.preventDefault();
        addTodo(newTodo);
        setNewTodo('')
    }

    return (
        <form onSubmit={handleAddTodo}>
            <Stack horizontal styles={styles} tokens={tokens}>
                <Stack.Item styles={inputStyles}>
                    <TextField 
                        placeholder='What do you need to do ?'
                        onChange={event => setNewTodo(event.target.value)}
                        value={newTodo}
                        required
                    />      
                </Stack.Item>

                <Stack.Item>
                    <PrimaryButton type='submit' text="Add"  allowDisabledFocus/>
                </Stack.Item>
            </Stack>
        </form>
    );
}

export default Form;