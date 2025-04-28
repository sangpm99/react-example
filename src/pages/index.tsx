import { useState, useMemo } from "react";

function Index() {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [count, setCount] = useState(0);

  // Tính tổng numbers với useMemo
  const total = useMemo(() => {
    console.log("Calculating sum...");
    return numbers.reduce((sum, num) => sum + num, 0);
  }, [numbers]); // Chỉ tính lại khi numbers thay đổi

  return (
    <div>
      <h2>Total: {total}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase Count: {count}
      </button>
      <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>
        Add Number
      </button>
    </div>
  );
}

export default Index;
