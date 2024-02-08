import { useRef } from "react";

function Table({ rowData, colDef }) {
  console.log("ROW DATA", rowData, colDef);
  const colRef = useRef(null);

  const getColIds = (nodes) => {
    let colIds = [];
    for (let i = 0; i < nodes.length; i++) {
      colIds.push(nodes[i].id);
    }
    return colIds;
  };

  return (
    <div className="custom-table">
      <table>
        <thead>
          <tr ref={colRef}>
            {colDef.map((col) => (
              <th id={col.colId} key={`col-${col.colId}`}>
                {/* Optional headerName handling from colDef */}
                {col.headerName ||
                  `${col.colId.split("")[0].toUpperCase()}${col.colId
                    .split("")
                    .slice(1)
                    .join("")}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((rowItem, index) => {
            const colIds = getColIds(colRef.current?.childNodes);
            return (
              <tr key={`row-${index}`}>
                {colIds.map((colId) => {
                  return <td key={`col-${colId}`}>{rowItem[colId]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
