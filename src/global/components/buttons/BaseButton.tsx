import { BaseButtonProps } from "./types/buttons.types";

const BaseButton: React.FC<BaseButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={`px-30 h-12 rounded-[4px] py-[11px] ${props.className}`}
    />
  );
};

export default BaseButton;
