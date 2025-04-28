// Hiển thị chiều rộng (window.innerWidth) hiện tại của trình duyệt.
//   Cập nhật giá trị khi người dùng thay đổi kích thước cửa sổ.
//   Cleanup event listener khi component unmount.
import { useState, useEffect } from "react";

function Effect2() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>Window width: {width}px</div>;
}

export default Effect2;
