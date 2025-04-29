// #### **🔹 Bài 1.4: Hook `useLocalStorage` (Trung bình)**
// **Mục tiêu**: Đồng bộ state với `localStorage`.
// **Yêu cầu**:
// - Hook nhận vào:
//   - `key` (khóa lưu trữ trong localStorage).
// - Giá trị khởi tạo (nếu không có dữ liệu trong localStorage).
// - Trả về:
//   - Giá trị hiện tại.
// - Hàm `setValue` để cập nhật cả state và localStorage.
// - **Ví dụ sử dụng**:
//   const [name, setName] = useLocalStorage("username", "Guest");
import { useState, useEffect } from "react";

const useLocalStorage = (key: string, value: string) => {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    localStorage.setItem(key, value);
    setName(value);
  }, [value]);

  return { name, setName };
};

function Six() {
  const { name, setName } = useLocalStorage("username", "Guest");
  return (
    <div>
      <p>{name}</p>
      <input
        type="text"
        placeholder="Set new name"
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}

export default Six;
