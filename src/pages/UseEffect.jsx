import { useState, useEffect } from "react";
import GoBackHome from "../components/GoBackHome";
function UseEffect() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("I run all the time");

  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword' or 'counter' changes");
  }, [keyword, counter]);
  return (
    <div>
      <GoBackHome page={"/"} />
      {/* <div>
        <h1 className={styles.title}>Welcome back!</h1>
        <Button text="hihihihihi" />
      </div> */}
      {/* <div> */}
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
      {/* </div> */}
    </div>
  );
}

export default UseEffect;
