import "./Table.css";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getColIds, getIcon, getSortedData } from "./utils";
import { VCColDefType, VCTableProps } from "./types";

function Table({
  rowData,
  colDef,
  tableOptions,
  height,
}: VCTableProps): React.JSX.Element {
  const [sorter, setSoter] = useState("");
  const [rowItems, setRowItems] = useState([...rowData]);
  const colRef = useRef<HTMLTableRowElement | null>(null);
  const { rowClassRules } = tableOptions || {};

  const onSortClick = (colId: string) => {
    setSoter(!sorter ? colId : sorter === colId ? "" : colId);
  };

  useEffect(() => {
    let currRowItems = rowItems;
    if (sorter) {
      const sortType = colDef.find(
        (col: VCColDefType) => col.colId === sorter
      ).sortType;
      currRowItems = getSortedData(currRowItems, sortType, sorter);
      setRowItems([...currRowItems]);
      return;
    }
    setRowItems([...rowData]);
  }, [sorter]);

  useEffect(() => {
    setRowItems([...rowData]);
  }, [rowData.length]);

  return (
    <>
      <div className="vc-table" style={{ height, overflowY: "scroll" }}>
        <table>
          <thead>
            <tr ref={colRef}>
              {colDef.map((col: VCColDefType) => (
                <th id={col.colId} key={`col-${col.colId}`}>
                  {/* Optional headerName handling from colDef */}
                  <div className="d-flex flex-space-between">
                    <div>
                      {col.headerName ||
                        `${col.colId.split("")[0].toUpperCase()}${col.colId
                          .split("")
                          .slice(1)
                          .join("")}`}
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={getIcon(col.sortType)}
                        style={{ cursor: "pointer" }}
                        onClick={() => onSortClick(col.colId)}
                        color={sorter === col.colId ? "black" : "lightgrey"}
                      />
                      {/* {sortOpen === col.colId && <Dropdown />} */}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody style={{ height }}>
            {rowItems.map((rowItem, index) => {
              //@ts-ignore
              const colIds = getColIds(colRef.current?.childNodes);
              return (
                <tr
                  key={`row-${index}`}
                  className={rowClassRules ? rowClassRules(rowItem) : ""}
                >
                  {colIds.map((colId) => {
                    const currColDef: VCColDefType = colDef.find(
                      (col: VCColDefType) => col.colId === colId
                    );
                    return (
                      <td key={`col-${colId}`}>
                        {currColDef.cellRenderer
                          ? currColDef.cellRenderer({
                              rowData: rowItem,
                              colData: rowItem[colId],
                            })
                          : rowItem[colId]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
