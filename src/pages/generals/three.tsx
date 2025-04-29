// #### **🔹 Bài 1.1: Hook `useToggle` (Cực dễ)**
// **Mục tiêu**: Tạo hook đơn giản để bật/tắt giá trị boolean.
// **Yêu cầu**:
// - Hook trả về:
//   - Giá trị hiện tại (`boolean`).
// - Hàm `toggle` để đảo giá trị.
// - Hàm `setValue` để gán giá trị trực tiếp.
// - **Ví dụ sử dụng**:
//   const [isDarkMode, toggleDarkMode] = useToggle(false);
import { useState } from "react";

function useToggle(value: boolean = false) {
  const [state, setState] = useState(value);
  const toggle = () => {
    setState((prevState) => !prevState);
  };
  return [state, toggle, setState] as const;
}

function Three() {
  const [isOn, toggle, setOn] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>
      <button onClick={() => setOn(true)}>Set On</button>
      <button onClick={() => setOn(false)}>Set Off</button>
    </div>
  );
}

export default Three;
