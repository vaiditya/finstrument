import { useEffect, useState, useRef } from "react";
import { JsxAttribute } from "typescript";
import instrumentGridColDefs from "../config/instrumentGridColDefs";
import instrumentsResponse from "../mocks/instrumentsResponse";
import { APIInstrumentResponseType } from "../types";
import Footer from "./Footer";

import Table from "./vc-table";
import { VCRowRendererProps } from "./vc-table/types";

function Home(): React.JSX.Element {
  const [rowData, setRowData] = useState<APIInstrumentResponseType[]>([]);

  useEffect(() => {
    //API call to fetch data
    Promise.resolve(instrumentsResponse)
      .then((apiInstrumentResponse) => {
        // @ts-ignore
        setRowData(apiInstrumentResponse);
      })
      .catch((err) => {
        // log erros in case of API failure
        console.log("Instrument details API call failed", err);
      });
  }, []);

  const tableOptions = {
    rowClassRules: (rowData: VCRowRendererProps) => {
      // @ts-ignore
      const { assetClass } = rowData;

      switch (assetClass) {
        case "Macro":
          return "bg-color-white";
        case "Credit":
          return "bg-color-green";
        case "Equities":
          return "bg-color-blue";
      }
      return "";
    },
  };
  return (
    <div className="d-flex flex-justify-center">
      <div id="instrument-table">
        <label>Financial Instruments: </label>
        <Table
          height="500px"
          rowData={rowData || []}
          colDef={instrumentGridColDefs}
          tableOptions={tableOptions}
        />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
