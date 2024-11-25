import { Link } from "react-router-dom";
import UrlList from "../app/routes/UrlList";
function Home() {
  const urlList = UrlList();
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <nav>
        {urlList.map((item) =>
          item.name !== "Home" && item.name !== "MovieDetail" ? (
            <div>
              ⦁ <Link to={item.url}>{item.name}</Link> <br />
            </div>
          ) : null
        )}
        {/* <Link to="/coins">Coins</Link>
        <br />
        <Link to="/todoList">TodoList</Link> */}
      </nav>
    </div>
  );
}
export default Home;
