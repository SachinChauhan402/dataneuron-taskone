import React from "react";
import { render } from "react-dom";
import { Resizable } from "re-resizable";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

const App = () => (
  <div
    className="container"
    style={{
      display: "flex",
      padding: "32px",
      justifyContent: "center",
      flexDirection: "column",

      width: "100%",
      height: "100%",
      gap: "12px",
    }}
  >
    <div
      className="container-top"
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "50%",
        width: "100%",
        gap: "32px",
        maxWidth: "1280px",
      }}
    >
      <Resizable
        style={style}
        defaultSize={{
          width: 320,
          height: 200,
        }}
      >
        Component 1
      </Resizable>

      <Resizable style={style} defaultSize={{ width: 320, height: 200 }}>
        component 2
      </Resizable>
    </div>

    <div style={{ height: "50%" }}>
      <Resizable style={style} defaultSize={{ width: 600, height: 200 }}>
        component 3
      </Resizable>
    </div>
  </div>
);

export default App;