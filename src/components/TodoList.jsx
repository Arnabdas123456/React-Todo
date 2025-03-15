import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data, checked, onHandleDelete, onHandleChecked }) => {
    return (
        <li className="todo-item">
            <span
                className={checked ? "checkList" : "notCheckList"}>
                {data}
            </span>
            <button className="check-btn"
                onClick={() => onHandleChecked(data)}>
                <FaCheckCircle />
            </button>
            <button className="delete-btn"
                onClick={() => onHandleDelete(data)}>
                <MdDeleteForever />
            </button>
        </li>
    );
};