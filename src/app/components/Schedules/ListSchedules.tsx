"use client";

import React from "react";
import StatusBadges from "../StatusBadges";
import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import LineSpaceY from "../LineSpaceY";
import { SchedulesProps } from "@/lib/data/Schedules";

const ListSchedules = ({ data }: { data: SchedulesProps[] }) => {
  return (
    <>
      <div className="list-schedules card-schedules relative h-fit rounded-soorfinc border border-bordered bg-foreground p-4 xl:p-8">
        <div className="header-page flex w-full items-center justify-between sm:flex-row">
          <h1 className="text-base font-semibold xl:text-2xl">
            Your schedules
          </h1>
          <Link
            href={"/dashboard/yorisofficial/schedules"}
            aria-label="details schedule"
            className="flex items-center gap-2 rounded-inner bg-brand py-2 pl-4 pr-2 text-xs text-primary duration-300 hover:bg-brand/90 xl:text-sm"
          >
            Details schedules
            <ArrowUpRight size={16} className="flex-shrink-0" />
          </Link>
        </div>
        <LineSpaceY />
        <div className="sorted-section mb-4 flex w-full items-center justify-between">
          <button className="rounded-soorfinc bg-background px-4 py-2 text-primary">
            Show more
          </button>
          <button className="rounded-soorfinc bg-background px-4 py-2 text-primary">
            Sort by newest
          </button>
        </div>
        <div className="list-schedules flex h-[500px] w-full flex-col gap-2 overflow-y-scroll">
          {data.map((item) => (
            <Link
              href={`/schedule/${item.booking}`}
              key={item.id}
              className="item-schedule group flex w-full items-start justify-between rounded-soorfinc border border-bordered p-4 transition-all duration-300 hover:bg-background"
            >
              <div className="profile-customer flex items-start gap-4">
                <div className="profile-picture">
                  <Image
                    src={item.picture}
                    alt={`Profile ${item.fullName}`}
                    width={150}
                    height={150}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </div>
                <div className="details-schedule flex flex-col gap-2">
                  <StatusBadges status={item.status} />
                  <h1 className="text-base font-semibold">{item.fullName}</h1>
                  <small>At {item.time}</small>
                </div>
              </div>
              <div className="icon-schedule transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListSchedules;
