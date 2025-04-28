// 📌 Bài tập 5: Timer (Khó - Kết hợp useEffect)
// Yêu cầu:
//   Hiển thị số giây đã trôi qua (bắt đầu từ 0).
// Nút "Start/Pause" để dừng hoặc tiếp tục đếm.
//   Nút "Reset" để đưa timer về 0.
// Gợi ý:
//   State cho seconds (number) và isRunning (boolean).
//   Dùng useEffect để xử lý interval (nhớ cleanup).
import { useState, useEffect, useRef } from "react";

function State5() {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setRunning] = useState<boolean>(false);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  // Khong luu bien khong lien quan render vao useState

  const onToggleTimer = () => {
    if (isRunning) {
      if (intervalId.current) clearInterval(intervalId.current);
    } else {
      intervalId.current = setInterval(() => {
        setSeconds((prevState) => prevState + 1);
      }, 1000);
    }
    setRunning(!isRunning);
  };

  const onResetTimer = () => {
    if (intervalId.current) clearInterval(intervalId.current);
    setSeconds(0);
    setRunning(false);
  };

  useEffect(() => {
    return () => {
      // return dinh nghia mot ham cleanup
      if (intervalId.current) {
        clearInterval(intervalId.current);
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
