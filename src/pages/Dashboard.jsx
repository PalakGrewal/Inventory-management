import React from "react";

import Chart from "../components/Chart";
import Kpi from "../components/Kpi/Kpi";
import Table from "../components/Table";

const Dashboard = () => {
  return (
    <div className="h-[88vh] overflow-y-scroll p-10">
      <Kpi />
      <Chart/>     
      <Table/>
    </div>
  );
};
export default Dashboard;
