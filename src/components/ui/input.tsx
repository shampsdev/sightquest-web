import { twMerge } from "tailwind-merge";

interface InputProps {
    text?: string;
    onChange?: () => void;
    className?: string;
}

function Input(props: InputProps) {
  return (
    <input
      className={twMerge("bg-secondary rounded-full px-3 text-sm xs:text-base xs:px-6", props.className)}
      value={props.text}
      onChange={props.onChange}
    />
  )
}

export default Input;