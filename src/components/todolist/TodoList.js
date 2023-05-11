import React, { useContext } from 'react';
import { Label, Pivot, PivotItem, Stack } from '@fluentui/react';
import Form from '../form/Form';
import Todo from '../todo/Todo';
import { TodoContext } from '../../context/TodoContext';
import PivotContent from '../pivotcontent/PivotContent';

const stackTokens = { childrenGap: 10 };

const styles = {
    root: {
      marginTop: 10,
    },
};

const labelStyles = {
    root: { marginTop: 10 },
};

const TodoList = () => {
    const {todos, active, completed} = useContext(TodoContext);

    return (
        <Pivot styles={styles}>
            <PivotItem
                headerText="All"
            >
                <Label styles={labelStyles}>
                    {/* <Form /> */}
                    <Stack styles={styles} tokens={stackTokens}>
                        <PivotContent data={todos}/>
                    </Stack>
                </Label>
            </PivotItem>

            <PivotItem headerText="Active">
                <Label styles={labelStyles}>
                    <Stack styles={styles} tokens={stackTokens}>
                        <PivotContent data={active}/>
                    </Stack>
                </Label>
            </PivotItem>

            <PivotItem headerText="Completed">
                <Label styles={labelStyles}>
                    <Stack styles={styles} tokens={stackTokens}>
                        <PivotContent data={completed}/>
                    </Stack>
                </Label>
            </PivotItem>
        </Pivot>
    );
}

export default TodoList;