import React from "react";
import AccountDetailsForm from "../components/accountDetails/AccountDetailsForm";
import DashboardSidebar from "../components/utils/dashboard/DashboardSidebar";

const AccountDetails = ({ sidebar }) => {
  return (
    <div className="container py-5 py-md-3 mt-5 mt-md-0">
      <div className="row gap-2">
        <div className=" col-12 col-md-4">
          <DashboardSidebar data={sidebar} />
        </div>
        <div className=" col-12 col-md-7">
          <AccountDetailsForm />
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
