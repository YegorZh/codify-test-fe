import TickIcon from "../icons/TickIcon";

interface Props {
  items: React.ReactNode[];
  className?: string;
}

const UnorderedList: React.FC<Props> = ({ items, className }) => {
  return (
    <ul className={`flex flex-col gap-y-6 ${className}`}>
      {items.map((item) => (
        <li className="flex items-center">
          <TickIcon />
          <span className="ml-3">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default UnorderedList;
