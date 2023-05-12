import React, { useContext, useState } from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
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
  
const Form = (props) => {
    const {addTodo, updateTodo} = useContext(TodoContext)
    const [newTodo, setNewTodo] = useState('');
    const [updatedTodo, setUpdatedTodo] = useState(props.isUpdating ? props.todo.value : '');

    const handleAddTodo = (event) => {
        event.preventDefault();
        addTodo(newTodo);
        setNewTodo('')
    }

    const handleUpdateTodo = (event) => {
        event.preventDefault();
        updateTodo(props.todo.id, updatedTodo);
        props.handleIsUpdating();
    }

    return (
        <>
            {!props.isUpdating ? (<form onSubmit={handleAddTodo}>
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
            </form>): 

            <form onSubmit={handleUpdateTodo}>
                <Stack horizontal styles={styles} tokens={tokens}>
                    <Stack.Item styles={inputStyles}>
                        <TextField 
                            placeholder='What do you need to do ?'
                            onChange={event => setUpdatedTodo(event.target.value)}
                            value={updatedTodo}
                            required
                        />      
                    </Stack.Item>

                    <Stack.Item>
                        <DefaultButton type='submit' text="Save"  allowDisabledFocus/>
                    </Stack.Item>
                </Stack>
            </form>
            }
        </>
    );
}

export default Form;