// 📌 Bài tập 2: Todo List (Form cơ bản)
// Yêu cầu:
//   Input text và nút "Add" để thêm công việc vào danh sách.
//   Hiển thị danh sách các công việc dưới dạng ul/li.
//   Nếu input trống, không cho phép thêm.
// Gợi ý:
//   State cho todos (array) và inputValue (string).
//   Xử lý sự kiện onChange của input và onSubmit của form.
import { useState, ChangeEvent, FormEvent } from "react";

function State2() {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleUpdateTodoInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedInput = todoInput.trim();
    if (trimmedInput === "") {
      alert("Please enter a valid input");
      return;
    }

    if (todos.some((todo) => trimmedInput === todo.trim())) {
      alert("This todo already exists!");
      return;
    }

    setTodos([...todos, todoInput]);
    setTodoInput("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={todoInput}
          onChange={handleUpdateTodoInput}
          placeholder="Enter a todo"
        />
        <button type="submit" disabled={todoInput.trim() === ""}>
          Add
        </button>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default State2;
