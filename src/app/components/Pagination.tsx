"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export const pagination = [
  {
    id: "1",
    page: 1,
    isActive: true,
  },
  {
    id: "2",
    page: 2,
    isActive: false,
  },
  {
    id: "3",
    page: 3,
    isActive: false,
  },
];

const Pagination = () => {
  return (
    <div>
      <div className="pagination flex w-full items-center justify-center py-4">
        <div className="flex w-full items-center justify-between gap-2">
          <button className="flex h-10 items-center justify-center gap-2 rounded-inner border border-bordered px-4 py-2 duration-300 hover:bg-brand xl:min-w-[150px] xl:justify-between">
            <ArrowLeft size={20} className="hidden xl:inline-block" /> Previous
          </button>
          <div className="flex items-center gap-2">
            {pagination.map((item) => (
              <div key={item.id} className="">
                <button
                  className={`h-8 w-8 rounded-inner bg-background duration-300 hover:bg-foreground ${item.isActive ? "bg-brand text-primary" : ""}`}
                >
                  {item.page}
                </button>
              </div>
            ))}
          </div>
          <button className="flex h-10 items-center justify-center gap-2 rounded-inner border border-bordered px-4 py-2 duration-300 hover:bg-brand xl:min-w-[150px] xl:justify-between">
            Next <ArrowRight size={20} className="hidden xl:inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
