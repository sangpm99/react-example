// 📌 Bài tập 3: Toggle Theme (Ứng dụng thực tế)
// Yêu cầu:
//   Nút "Toggle Theme" chuyển đổi giao diện giữa chế độ sáng/tối.
//   Background và text color thay đổi tương ứng (vd: dark = nền đen, chữ trắng).
// Gợi ý:
//   State boolean isDarkMode.
//   Dùng inline style hoặc CSS class động.
import { useState } from "react";

function State3() {
  const themeStyle = {
    light: {
      background: "black",
      color: "white",
      transition: "all 0.3s ease-in-out",
    },
    dark: {
      background: "white",
      color: "black",
      transition: "all 0.3s ease-in-out",
    },
  };
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const onToggle = () => {
    setDarkMode(!isDarkMode);
  };
  return (
    <div>
      <div style={isDarkMode ? themeStyle.dark : themeStyle.light}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <button onClick={onToggle}>
        {isDarkMode ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default State3;
