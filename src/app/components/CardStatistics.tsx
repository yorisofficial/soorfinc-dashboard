"use client";

import React from "react";
interface Props {
  title: string;
  value: number;
  icon: React.ReactNode;
}

const CardStatistics = ({ title, value, icon }: Props) => {
  return (
    <>
      <div className="card-item flex h-[160px] w-full flex-col gap-4 rounded-soorfinc bg-foreground p-4">
        <div className="header-content flex flex-col items-start justify-center gap-2">
          {icon}
          <span className="text-base font-semibold">{title}</span>
        </div>
        <div className="content flex w-full items-start justify-start">
          <p className="truncate text-3xl font-bold">{value}</p>
        </div>
      </div>
    </>
  );
};

export default CardStatistics;
