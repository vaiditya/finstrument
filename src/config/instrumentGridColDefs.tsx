import { VCCellRendererProps } from "../components/vc-table/types";

export default [
  {
    colId: "ticker",
    sortType: "AtoZ",
  },
  {
    headerName: "Price (INR)",
    colId: "price",
    sortType: "desc",
    cellRenderer: ({ colData }: VCCellRendererProps) => {
      const fontColor = colData < 0 ? "color-red font-bold" : "";
      return <div className={`right-align ${fontColor}`}>{colData}</div>;
    },
  },
  {
    headerName: "Asset Class",
    colId: "assetClass",
    sortType: "assetType",
  },
];
