import React from "react";
import Routing from "./components/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
