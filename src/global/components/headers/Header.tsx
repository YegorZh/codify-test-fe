import { BaseHeaderProps } from "./types/headers.types";

const Header: React.FC<BaseHeaderProps> = ({ text, className }) => {
  return (
    <h2 className={`text-neutral-dark text-2xl font-bold ${className}`}>
      {text}
    </h2>
  );
};

export default Header;
