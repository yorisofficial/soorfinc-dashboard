"use client";

import { CheckCircle, HourglassMedium, X } from "@phosphor-icons/react";
import React from "react";


const StatusBadges = ({ status }: { status: string }) => {
  switch (status) {
    case "success":
      return (
        <div className="status-badges flex w-fit items-center justify-center gap-1 rounded-full border border-succeses bg-succeses/5 px-2 py-1 text-succeses">
          <CheckCircle size={16} className="flex-shrink-0" />
          <small>{status}</small>
        </div>
      );
    case "pending":
      return (
        <div className="status-badges flex w-fit items-center justify-center gap-1 rounded-full border border-warning bg-warning/5 px-2 py-1 text-warning">
          <HourglassMedium size={16} className="flex-shrink-0" />
          <small>{status}</small>
        </div>
      );
    case "cancel":
      return (
        <div className="status-badges border-red bg-red/5 text-red flex w-fit items-center justify-center gap-1 rounded-full border px-2 py-1">
          <X size={16} className="flex-shrink-0" />
          <small>{status}</small>
        </div>
      );
    default:
      return <div className="status-badges">Unknown</div>;
  }
};

export default StatusBadges;
