// Khi component mount:
//   Set interval mỗi 1s tăng giá trị count lên 1.
//   Đồng thời, bắt đầu một timeout sau 5s hiển thị alert "Time's up!".
//   Khi component unmount:
//   Clear interval và timeout.
import { useState, useEffect } from "react";

function Effect5() {
  const [count, setCount] = useState(0);

  // Xử lý interval và timeout trong cùng một useEffect
  useEffect(() => {
    // Tăng count mỗi giây
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Hiển thị alert sau 5s (chỉ 1 lần)
    const timeoutId = setTimeout(() => {
      alert("Time's up!");
    }, 5000);

    // Cleanup cả interval và timeout
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return <div>Count: {count}</div>;
}

export default Effect5;
