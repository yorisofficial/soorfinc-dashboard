import TablePartner from "@/app/components/admin/TablePartner";
import LineSpaceY from "@/app/components/partner/LineSpaceY";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin dashboard | Partner list",
  description: "The page will contain all partners collaborating with Soorfinc",
};

const PartnerPage = () => {
  return (
    <div className="container-content top-margin">
      <div className="flex flex-col gap-8">
        <div className="header-content">
          <span className="text-xs font-light uppercase">Management</span>
          <h1 className="text-2xl font-bold">Partner lists</h1>
          <p className="mt-4 text-xs font-light md:text-sm xl:w-3/4">
            Manage all partnerships in one place. Easily view and update partner
            details, monitor status, and utilize search and filter functions.
            Strengthen relationships and foster collaboration with our intuitive
            Management Partners List. Our team is here to support you!
          </p>
        </div>
        <LineSpaceY className="!my-2 text-primary/20" />
        <TablePartner />
      </div>
    </div>
  );
};

export default PartnerPage;
