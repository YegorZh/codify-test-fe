import BaseButton from "./BaseButton";
import { BaseButtonProps } from "./types/buttons.types";

const OpaqueButton: React.FC<BaseButtonProps> = (props) => {
  return <BaseButton {...props} className="bg-white" />;
};

export default OpaqueButton;
