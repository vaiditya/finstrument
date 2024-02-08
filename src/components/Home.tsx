import { useEffect, useState, useRef } from "react";
import instrumentGridColDefs from "../config/instrumentGridColDefs";
import instrumentsResponse from "../mocks/instrumentsResponse";
import Table from "./Table";

function Home() {
  const [rowData, setRowData] = useState();
  const colDef = useRef(instrumentGridColDefs);

  useEffect(() => {
    //API call to fetch data
    Promise.resolve(instrumentsResponse)
      .then((apiInstrumentResponse) => {
        setRowData(apiInstrumentResponse);
      })
      .catch((err) => {
        // log erros in case of API failure
        console.log("Instrument details API call failed", err);
      });
  }, []);
  return (
    <div className="App">
      <Table rowData={rowData || []} colDef={colDef.current} />
    </div>
  );
}

export default Home;
