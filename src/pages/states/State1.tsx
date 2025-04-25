// 📌 Bài tập 1: Counter (Cơ bản)
// Yêu cầu:
// Tạo component Counter có nút "+" và "-" để tăng/giảm giá trị.
// Hiển thị giá trị hiện tại.
// Nếu giá trị = 0, nút "-" bị disabled.
// Gợi ý:
// Sử dụng useState để lưu giá trị count.
// Kiểm tra điều kiện count === 0 để disable nút.
import { useState } from "react";

function State1() {
  const [counter, setCounter] = useState(0);

  const onIncrease = () => {
    setCounter((prevState) => prevState + 1);
  };

  const onDecrease = () => {
    setCounter((prevState) => (prevState > 0 ? prevState - 1 : prevState));
  };

  return (
    <div>
      {counter}
      <br />
      <button onClick={onDecrease} disabled={counter <= 0}>
        -
      </button>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}

export default State1;
