export type Card = {
  number: number;
  holderName: string;
  isActive: boolean;
  isClosed: boolean;
  provider: CardProviderType;
  type: CardType;
  id: number;
};

export enum CardProviderType {
  Visa = "Visa",
  MasterCard = "MasterCard",
}

export enum CardType {
  Physical = "Physical",
  Virtual = "Virtual",
}
