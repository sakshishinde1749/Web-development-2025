import React from "react";
import Login from "./Login";

let isloggedIn = false;

function App() {
  return (
    <div className="container">
      {isloggedIn ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
