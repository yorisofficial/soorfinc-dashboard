"use client";
import React, { Fragment } from "react";
import CardStatistics from "./CardStatistics";
import { StatisticsProps } from "@/lib/data/DataStatistics";

const ListStatistics = ({ data }: { data: StatisticsProps[] }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default ListStatistics;
