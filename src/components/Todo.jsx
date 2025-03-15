import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodFrom";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorage, setLocalStorage } from "./TodoLocalStorage";

export const Todo = () => {
    const [storeValue, setStoreValue] = useState(() => getLocalStorage());

    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;

        // to check the if the input field is empty or not
        if (!content) return;

        // check if the data is already exist or not
        const ifTodoContentMatched = storeValue.find((curTask) => curTask.content === content);
        if (ifTodoContentMatched) return;

        setStoreValue((prev) => [...prev, { id, content, checked }]);
    };
    // add data to LocalStorage
    setLocalStorage(storeValue);

    // delete function
    const handleDelete = (value) => {
        const updatedValue = storeValue.filter((curTask) => curTask.content !== value);
        setStoreValue(updatedValue);
    }
    // All delete function
    const allDelete = () => {
        setStoreValue([]);
    };

    // toto handleChecked function
    const handleChecked = (content) => {
        const updatedTask = storeValue.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked };
            } else {
                return curTask;
            }
        })
        setStoreValue(updatedTask);
    };

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate />
            </header>
            <TodoForm onAddTodo={handleFormSubmit} />

            <section className="myUnOrderList">
                <ul>
                    {storeValue.map((curTask) => {
                        return (
                            <TodoList
                                key={curTask.id}
                                data={curTask.content}
                                checked={curTask.checked}
                                onHandleChecked={handleChecked}
                                onHandleDelete={handleDelete} />
                        );
                    })};
                    <button className="clear-btn " onClick={allDelete}> Clear All</button>
                </ul>
            </section>
        </section>
    );
};