// Xây dựng ứng dụng Todo List với các tính năng:
//   Thêm công việc (có thể nhập nhiều công việc cùng lúc, mỗi công việc cách nhau bằng dấu phẩy).
// Ví dụ: "Đi chợ, Rửa bát, Học React" → Tách thành 3 task riêng.
//   Đánh dấu hoàn thành (click vào task).
// Lọc công việc: Tất cả/Đã hoàn thành/Chưa hoàn thành.
//   Xóa task (có confirm trước khi xóa).
// Reset toàn bộ (clear tất cả task).

import { useState, ChangeEvent } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function State6() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Clean House", completed: true },
  ]);
  const [inputText, setInputText] = useState<string>("");
  const [filter, setFilter] = useState<string>("all"); // 'all', 'completed', 'active'

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleAddTasks = () => {
    const newTasks: string[] = inputText
      .split(",")
      .map((input) => input.trim())
      .filter((input) => input !== "");

    const hasDuplicates = newTasks.some(
      (input, index) =>
        newTasks.indexOf(input) !== index ||
        tasks.some((task) => task.text.toLowerCase() === input.toLowerCase())
    );

    if (hasDuplicates) {
      alert("Task typing is duplicates");
      return;
    }

    setTasks([
      ...tasks,
      ...newTasks.map((task, index) => {
        return {
          id: tasks[tasks.length - 1]
            ? tasks[tasks.length - 1].id + index + 1
            : 1,
          text: task,
          completed: false,
        };
      }),
    ]);
    setInputText("");
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to delete all tasks?")) {
      setTasks([]);
    }
  };

  const toggleTask = (id: number) => {
    setTasks(
      [...tasks].map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: true,
          };
        } else return task;
      })
    );
  };

  const deleteTask = (id: number) => {
    if (confirm("Are you sure you want to delete this task?")) {
      setTasks([...tasks].filter((task) => task.id !== id));
    }
  };

  const filteredTask = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return task;
  });

  return (
    <div>
      <h2>Todo List (Advanced)</h2>
      <input
        type="text"
        value={inputText}
        onChange={handleChangeInput}
        placeholder="Type task (separated by ,)"
        style={{ width: "500px" }}
      />
      <button onClick={handleAddTasks}>Add</button>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("active")}>Not Complete</button>
      <button onClick={handleReset} style={{ color: "red" }}>
        Reset
      </button>

      <ul>
        {filteredTask.map((task) => {
          return (
            <li
              key={task.id}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(task.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <p>
        Quantity of task not complete:{" "}
        {tasks.filter((task) => !task.completed).length}
      </p>
    </div>
  );
}

export default State6;
