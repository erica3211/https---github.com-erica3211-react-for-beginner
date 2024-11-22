import Home from "../../pages/Home";
import Coins from "../../pages/Coins";
import TodoList from "../../pages/ToDoList";
import UseEffect from "../../pages/UseEffect";
function UrlList() {
  return [
    { url: "/", page: <Home />, name: "Home" },
    { url: "/useEffect", page: <UseEffect />, name: "useEffect" },
    { url: "/coins", page: <Coins />, name: "Coins" },
    { url: "/todoList", page: <TodoList />, name: "TodoList" },
  ];
}
export default UrlList;
