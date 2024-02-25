import { hideCardNumber } from "../../../../feat/card/card.utils";
import { CardInfoProps } from "../card-issue.types";

const ClosedCardInfo: React.FC<CardInfoProps> = ({ card, className }) => {
  const providerAndTypeInfo = `${card.provider} debit business | ${card.type} Card`;
  const hiddenCardNumber = hideCardNumber(card.number);

  return (
    <section className={className}>
      <div>
        <div>{hiddenCardNumber}</div>
        <div>{providerAndTypeInfo}</div>
      </div>
    </section>
  );
};

export default ClosedCardInfo;
