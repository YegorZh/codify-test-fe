import {
  Card,
  CardProviderType,
  CardType,
} from "../../../feat/card/card.types";
import MainButton from "../../../global/components/buttons/MainButton";
import OpaqueButton from "../../../global/components/buttons/OpaqueButton";
import GreySubheader from "../../../global/components/headers/GreySubheader";
import Header from "../../../global/components/headers/Header";
import DisabledCardIcon from "../../../global/components/icons/OldCardIcon";
import PhysicalCardIcon from "../../../global/components/icons/PhysicalCardIcon";
import VirtualCardIcon from "../../../global/components/icons/VirtualCardIcon";
import { CardEntryVariant } from "./card-issue.types";
import CardsEntry from "./components/CardsEntry";

const MOCKED_VIRTUAL_CARDS: Card[] = [
  {
    id: 1,
    isActive: true,
    isClosed: false,
    holderName: "John Doe",
    number: 1234456789101234,
    provider: CardProviderType.Visa,
    type: CardType.Virtual,
  },
];

const MOCKED_PHYSICAL_CARDS: Card[] = [
  {
    id: 2,
    isActive: true,
    isClosed: false,
    holderName: "John Doe",
    number: 1234456789101234,
    provider: CardProviderType.Visa,
    type: CardType.Physical,
  },
];

const MOCKED_DISABLED_CARDS: Card[] = [
  {
    id: 3,
    isActive: false,
    isClosed: true,
    holderName: "John Doe",
    number: 1234456789101234,
    provider: CardProviderType.Visa,
    type: CardType.Virtual,
  },
  {
    id: 4,
    isActive: false,
    isClosed: true,
    holderName: "John Doe",
    number: 1234456789101234,
    provider: CardProviderType.Visa,
    type: CardType.Physical,
  },
];

const VIRTUAL_CARD_DESCRIPTION = [
  "Virtual cards are used for online purchases",
];

const PHYSICAL_CARD_DESCRIPTION = [
  "Physical cards are used for in-store purchases",
  "Physical cards are used for ATM withdrawals",
  "Physical cards are used for online purchases",
];

const DISABLED_CARD_DESCRIPTION = [
  "Disabled cards are no longer in use",
  "Disabled cards are no longer valid",
];

const IssueCardPage: React.FC = () => {
  return (
    <div className="px-6 py-10">
      <GreySubheader text="New bank program" />
      <Header text="Issuing New cards" className="mt-2" />

      <p className="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>

      <CardsEntry
        variant={CardEntryVariant.Virtual}
        descriptionList={VIRTUAL_CARD_DESCRIPTION}
        cards={MOCKED_VIRTUAL_CARDS}
        className="mt-8"
        titleIcon={VirtualCardIcon}
        titleText="Virtual Cards"
      />

      <CardsEntry
        variant={CardEntryVariant.Physical}
        descriptionList={PHYSICAL_CARD_DESCRIPTION}
        cards={MOCKED_PHYSICAL_CARDS}
        className="mt-11"
        titleIcon={PhysicalCardIcon}
        titleText="Physical Card"
      />

      <CardsEntry
        variant={CardEntryVariant.Old}
        descriptionList={DISABLED_CARD_DESCRIPTION}
        cards={MOCKED_DISABLED_CARDS}
        className="mt-11"
        titleIcon={DisabledCardIcon}
        titleText="Old Cards"
      />

      <section className="mt-12 flex flex-col">
        <MainButton>Continue</MainButton>
        <OpaqueButton>Back</OpaqueButton>
      </section>
    </div>
  );
};

export default IssueCardPage;
