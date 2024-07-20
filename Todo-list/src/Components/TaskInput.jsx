import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/todoSlice";

function TaskInput() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="form-group">
      <input
        type="text"
        className="input-box  "
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btnAdd">
        Add Todo
      </button>
    </form>
  );
}

export default TaskInput;
