import {
  faArrowDownWideShort,
  faArrowDownAZ,
  faFilter,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { RowDataPropsString, SortType } from "./types";

export const getSortedData = (
  rowItems: RowDataPropsString[],
  sortType: SortType | undefined,
  colId: string
) => {
  switch (sortType) {
    case "desc":
      return [...rowItems.sort((a, b) => +b[colId] - +a[colId])];
    case "AtoZ":
      return [
        ...rowItems.sort((a, b) =>
          a[colId] ? a[colId].localeCompare(b[colId]) : 1
        ),
      ];
    case "assetType":
      const res = [
        ...rowItems.filter((r) => r[colId] === "Equities"),
        ...rowItems.filter((r) => r[colId] === "Macro"),
        ...rowItems.filter((r) => r[colId] === "Credit"),
      ];
      return res.length === rowItems.length ? res : rowItems;
  }
  return [...rowItems];
};

export const getColIds = (nodes: HTMLElement[]): string[] => {
  let colIds = [];
  for (let i = 0; i < nodes.length; i++) {
    colIds.push(nodes[i].id);
  }
  return colIds;
};

export const getIcon = (sortType: SortType | undefined): IconDefinition => {
  switch (sortType) {
    case "desc":
      return faArrowDownWideShort;
    case "AtoZ":
      return faArrowDownAZ;
    case "assetType":
      return faFilter;
  }
  return faArrowDownWideShort;
};
