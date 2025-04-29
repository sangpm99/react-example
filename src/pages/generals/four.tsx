// #### **🔹 Bài 1.2: Hook `useCounter` (Dễ)**
// **Mục tiêu**: Tạo hook quản lý bộ đếm với các hành động cơ bản.
// **Yêu cầu**:
// - Hook nhận giá trị khởi tạo (mặc định = 0).
// - Trả về:
//   - Giá trị hiện tại (`number`).
// - Hàm `increment` (tăng 1 đơn vị).
// - Hàm `decrement` (giảm 1 đơn vị).
// - Hàm `reset` (về giá trị ban đầu).
import { useState } from "react";

function useCounter(value: number) {
  const [count, setCount] = useState<number>(Number(value) || 0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(value);
  };

  return { count, increment, decrement, reset };
}

function Four() {
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default Four;
