// 📌 Bài tập 5: Timer (Khó - Kết hợp useEffect)
// Yêu cầu:
//   Hiển thị số giây đã trôi qua (bắt đầu từ 0).
// Nút "Start/Pause" để dừng hoặc tiếp tục đếm.
//   Nút "Reset" để đưa timer về 0.
// Gợi ý:
//   State cho seconds (number) và isRunning (boolean).
//   Dùng useEffect để xử lý interval (nhớ cleanup).
import { useState, useEffect } from "react";

function State5() {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setRunning] = useState<boolean>(false);

  const onToggle = () => {
    setRunning(!isRunning);
  };

  const onReset = () => {
    setRunning(false);
  };

  return (
    <div>
      {seconds}
      <br />
      <button onClick={onToggle}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default State5;
