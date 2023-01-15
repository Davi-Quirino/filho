import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ChangingProgressProvider from "./ChangingProgressProvider";

const App = () => (
  <div style={{ padding: "40px 40px 40px 40px" }}>
    <h2>Calculando o seus valores....</h2>

    <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
      {(percentage: any) => (
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      )}
    </ChangingProgressProvider>
  </div>
);

export default App;