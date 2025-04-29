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
  const toggleDarkMode = () => {
    setState((prevState) => !prevState);
  };
  return [state, toggleDarkMode];
}

function Three() {
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  return <button onClick={toggleDarkMode}>{isDarkMode ? "ON" : "OFF"}</button>;
}

export default Three;
