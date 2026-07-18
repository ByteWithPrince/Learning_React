import REact, { useState, useEffect } from "react";

function MyComponent2() {
  const [count, setCount] = useState(0);
  const [color,setColor]=useState("green");

//   useEffect(() => {document.title =`Count: ${count}`});  // it runs after every render of the component. It is useful for performing side effects that need to be executed after every update, such as updating the document title or logging information to the console.
// useEffect(() => {document.title =`Count: ${count}`},[count]);  // it runs only when the count state changes. It is useful for performing side effects that depend on specific state or props, such as fetching data when a particular value changes or updating the UI based on user interactions.

useEffect(() => {document.title =`Count: ${count} ${color}`},[count,color]);  // it runs only when the count or color state changes. It is useful for performing side effects that depend on specific state or props, such as fetching data when a particular value changes or updating the UI based on user interactions.

  function addCount() {
    setCount((c) => c + 1);
  }

  function subtractCount() {
    setCount((c) => c - 1);
  }
  function changeColor(){
    setColor((c)=>c==="green"?"red":"green");
  }

  return (
    <>
      <p style={{ color:color }}>Count: {count}</p>
      <button onClick={addCount}>Add Count</button>
      <button onClick={subtractCount}>Subtract Count</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default MyComponent2;
