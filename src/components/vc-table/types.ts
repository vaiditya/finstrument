export enum SortType {
  "desc" = "desc",
  "AtoZ" = "AtoZ",
  "assetType" = "assetType",
}

export type RowDataPropsNumber = { [K: string]: number };

export type RowDataPropsString = { [K: string]: string };

export type RowDataProps = { [K: string]: number | string };

export type VCCellRendererProps = {
  colData: string | number;
  rowData?: RowDataProps;
};

export type VCColDefType = {
  colId: string;
  headerName?: string;
  sortType?: SortType;
  cellRenderer?: ({ rowData, colData }: VCCellRendererProps) => Element;
};

export type VCTableProps = {
  rowData: any[];
  colDef: VCColDefType[] | any;
  tableOptions?: {
    rowClassRules?: Function;
  };
  height: string;
};
