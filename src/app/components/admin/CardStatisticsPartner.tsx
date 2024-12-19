"use client";

import React from "react";

export const dataStatistics = [
  {
    id: "1",
    title: "Total partner",
    value: "200",
  },
  {
    id: "2",
    title: "Total users",
    value: "500",
  },
  {
    id: "3",
    title: "Total services",
    value: "50",
  },
  {
    id: "4",
    title: "Total locations",
    value: "9",
  },
];

const CardStatisticsPartner = () => {
  return (
    <div className="grid w-full grid-cols-2 items-center justify-center gap-4 xl:grid-cols-4">
      {dataStatistics.map((item) => (
        <div
          key={item.id}
          className="rounded-soorfinc border border-bordered bg-foreground"
        >
          <div className="flex w-full flex-col items-start justify-between">
            <div className="header-statistics flex h-[120px] flex-col items-start justify-start gap-2 p-4">
              <span className="head text-sm font-light uppercase">
                {item.title}
              </span>
              <span className="info-value text-3xl font-bold text-brand">
                {item.value.toString()}
              </span>
            </div>
            <div className="footer-card"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardStatisticsPartner;
