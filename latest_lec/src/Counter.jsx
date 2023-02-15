import React from "react";
import { useState, useReducer } from "react";

const redcerFn = (state, action) => {
  const { type, paylaod } = action;
  if (action.type === "Increment") {
    return state + 1;
  } else if (action.type === "decrement") {
    return state - 1;
  }
};

const Counter = () => {
  //const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(redcerFn, 0);

  return (
    <div>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
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

export default Counter;
