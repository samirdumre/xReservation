"use client";
import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      <p>Total number of users: {users.length}</p>
    </>
  );
}
