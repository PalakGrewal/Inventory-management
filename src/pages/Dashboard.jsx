import React from "react";

import Chart from "../components/Chart";
import Kpi from "../components/Kpi/Kpi";
import Table from "../components/Table";

const Dashboard = () => {
  return (

    <div className="p-8">

    <div>
      <Kpi />
      <Chart/>
     
      <Table/>
    </div>
  );
};    
};
export default Dashboard;
