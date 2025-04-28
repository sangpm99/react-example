import { memo } from "react";

interface Props {
  onIncrease: () => void;
}

function Content({ onIncrease }: Props) {
  console.log("Re-render");
  return (
    <div>
      <p>Hello World!</p>
      <button onClick={onIncrease}>Click me</button>
    </div>
  );
}

export default memo(Content);
