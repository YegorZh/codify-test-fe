import { useMemo } from "react";
import { Card } from "../../../../feat/card/card.types";
import { CardEntryVariant } from "../card-issue.types";
import ClosedCardInfo from "./ClosedCardInfo";
import ActiveCardInfo from "./ActiveCardInfo";
import UnorderedList from "../../../../global/components/other/UnorderedList";
import IconSubheader from "../../../../global/components/headers/IconSubheader";

interface CardsEntryProps {
  variant: CardEntryVariant;
  cards: Card[];
  descriptionList: string[];
  className?: string;
  titleText: string;
  titleIcon: React.FC;
}

const CardsEntry: React.FC<CardsEntryProps> = ({
  cards,
  descriptionList,
  variant,
  className,
  titleIcon,
  titleText,
}) => {
  const CardInfo = useMemo(() => {
    switch (variant) {
      case CardEntryVariant.Old:
        return ClosedCardInfo;
      case CardEntryVariant.Physical:
      case CardEntryVariant.Virtual:
        return ActiveCardInfo;
    }
  }, [variant]);

  return (
    <article className={className}>
      <IconSubheader text={titleText} icon={titleIcon} className="mb-3" />
      <div
        className={`${variant === CardEntryVariant.Old ? "mb-8" : "mb-5"} flex flex-col gap-y-5`}
      >
        {cards.map((card, i) => (
          <CardInfo card={card} key={i} />
        ))}
      </div>

      <UnorderedList items={descriptionList} />
    </article>
  );
};

export default CardsEntry;
