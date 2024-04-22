import React from "react";
import "./App.css";

import Person from "./ui/test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person
          name={"Alex"}
          email={"alex@gmail.com"}
          age={0}
          country={"kenya"}
          region={"africa"}
          roles={["admin", "user"]}
        />
      </header>
    </div>
  );
}

export default App;
