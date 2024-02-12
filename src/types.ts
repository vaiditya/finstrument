import { VCCellRendererProps } from "./components/vc-table/types";

export enum AssetClassEnum {
  "Macro" = "Macro",
  "Equities" = "Equities",
  "assetType" = "Credit",
}

export interface APIInstrumentResponseType {
  ticker: string;
  price: number;
  assetClass: string;
}

export type VCRowRendererProps = {
  rowData: APIInstrumentResponseType;
};
