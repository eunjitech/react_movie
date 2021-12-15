import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("나는 계속 호출");
  useEffect(() => {
    console.log("api를 한번만 부르고 싶을 때?");
  }, []);
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
