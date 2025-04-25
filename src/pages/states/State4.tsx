// 📌 Bài tập 4: Dynamic Input Fields (Nâng cao)
// Yêu cầu:
//   1 nút "Add Field" để thêm input text vào trang.
//   Mỗi input có nút "X" để xóa chính nó.
//   Khi nhập vào bất kỳ input nào, log ra console giá trị của tất cả inputs.
//   Gợi ý:
//   State là mảng các object { id: string, value: string }.
// Sử dụng map để render các input, mỗi input có onChange riêng.
import { useState, ChangeEvent, useRef, useEffect } from "react";

interface Field {
  id: number;
  value: string;
}

function State4() {
  const [inputFields, setInputFields] = useState<Field[]>([]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const onAddField = () => {
    const lastField = inputFields.at(-1);
    const newId = lastField ? lastField.id + 1 : 1;
    setInputFields([
      ...inputFields,
      {
        id: newId,
        value: "",
      },
    ]);
  };

  useEffect(() => {
    if (inputRefs.current.length > 0) {
      inputRefs.current[inputRefs.current.length - 1]?.focus();
    }
  }, [inputFields]);

  const onChangeInputField = (
    id: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const updatedFields = inputFields.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setInputFields(updatedFields);

    updatedFields.forEach((field) => {
      console.log(field);
    });
  };

  const onRemoveField = (id: number) => {
    setInputFields(inputFields.filter((field) => field.id !== id));
  };
  return (
    <div>
      <button onClick={onAddField}>Add Field</button>
      <ul>
        {inputFields.map((field, index) => (
          <li key={field.id}>
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={field.value}
              onChange={(event) => onChangeInputField(field.id, event)}
            />
            <button onClick={() => onRemoveField(field.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default State4;
