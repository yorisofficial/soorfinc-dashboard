"use client";

import React from "react";

type PropsInput = {
  title: string;
  name: string;
  value: string;
  placeholder?: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const InputText = ({
  title,
  name,
  value,
  placeholder,
  className,
  onChange,
}: PropsInput) => {
  return (
    <>
      <label htmlFor={name} className="w-full">
        <span className="text-sm font-light">{title!}</span>
        <input
          type="text"
          name={name!}
          value={value!}
          onChange={onChange}
          placeholder={placeholder || ""}
          className={`${className} mt-1 w-full rounded-inner border border-bordered bg-background px-4 py-2`}
        />
      </label>
    </>
  );
};

export default InputText;
