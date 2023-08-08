import React from "react";
import OverFlowCard from "../../../components/card/OverFlowCard";
import { saleList } from "../../../components/all_list/SaleList";

export default function SalePage() {
  return (
    <>
      <div className="mt-14 p-10">
        <OverFlowCard data={saleList} />
      </div>
    </>
  );
}
