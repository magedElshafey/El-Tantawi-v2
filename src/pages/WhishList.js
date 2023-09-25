import React from "react";
import DashboardSidebar from "../components/utils/dashboard/DashboardSidebar";
import WhishListTable from "../components/whishlist/WhishListTable";

const WhishList = ({ sidebar }) => {
  return (
    <div className="container py-5 py-md-3 mt-5 mt-md-0">
      <h3 className="my-2">قائمة المفضلة</h3>

      <div className="row">
        <div className="col-12 col-md-4">
          <DashboardSidebar data={sidebar} />
        </div>
        <div className="col-12 col-md-8">
          <WhishListTable />
        </div>
      </div>
    </div>
  );
};

export default WhishList;
