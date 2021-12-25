import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("나는 계속 호출");
  useEffect(() => {
    console.log("api를 한번만 부르고 싶을 때?");
  }, []);
  // useEffect(() => {
  //   console.log("키워드가 변할 때만", keyword);
  // }, [keyword]);
  useEffect(() => {
    if (keyword.length > 5) {
      console.log("키워드가 5초과", keyword);
    }
  }, [keyword]);
  return (
    <div className="App">
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <p>Search for {keyword}</p>
      <p>{counter}</p>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
