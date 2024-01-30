import { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Change Count
      </button>
      <h2>Name: {props.name}</h2>
      <h3>Location: Bengaluru</h3>
      <h4>Contact: @mangal3474</h4>
    </div>
  );
};

export default User;
