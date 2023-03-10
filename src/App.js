import React from "react";
import Buttons from "./components/Buttons";
import Inputs from "./components/Inputs";
import Modals from "./components/Modals";
import Select from "./components/Select";

function App() {
  return (
    <div style={{ padding: "10px" }}>
      <Buttons />
      <Inputs />
      <Modals />
      <Select />
    </div>
  );
}

export default App;
