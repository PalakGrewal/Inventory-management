import React from "react";
import H1 from "../../Styles/H1";
import Kpis from "./Kpis";
const Kpi = () => {
  return (
    <div className="Kpi">
      <div className="Kpi_head flex text-sm justify-between">
        <H1 data="Inventory Management KPIS" />
        <h3 className="text-xl text-green-500">
          Period :{" "}
          <select className="text-center font-bold text-xl" name="period" id="period">
            <option value="Week">Week</option>
            <option value="Month">Month</option>
            <option value="Quater">Quater</option>
            <option value="Year">Year</option>
          </select>
        </h3>
      </div>
      
      <div className="p-5 flex-wrap grid grid-rows-2 grid-flow-col gap-10 sm:flex">
        <Kpis head="Inventory Turnover Ratio" info={1.2}  />
        <Kpis head="Average Inventory" info={"$ " + 314678} />
        <Kpis head="Cost of Goods Sold" info={"$ " + 412343} />
        <Kpis head="Service Level" info={95.5 + " %"} />
        <Kpis head="Days to sell Inventory" info={16.5} />
        <Kpis head="Lead time" info={14.2} />
        <Kpis head="Perfect Order rate" info={94.5 + " %"} />
        <Kpis head="Rate of return" info={2.3 + " %"} />
      </div>
    </div>
  );
};

export default Kpi;
