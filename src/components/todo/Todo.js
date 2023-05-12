import React, { useContext, useState } from 'react';
import { Checkbox, Stack } from '@fluentui/react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Icon } from '@fluentui/react/lib/Icon';
import { TodoContext } from '../../context/TodoContext';
import Form from '../form/Form';

// Initialize  and get fluent icons
initializeIcons();
const EditIcon = () => <Icon iconName="Edit" />;
const DeleteIcon = () => <Icon iconName="Cancel" />;

// Todo component
const Todo = (props) => {
    const {deleteTodo, setDone} = useContext(TodoContext); // Get properties from todo context
    const [isUpdating, setIsUpdating] = useState(false); // state to check if update is requested

    // Update request handler
    const handleIsUpdating = () => {
        setIsUpdating(!isUpdating); // 
    }

    return (
        <>
            {/*  Check if update and call form component or show data*/}
            {!isUpdating ? (<Stack horizontal horizontalAlign="space-between">
                <Stack.Item>
                    <Checkbox label={props.value} checked={props.done} onChange={() => setDone(props.id)}/>
                </Stack.Item>

                <Stack horizontal tokens={{childrenGap: 10}} styles={{ root: { paddingTop: 0}}}>
                    <Stack.Item>
                        <button onClick={handleIsUpdating}><EditIcon styles={{paddingTop: 5}}/></button>
                    </Stack.Item>

                    <Stack.Item>
                        <button onClick={() => deleteTodo(props.id)}><DeleteIcon/></button>
                    </Stack.Item>
                </Stack>
            </Stack>) : <Form todo={props} isUpdating={isUpdating} handleIsUpdating={handleIsUpdating}/> 
            }
        </>
    );
}

export default Todo;