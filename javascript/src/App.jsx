import { useState } from "react";

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

      <schalk-example
        colour={colour}
        onColourChange={(event) => setColour(event.detail)}
      />
    </div>
  );
}

export default App;
