import logo from "./logo.svg";
import "./App.css";
import ListTodo from "./components/ListsTodos";
import ListUser from "./components/ListUsers";

function App() {
  return (
    <div className="App">
      <ListTodo />
      <ListUser />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
