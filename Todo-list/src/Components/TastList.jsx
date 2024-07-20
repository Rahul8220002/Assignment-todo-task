import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../app/todoSlice";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

function TastLisT() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h3 className="d-flex justify-content-center align-items-center">
        your todos
      </h3>
      {todos.map((todo) => (
        <section className="item-of-section" key={todo.id}>
          {todo.text}
          <div className="icon-list ">
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="rounded border-0"
            >
              <MdDelete className="bg-danger fs-3 rounded" />
            </button>
            <button className="rounded border-0">
              <FaPen className="bg-success fs-3 rounded" />
            </button>
          </div>
        </section>
      ))}
    </>
  );
}

export default TastLisT;
