import React from "react";
import { useState, useReducer } from "react";

const redcerFn = (state, { type, payload = 1 }) => {
  switch (type) {
    case "Increment":
      return state + payload;
    case "decrement":
      return state - payload;
    default:
      return state;
  }
};

const Counter2 = () => {
  //const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(redcerFn, 0);

  return (
    <div>
      <button onClick={() => dispatch({ type: "Increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
      <h1>{count}</h1>
    </div>
  );
};
//   const increment = (value) => {
//     setCount(count + value);
//   };

//   const decrement = (value) => {
//     setCount(count - value);
//   };

//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button
//         onClick={(e) => {
//           increment(1);
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={(e) => {
//           decrement(1);
//         }}
//       >
//         decrement
//       </button>

//       <div>
//         <h1>Increment by 5</h1>
//         <button
//           onClick={(e) => {
//             increment(5);
//           }}
//         >
//           Increment
//         </button>
//         <button
//           onClick={(e) => {
//             decrement(5);
//           }}
//         >
//           decrement
//         </button>
//       </div>
//       <div>
//         <h1>Increment by 10</h1>
//         <button
//           onClick={(e) => {
//             increment(10);
//           }}
//         >
//           Increment
//         </button>
//         <button
//           onClick={(e) => {
//             decrement(10);
//           }}
//         >
//           decrement
//         </button>
//       </div>
//     </div>
//   );
// };

export default Counter2;
