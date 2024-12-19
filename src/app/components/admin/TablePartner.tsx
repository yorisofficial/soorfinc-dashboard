"use client";

import { ArrowLeft, ArrowRight, Eye } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

export const dataPartner = [
  {
    id: "1",
    fullName: "John Doe",
    email: "john@example.com",
    phone: "08123456789",
    partnership: ["surf-coach", "surf-lesson"],
  },
  {
    id: "2",
    fullName: "John Doe",
    email: "john@example.com",
    phone: "08123456789",
    partnership: ["surf-coach", "surf-lesson"],
  },
  {
    id: "3",
    fullName: "John Doe",
    email: "john@example.com",
    phone: "08123456789",
    partnership: ["surf-coach", "surf-lesson"],
  },
  {
    id: "4",
    fullName: "John Doe",
    email: "john@example.com",
    phone: "08123456789",
    partnership: ["surf-coach", "surf-lesson"],
  },
  {
    id: "5",
    fullName: "John Doe",
    email: "john@example.com",
    phone: "08123456789",
    partnership: ["surf-coach", "surf-lesson"],
  },
];

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
  {
    id: "4",
    page: 4,
    isActive: false,
  },
  {
    id: "5",
    page: 5,
    isActive: false,
  },
];

const TablePartner = () => {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="flex max-w-5xl flex-col gap-6 overflow-x-auto">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-semibold">List all partner</h1>
          <div className="w-fit">
            <Link
              href={"/"}
              className="flex items-center justify-center gap-2 rounded-soorfinc bg-brand px-4 py-2 text-primary duration-300 hover:bg-brand/90"
            >
              See more
            </Link>
          </div>
        </div>
        <table className="table-partner">
          <thead>
            <tr className="flex items-start">
              <th className="table-header w-fit min-w-[100px] text-center">
                Id
              </th>
              <th className="table-header w-fit min-w-[200px] xl:min-w-[424px]">
                Full name
              </th>
              <th className="table-header w-fit min-w-[200px]">Email</th>
              <th className="table-header w-fit min-w-[200px]">Phone</th>
              <th className="table-header w-[200px]">Partnership</th>
              <th className="table-header w-[100px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {dataPartner.map((item, index) => (
              <tr
                key={item.id}
                className={`flex items-start ${index % 2 === 0 ? "bg-background" : "bg-foreground"}`}
              >
                <td className="table-body w-fit min-w-[100px] text-center">
                  {item.id}
                </td>
                <td className="table-body w-fit min-w-[200px] xl:min-w-[424px]">
                  {item.fullName}
                </td>
                <td className="table-body w-fit min-w-[200px]">{item.email}</td>
                <td className="table-body w-fit min-w-[200px]">{item.phone}</td>
                <td className="table-body w-[200px]">
                  {item.partnership.length}
                </td>
                <td className="table-body flex w-fit min-w-[100px] items-center justify-center">
                  <Link href={"/"} className="flex">
                    <Eye size={24} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination flex w-full items-center justify-center py-4">
        <div className="flex items-center justify-center gap-2">
          <button className="flex h-10 items-center justify-center gap-2 rounded-inner border border-bordered px-4 py-2 duration-300 hover:bg-brand xl:min-w-[150px] xl:justify-between">
            <ArrowLeft size={20} className="hidden xl:inline-block" /> Previous
          </button>
          {pagination.map((item) => (
            <div key={item.id} className="">
              <button
                className={`h-8 w-8 rounded-inner bg-background duration-300 hover:bg-foreground ${item.isActive ? "bg-brand text-primary" : ""}`}
              >
                {item.page}
              </button>
            </div>
          ))}
          <button className="flex h-10 items-center justify-center gap-2 rounded-inner border border-bordered px-4 py-2 duration-300 hover:bg-brand xl:min-w-[150px] xl:justify-between">
            Next <ArrowRight size={20} className="hidden xl:inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TablePartner;
