import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// ReactDOM.render(
//   React.createElement(
//     "button",
//     {
//       // Значения в нопке
//       // disabled: true,
//       onClick: () => console.log("Hello"),
//       // Текст внутри кнопки
//     },
//     "Push"
//   ),
//   document.getElementById("root")
// );

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
