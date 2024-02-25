import { BaseHeaderProps } from "./types/headers.types";

type Props = BaseHeaderProps & {
  icon: React.FC | React.ReactNode;
};

const IconSubheader: React.FC<Props> = ({ text, className, ...props }) => {
  return (
    <h2 className={`flex items-center font-bold ${className}`}>
      {typeof props.icon === "function" ? <props.icon /> : props.icon}
      <span className="ml-2">{text}</span>
    </h2>
  );
};

export default IconSubheader;
