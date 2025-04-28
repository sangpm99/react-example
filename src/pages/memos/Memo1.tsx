import { memo } from "react";

function Memo1({ text }: { text: string }) {
  return <div>{text}</div>;
}

export default memo(Memo1);
