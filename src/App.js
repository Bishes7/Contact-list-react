import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
      }}
    >
      <div
        className="userList"
        style={{
          boxShadow: "0 0 10px grey",
          padding: "2rem",
        }}
      >
        <div className="display">Typing</div>

        <div className="form">
          <form action="">
            <input type="text" />
            <button>Add names</button>
          </form>
        </div>
        <div className="list">
          <ul>
            <li>Bishes</li>
            <li>Umesh</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
