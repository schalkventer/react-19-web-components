import { useState } from "react";
import SchalkExample from "../src/web-component/schalk-example";

function App() {
  const [colour, setColour] = useState("grey");

  return (
    <div>
      <div
        style={{
          height: "5rem",
          width: "5rem",
          background: colour,
        }}
      ></div>

      <SchalkExample
        colour={colour}
        onColourChange={(event) => setColour(event.detail)}
      ></SchalkExample>
    </div>
  );
}

export default App;
