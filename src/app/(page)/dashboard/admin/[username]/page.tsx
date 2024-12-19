import React from "react";
import TablePartner from "@/app/components/admin/TablePartner";
import CardStatisticsPartner from "@/app/components/admin/CardStatisticsPartner";

const AdminMainDashboard = () => {
  return (
    <div className="top-margin">
      <div className="container-content flex flex-col gap-4 xl:gap-8">
        <CardStatisticsPartner />
        <TablePartner />
      </div>
    </div>
  );
};

export default AdminMainDashboard;
