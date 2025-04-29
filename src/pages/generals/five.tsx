// #### **🔹 Bài 1.3: Hook `useHover` (Trung bình)**
// **Mục tiêu**: Phát hiện khi người dùng hover vào một phần tử.
// **Yêu cầu**:
// - Hook trả về:
//   - Giá trị `isHovered` (`boolean`).
// - Các props cần gán vào phần tử DOM (`onMouseEnter`, `onMouseLeave`).
// - **Ví dụ sử dụng**:
//   const [hoverProps, isHovered] = useHover();
//   return <div {...hoverProps}>{isHovered ? "Hovering!" : "Hover me"}</div>;
import { useState, useCallback } from "react";

const useHover = (value: boolean) => {
  const [isHovered, setIsHovered] = useState(value || false);

  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const propsHover = {
    onMouseEnter,
    onMouseLeave,
  };

  return { isHovered, propsHover };
};

function Five() {
  const { isHovered, propsHover } = useHover(false);

  return (
    <div>
      <button {...propsHover}>{isHovered ? "Hovering!" : "Hover me"}</button>
    </div>
  );
}

export default Five;
