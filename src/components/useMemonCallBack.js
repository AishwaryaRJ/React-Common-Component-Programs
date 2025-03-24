import React, { useState, useMemo, useCallback } from "react";

function MyComponent({ items }) {
    const [count, setCount] = useState(0);

    const expensiveCalculation = useMemo(() => {
        console.log("Calculating...");
        return items.reduce((total, item) => total + item.value, 0);
    }, [items]);

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Total: {expensiveCalculation}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}


const ExpensiveComponent = ({ numbers }) => {
    const expensiveComputation = React.useMemo(() => {
      console.log("Computing sum...");
      return numbers.reduce((sum, num) => sum + num, 0);
    }, [numbers]);
  
    return <p>Sum: {expensiveComputation}</p>;
  };
  
  const ParentComponent = () => {
    const [count, setCount] = React.useState(0);
    const numbers = [1, 2, 3, 4, 5];
  
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Re-render</button>
        <ExpensiveComponent numbers={numbers} />
      </div>
    );
  };

  
  const ChildComponent = React.memo(({ value }) => {
    console.log("Child rendered");
    return <p>{value}</p>;
  });
  
  const ParentComponent = () => {
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <ChildComponent value="Hello, World!" />
      </div>
    );
  };

  

  const ParentComponent = () => {
    const [count, setCount] = React.useState(0);
  
    const increment = React.useCallback(() => {
      setCount((prevCount) => prevCount + 1);
    }, []);
  
    return <ChildButton onClick={increment} />;
  };
  
  const ChildButton = React.memo(({ onClick }) => {
    console.log("Child button rendered");
    return <button onClick={onClick}>Increment</button>;
  });
  