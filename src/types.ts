export enum AssetClassEnum {
  "Macro" = "Macro",
  "Equities" = "Equities",
  "assetType" = "Credit",
}

export type APIInstrumentResponseType = {
  ticker: string;
  price: number;
  assetClass: AssetClassEnum;
}[];
