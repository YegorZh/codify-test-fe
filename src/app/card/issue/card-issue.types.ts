import { Card } from "../../../feat/card/card.types";

export enum CardEntryVariant {
  Virtual = "virtual",
  Physical = "physical",
  Old = "old",
}

export type CardInfoProps = {
  card: Card;
  className?: string;
};
