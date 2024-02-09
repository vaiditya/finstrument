export enum SortType {
  "desc" = "desc",
  "AtoZ" = "AtoZ",
  "assetType" = "assetType",
}

export type VCCellRendererProps = {
  colData: string | number;
  rowData?: Object;
};

export type VCRowRendererProps = {
  rowData: Object;
};

export type VCColDefType = {
  colId: string;
  headerName?: string;
  sortType?: SortType;
  cellRenderer?: ({ rowData, colData }: VCCellRendererProps) => Element;
};

export type VCTableProps = {
  rowData: Object[];
  colDef: VCColDefType[] | any;
  tableOptions?: {
    rowClassRules?: Function;
  };
  height: string;
};
