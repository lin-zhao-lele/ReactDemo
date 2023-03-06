import logo from "./logo.svg";
import "./App.css";

// ! 来个列表, 通过map函数来渲染列表
// * sdw 
// todo 
const songs = [
  { id: 1, name: "前端性能优化设计技巧" },
  { id: 2, name: "自顶向下学React源码" },
  { id: 3, name: "React的社区的组成" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> 目录 !!!!</p>
        <ul>
          {songs.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
