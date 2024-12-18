"use client";
import React, { Suspense } from "react";
import StatusBadges from "../StatusBadges";
import { SchedulesProps } from "@/lib/data/Schedules";
import LineSpaceY from "../LineSpaceY";
import { Copy } from "@phosphor-icons/react";
import ButtonCopy from "../ButtonCopy";

const InformationDetailsSchedule = ({
  getScheduleId,
  getParamsSchedule,
}: {
  getScheduleId: SchedulesProps;
  getParamsSchedule: string;
}) => {
  return (
    <>
      <Suspense>
        {getScheduleId && getParamsSchedule ? (
          <div className="h-full w-full overflow-y-auto">
            <div className="header-content sticky left-0 top-0 z-10 flex items-center justify-between border-b border-bordered bg-foreground p-4 xl:p-8">
              <h1 className="text-2xl font-bold">Details</h1>
              <StatusBadges status={getScheduleId?.status} />
            </div>
            <div className="body-content h-fit overflow-y-auto p-4">
              <div className="customer-info flex h-fit flex-col gap-4">
                <div className="flex flex-col items-start justify-start gap-2">
                  <span className="text-base font-bold">Full name</span>
                  <span className="text-sm font-light">
                    {getScheduleId.fullName}
                  </span>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                  <span className="text-base font-bold">Gender</span>
                  <span className="text-sm font-light">
                    {getScheduleId.gender}
                  </span>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                  <span className="text-base font-bold">Age</span>
                  <span className="text-sm font-light">
                    {getScheduleId.age}
                  </span>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                  <span className="text-base font-bold">Phone number</span>
                  <span className="flex items-center gap-2 text-sm font-light">
                    {getScheduleId.phone}
                    <ButtonCopy data={getScheduleId.phone} />
                  </span>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                  <span className="text-base font-bold">Email address</span>
                  <span className="flex items-center gap-2 text-sm font-light">
                    {getScheduleId.email}
                    <ButtonCopy data={getScheduleId.email} />
                  </span>
                </div>
              </div>
              <LineSpaceY className="my-4 text-primary/20 xl:my-8" />
              <div className="booking-info flex h-fit flex-col gap-4">
                <div className="flex flex-col items-start justify-start gap-2">
                  <span className="text-base font-bold">Date booking</span>
                  <span className="text-sm font-light">
                    {getScheduleId.date}
                  </span>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                  <span className="text-base font-bold">Selected service</span>
                  <span className="text-sm font-light">
                    {getScheduleId.service}
                  </span>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                  <span className="text-base font-bold">Selected session</span>
                  <span className="text-sm font-light">
                    {getScheduleId.session} | {getScheduleId.time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-soorfinc border-4 border-dashed border-primary opacity-20">
            <h1 className="text-2xl font-bold uppercase">DATA not found</h1>
            <p className="text-center font-light">
              Please, select schedule item first
            </p>
          </div>
        )}
      </Suspense>
    </>
  );
};

export default InformationDetailsSchedule;
