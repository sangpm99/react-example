// Gọi API https://jsonplaceholder.typicode.com/todos/1 khi component mount.
//   Hiển thị tiêu đề (title) của todo nhận được.
//   Hiển thị "Loading..." trong khi chờ dữ liệu.
import { useState, useEffect } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function Effect3() {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchTodo = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1",
          { signal: controller.signal }
        );
        setTodo(await response.json());
      } catch (error) {
        alert(`Failed to get todos ${error}`);
        return;
      } finally {
        setLoading(false);
      }
    };
    fetchTodo();
    return () => controller.abort();
  }, []);

  return <div>{loading ? "Loading..." : todo?.title}</div>;
}

export default Effect3;
