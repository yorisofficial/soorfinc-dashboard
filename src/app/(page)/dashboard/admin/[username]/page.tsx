import React from "react";
import TablePartner from "@/app/components/admin/TablePartner";
import CardStatisticsPartner from "@/app/components/admin/CardStatisticsPartner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin dashboard | Partner list",
  description: "The page will contain all partners collaborating with Soorfinc",
};

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
