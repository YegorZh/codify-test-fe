import { hideCardNumber } from "../../../../feat/card/card.utils";
import { CardInfoProps } from "../card-issue.types";

const ActiveCardInfo: React.FC<CardInfoProps> = ({ card, className }) => {
  return (
    <section className={className}>
      <div />
      <div>
        <div>{card.holderName}</div>
        <div>{hideCardNumber(card.number)}</div>
      </div>
    </section>
  );
};

export default ActiveCardInfo;
