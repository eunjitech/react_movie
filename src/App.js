import { useState, useEffect } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!toDo) {
      return;
    }
    //현재의 배열과 새로운 요소를 합쳐 새로운 배열을 생성
    //햔재의 array를 받아와서 새로운 todo의 array로 만듦
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo('');
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type here to do"
          value={toDo}
          onChange={onChange}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
