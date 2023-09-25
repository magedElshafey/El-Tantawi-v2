import React from "react";
import DashboardSidebar from "../components/utils/dashboard/DashboardSidebar";
import ReturnsTable from "../components/returns/ReturnsTable";
const Returns = ({ sidebar }) => {
  return (
    <div>
      <div className="container py-5 py-md-3 mt-5 mt-md-0">
        <h3 className="my-2">قائمة مرتجعاتي</h3>
        <div className="row">
          <div className="col-12 col-md-4">
            <DashboardSidebar data={sidebar} />
          </div>
          <div className="col-12 col-md-8">
            <ReturnsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;
