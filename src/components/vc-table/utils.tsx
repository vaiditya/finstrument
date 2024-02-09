import {
  faArrowDownWideShort,
  faArrowDownAZ,
  faFilter,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { SortType } from "./types";

export const getSortedData = (
  rowItems: Object[],
  sortType: SortType | undefined,
  colId: string
) => {
  switch (sortType) {
    case "desc":
      //@ts-ignore
      return [...rowItems.sort((a, b) => b[colId] - a[colId])];
    case "AtoZ":
      return [
        ...rowItems.sort((a, b) =>
          //@ts-ignore
          a[colId] ? a[colId].localeCompare(b[colId]) : 1
        ),
      ];
    case "assetType":
      const res = [
        //@ts-ignore
        ...rowItems.filter((r) => r[colId] === "Equities"),
        //@ts-ignore
        ...rowItems.filter((r) => r[colId] === "Macro"),
        //@ts-ignore
        ...rowItems.filter((r) => r[colId] === "Credit"),
      ];
      return res.length === rowItems.length ? res : rowItems;
  }
  return [...rowItems];
};

export const getColIds = (nodes: HTMLElement[]) => {
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
