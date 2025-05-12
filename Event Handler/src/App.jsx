import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img
        src="https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?semt=ais_hybrid&w=740"
        alt="" />
      <br />
      <p>Name= Subh</p>
      <h3>Email= shubh123@gmail.com</h3>
      <p>Dyscription: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius necessitatibus sed odit pariatur fugit minima dolore suscipit, consequuntur quo! Enim?</p>
      <button>Add</button>

  
    </>
  );
}

export default App;
