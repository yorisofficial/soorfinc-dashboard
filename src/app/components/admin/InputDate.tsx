"use client";

import React from "react";

type PropsInput = {
  title: string;
  name: string;
  value: Date | string;
  placeholder?: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const InputDate = ({
  title,
  name,
  value,
  placeholder,
  className,
  onChange,
}: PropsInput) => {
  return (
    <>
      <label htmlFor="fullname" className="w-full">
        <span className="text-sm font-light">{title!}</span>
        <input
          type="date"
          name={name!}
          value={new Date(value).toISOString().split("T")[0]}
          onChange={onChange}
          placeholder={placeholder || ""}
          className={`${className} mt-1 w-full rounded-inner border border-bordered bg-background px-4 py-2 text-primary`}
        />
      </label>
    </>
  );
};

export default InputDate;
