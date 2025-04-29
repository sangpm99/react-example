// Mục tiêu: Hiểu cách sử dụng useState để quản lý state đơn giản.
//   Đề bài:
//   Tạo một component Counter có:
//   Một nút "Tăng" để tăng giá trị counter lên 1.
// Một nút "Giảm" để giảm giá trị counter xuống 1.
// Hiển thị giá trị counter hiện tại.
//   Yêu cầu:
//   Giá trị counter không được âm (nếu đang là 0, nút "Giảm" bị disabled).
import { useState } from "react";

function One() {
  const [counter, setCounter] = useState<number>(0);

  const onIncrease = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const onDecrease = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <div>
      {counter}{" "}
      <button onClick={onDecrease} disabled={counter === 0}>
        Giảm
      </button>{" "}
      <button onClick={onIncrease}>Tăng</button>
    </div>
  );
}

export default One;
