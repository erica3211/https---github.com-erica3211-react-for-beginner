import { useState } from "react";
import GoBackHome from "../components/GoBackHome";
function TodoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "") {
      return;
    }

    setToDos((currentArray) => [toDo, ...currentArray]);

    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <GoBackHome page={"/"} />
      <h1> My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
