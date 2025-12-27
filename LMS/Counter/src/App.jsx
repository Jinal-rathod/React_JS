import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <p className="read-the-docs">Total Count is {count}</p>
      <div className="card">
        <button onClick={() => setCount(count + 1)} className="logo">
          Incremet
        </button>
        <button onClick={() => setCount(0)} className="logo">
          Reset
        </button>
        <button
          onClick={
            count <= 0 ? () => setCount(count) : () => setCount(count - 1)
          }
          className="logo"
        >
          Decremet
        </button>
      </div>
    </>
  );
}

export default App;

// export default function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center">
//         <h1 className="text-2xl font-bold mb-6 text-gray-800">
//           Counter App
//         </h1>

//         <p className="text-5xl font-semibold text-indigo-600 mb-6">
//           {count}
//         </p>

//         <div className="flex justify-between gap-4">
//           <button
//             onClick={() => setCount(count - 1)}
//             className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
//           >
//             −
//           </button>

//           <button
//             onClick={() => setCount(0)}
//             className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
//           >
//             Reset
//           </button>

//           <button
//             onClick={() => setCount(count + 1)}
//             className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
//           >
//             +
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
