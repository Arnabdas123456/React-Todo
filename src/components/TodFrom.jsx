import { useState } from "react";
export const TodoForm = ({ onAddTodo }) => {

    const [inputValue, setInput] = useState({});
    const handleValue = (value) => {
        setInput({ id: value, content: value, checked: false });
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInput({ id: "", content: "", checked: false });
    };
    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className="todo-input"
                        value={inputValue.content}
                        onChange={(e) => handleValue(e.target.value)} />
                </div>
                <div>
                    <button type="submit" className="todo-btn">
                        Add Task
                    </button>
                </div>
            </form>
        </section>
    );
};