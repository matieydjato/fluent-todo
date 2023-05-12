import React, { useContext } from 'react';
import { Label, Pivot, PivotItem, Stack } from '@fluentui/react';
import { TodoContext } from '../../context/TodoContext';
import TodoList from '../todolist/TodoList';

const stackTokens = { childrenGap: 10 };

const styles = {
    root: {
      marginTop: 10,
    },
};

const labelStyles = {
    root: { marginTop: 10 },
};

const TodoTab = () => {
    const {todos, active, completed} = useContext(TodoContext);

    return (
        <Pivot styles={styles}>
            <PivotItem
                headerText="All"
            >
                <Label styles={labelStyles}>
                    {/* <Form /> */}
                    <Stack styles={styles} tokens={stackTokens}>
                        <TodoList data={todos}/>
                    </Stack>
                </Label>
            </PivotItem>

            <PivotItem headerText="Active">
                <Label styles={labelStyles}>
                    <Stack styles={styles} tokens={stackTokens}>
                        <TodoList data={active}/>
                    </Stack>
                </Label>
            </PivotItem>

            <PivotItem headerText="Completed">
                <Label styles={labelStyles}>
                    <Stack styles={styles} tokens={stackTokens}>
                        <TodoList data={completed}/>
                    </Stack>
                </Label>
            </PivotItem>
        </Pivot>
    );
}

export default TodoTab;