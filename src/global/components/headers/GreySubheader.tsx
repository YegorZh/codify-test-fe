import { BaseHeaderProps } from "./types/headers.types";

const GreySubheader: React.FC<BaseHeaderProps> = ({ text, className }) => {
  return (
    <h3 className={`text-neutral-medium text-sm font-bold ${className}`}>
      {text}
    </h3>
  );
};

export default GreySubheader;
