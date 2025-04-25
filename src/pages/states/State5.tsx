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
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const onToggleTimer = () => {
    if (isRunning) {
      if (intervalId) {
        clearInterval(intervalId);
      }
    } else {
      const id = setInterval(() => {
        setSeconds((prevState) => prevState + 1);
      }, 1000);
      setIntervalId(id);
    }
    setRunning(!isRunning);
  };

  const onResetTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setSeconds(0);
    setRunning(false);
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div>
      <h2>{seconds}</h2>
      <button onClick={onToggleTimer}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={onResetTimer}>Reset</button>
    </div>
  );
}

export default State5;
