"use client";

import { AllSchedules, SchedulesProps } from "@/lib/data/Schedules";
import React, { Fragment, Suspense, useState } from "react";
import StatusBadges from "../StatusBadges";
import Image from "next/image";
import { ArrowUpRight, X } from "@phosphor-icons/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import InformationDetailsSchedule from "./InformationDetailsSchedule";

const ContentSchedules = ({ data }: { data: SchedulesProps[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const [show, setShow] = useState(false);

  // import data dummy from schedule.ts
  const getDummySchedule = AllSchedules;

  // get data by params
  const getParamsSchedule = searchParams.get("id");

  // find data schedule by params id
  const getScheduleId = getDummySchedule.find(
    (item) => item.id === getParamsSchedule,
  );

  //function handle router click
  const handleRouter = (id: string) => {
    if (getScheduleId && getParamsSchedule) {
      setShow(!show);
    }
    router.push(`${pathName}?id=${id}`, { scroll: false });
  };

  return (
    <>
      <div className="content-body h-fit py-4 xl:py-8">
        <div
          className={`absolute bottom-0 left-0 z-40 w-full origin-bottom rounded-t-[24px] bg-foreground p-4 transition-all duration-300 xl:hidden ${show ? "h-screen opacity-100" : "h-0 opacity-0"}`}
        >
          <div className="close-card flex items-end justify-end">
            <button
              type="button"
              onClick={() => setShow(!show)}
              aria-label="close card details"
            >
              <X size={32} />
            </button>
          </div>
          <InformationDetailsSchedule
            getScheduleId={getScheduleId!}
            getParamsSchedule={getParamsSchedule || ""}
          />
        </div>
        <div className="grid h-[500px] grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-5">
          <div className="list-schedule relative h-[500px] w-full overflow-y-auto rounded-soorfinc border border-bordered bg-foreground">
            <div className="header-schedule-card sticky left-0 top-0 z-10 border-b border-bordered bg-foreground p-4 xl:p-8">
              <h1 className="text-2xl font-bold">Schedules list</h1>
            </div>
            <ul className="list-schedules flex h-fit flex-col items-start justify-start gap-2 p-2">
              {data.map((item) => (
                <li key={item.id} className="w-full">
                  <button
                    type="button"
                    onClick={() => handleRouter(item.id)}
                    className={`item-schedules group relative flex w-full cursor-pointer items-start justify-start gap-4 rounded-inner border border-bordered p-4 hover:bg-background ${getParamsSchedule === item?.id ? "bg-background" : ""}`}
                  >
                    <div className="h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={item.picture}
                        alt={item.fullName}
                        width={500}
                        height={500}
                        className="h-10 w-10 rounded-full object-cover duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2">
                      <StatusBadges status={item.status} />
                      <h1 className="text-base font-bold">{item.fullName}</h1>
                      <span className="text-xs">
                        {item.date} | {item.time}
                      </span>
                    </div>
                    <div className="absolute right-2 top-2">
                      <ArrowUpRight size={16} className="flex-shrink-0" />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="desktop-details-schedule relative hidden h-[500px] w-full overflow-hidden overscroll-y-auto rounded-soorfinc border border-bordered bg-foreground xl:flex">
            <InformationDetailsSchedule
              getScheduleId={getScheduleId!}
              getParamsSchedule={getParamsSchedule || ""}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSchedules;
