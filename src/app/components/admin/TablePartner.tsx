"use client";

import { dataPartner } from "@/lib/DataPartner";
import { ArrowLeft, ArrowRight, Eye } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Pagination from "../Pagination";

const TablePartner = () => {
  const pathName = usePathname();
  const isActivePath = pathName.includes("list-partner");

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-semibold">List all partner</h1>
        <div className="w-fit">
          <Link
            href={`${pathName}/list-partner`}
            className="flex items-center justify-center gap-2 rounded-soorfinc bg-brand px-4 py-2 text-primary duration-300 hover:bg-brand/90"
          >
            See more
          </Link>
        </div>
      </div>
      <div className="table-container mt-6 flex max-w-5xl flex-col overflow-x-auto xl:mt-8">
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
                <td className="table-body w-[100px] truncate text-center">
                  {item.id}
                </td>
                <td className="table-body w-[200px] truncate xl:min-w-[424px]">
                  {item.fullName}
                </td>
                <td className="table-body w-[200px] truncate">{item.email}</td>
                <td className="table-body w-[200px] truncate">{item.phone}</td>
                <td className="table-body w-[200px]">
                  {item.partnership.length}
                </td>
                <td className="table-body flex w-fit min-w-[100px] items-center justify-center">
                  <Link
                    href={`${isActivePath ? `${pathName}/${item.slug}` : `/dashboard/admin/dev@asiansurf.co/list-partner/${item.slug}`}`}
                    className="flex rounded-inner bg-primary p-1 text-background"
                  >
                    <Eye size={16} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default TablePartner;
