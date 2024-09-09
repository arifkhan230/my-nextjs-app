"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className="text-4xl">Counter: {counter}</h1>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-accent"
      >
        Increase
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        className="btn btn-accent"
      >
        decrease
      </button>
    </div>
  );
};

export default Counter;
