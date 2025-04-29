// 🔹 Bài 1: Custom Hook "usePrevious"
// Mục tiêu: Viết một custom hook usePrevious để lưu và trả về giá trị trước đó của một state/prop.
//   Yêu cầu:
//   Hook nhận vào một giá trị (có thể là số, chuỗi, object...).
// Trả về giá trị của lần render trước đó.
import { useState, useEffect, useRef } from "react";

function usePrevious<T>(value: T): T | undefined {
  const previousValue = useRef<T>(value);

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return previousValue.current;
}

function Two() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  const onIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Previous count: {prevCount}</p>
      <p>Count: {count}</p>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
}

export default Two;
