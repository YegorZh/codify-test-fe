import BaseButton from "./BaseButton";
import { BaseButtonProps } from "./types/buttons.types";

const MainButton: React.FC<BaseButtonProps> = (props) => {
  return <BaseButton {...props} className="bg-black text-white" />;
};

export default MainButton;
