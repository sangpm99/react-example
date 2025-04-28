// Tạo bộ đếm ngược từ 10 về 0.
// Hiển thị số hiện tại trên giao diện.
// Khi đếm về 0 thì dừng lại.
import { useState, useEffect } from "react";

function Effect1() {
  const [count, setCount] = useState<number>(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{count > 0 ? count : "Boom! 🎉"}</div>;
}

export default Effect1;
