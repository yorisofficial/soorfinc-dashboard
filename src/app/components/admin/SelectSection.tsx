"use client";

import { TimePicker } from "@/lib/TimePicker";
import React from "react";

type Props = {
  title: string;
  startTime: string;
  endTime: string;
};

const SelectSection = ({ title, startTime, endTime }: Props) => {
  return (
    <>
      <label htmlFor="section-1" className="section-select w-full">
        <span className="text-sm capitalize">{title}</span>
        <div className="mt-2 flex items-center gap-2">
          <select
            name="section-1"
            id="section-start"
            defaultValue={startTime}
            className="h-10 w-full rounded-inner bg-background px-4 text-primary"
          >
            {TimePicker.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>{" "}
          -{" "}
          <select
            name="section-1"
            id="section-start"
            defaultValue={endTime}
            className="h-10 w-full rounded-inner bg-background px-4 text-primary"
          >
            {TimePicker.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </label>
    </>
  );
};

export default SelectSection;
