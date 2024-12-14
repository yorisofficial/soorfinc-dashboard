"use client";
import React from "react";
import CardStatistics from "./CardStatistics";

interface Props {
  data: {
    id: string;
    title: string;
    value: number;
    icon: React.ReactNode;
  }[];
}

const ListStatistics = ({ data }: Props) => {
  return (
    <>
      <div className="card-statistics grid h-fit grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-5">
        {data.map((item) => (
          <CardStatistics
            key={item.id}
            icon={item.icon}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>
    </>
  );
};

export default ListStatistics;
