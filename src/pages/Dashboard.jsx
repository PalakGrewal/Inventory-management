import React from "react";

import Chart from "../components/Chart";
import Kpi from "../components/Kpi/Kpi";
import Table from "../components/Table";
import { useLocation } from "react-router-dom";

const Dashboard = () => {

  const location = useLocation();
  return (

  

    <div>
      <Kpi />
      <Chart/>
     
      <Table/>
    </div>
  );
};
export default Dashboard;
