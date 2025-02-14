"use client"; 

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-md w-60 mx-auto mt-10">
      <h1 className="text-xl font-semibold">Counter: {count}</h1>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
