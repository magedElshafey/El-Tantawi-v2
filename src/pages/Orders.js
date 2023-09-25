import React from "react";
import DashboardSidebar from "../components/utils/dashboard/DashboardSidebar";
import OrdersTable from "../components/orders/OrdersTable";
const Orders = ({ sidebar }) => {
  return (
    <div className="container py-5 py-md-3 mt-5 mt-md-0">
      <h3 className="my-3">قائمة طلباتي</h3>
      <div className="row">
        <div className="col-12 col-md-4">
          <DashboardSidebar data={sidebar} />
        </div>
        <div className="col-12 col-md-8">
          <OrdersTable />
        </div>
      </div>
    </div>
  );
};

export default Orders;
