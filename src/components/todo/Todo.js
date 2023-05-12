import React, { useContext, useState } from 'react';
import { Checkbox, Stack } from '@fluentui/react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Icon } from '@fluentui/react/lib/Icon';
import { TodoContext } from '../../context/TodoContext';
import Form from '../form/Form';

initializeIcons();

const EditIcon = () => <Icon iconName="Edit" />;
const DeleteIcon = () => <Icon iconName="Cancel" />;

const Todo = (props) => {
    const {deleteTodo, setDone} = useContext(TodoContext);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleIsUpdating = () => {
        setIsUpdating(!isUpdating);
    }

    return (
        <>
            {!isUpdating ? (<Stack horizontal horizontalAlign="space-between">
                <Stack.Item>
                    <Checkbox label={props.value} checked={props.done} onChange={() => setDone(props.id)}/>
                </Stack.Item>

                <Stack horizontal tokens={{childrenGap: 10}} styles={{ root: { paddingTop: 0}}}>
                    <Stack.Item>
                        <button onClick={handleIsUpdating}><EditIcon/></button>
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