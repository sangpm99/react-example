// Tạo ô input để nhập từ khóa tìm kiếm.
//   Sau khi người dùng ngừng nhập 500ms, mới log giá trị từ khóa ra console.
//   Nếu người dùng tiếp tục nhập, hủy bỏ lần log trước đó.
import { useState, useEffect } from "react";

function Effect4() {
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => console.log(keyword), 500);
    return () => clearTimeout(timer);
  }, [keyword]);

  return (
    <input
      type="text"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      placeholder="Tìm kiếm..."
    />
  );
}

export default Effect4;
