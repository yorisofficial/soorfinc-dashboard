"use client";

import { PropsService } from "@/lib/admin/DataService";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";
import Pagination from "../Pagination";
import { usePathname } from "next/navigation";

const TableServices = ({
  data,
  params,
}: {
  data: PropsService[];
  params: string;
}) => {
  const pathName = usePathname();
  const getServiceFromPartner = data.filter(
    (item) => item.slugPartner === params,
  );
  console.log(params, getServiceFromPartner);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between gap-2 py-6">
        <form action="">
          <label htmlFor="search" className="relative h-10 w-full">
            <input
              type="text"
              name="search"
              placeholder="Search services"
              className="h-10 w-full rounded-inner bg-bordered py-2 pl-12 pr-4 text-sm outline-none placeholder:text-sm placeholder:capitalize placeholder:text-primary/30 focus:outline-2 focus:outline-primary/30"
            />
            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              <MagnifyingGlass size={24} />
            </div>
          </label>
        </form>
        <div className="flex h-10 w-fit flex-shrink-0 items-center justify-center">
          <Link
            href={"/"}
            className="flex h-10 items-center justify-center rounded-soorfinc bg-brand px-4 py-2 text-sm text-primary"
          >
            Add new services
          </Link>
        </div>
      </div>
      <div className="table-container mt-6 flex w-full max-w-5xl flex-col overflow-x-auto xl:mt-8">
        <table className="table-partner w-full">
          <thead className="w-full">
            <tr className="flex items-start">
              <th className="table-header h-10 w-[150px]">Id</th>
              <th className="table-header h-10 w-[350px]">Service name</th>
              <th className="table-header h-10 w-full min-w-[200px] max-w-[400px]">
                Description
              </th>
              <th className="table-header h-10 w-[150px]">Total session</th>
              <th className="table-header flex h-10 w-[150px] items-center justify-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {getServiceFromPartner.map((item, index) => (
              <tr
                key={item.idService}
                className={`flex items-start ${index % 2 === 0 ? "bg-background" : "bg-foreground"}`}
              >
                <td className="table-body h-10 w-[150px] truncate text-sm">
                  {item.idService}
                </td>
                <td className="table-body h-10 w-[350px] truncate text-sm">
                  <Link
                    href={`${pathName}/${item.idService}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="table-body h-10 w-full min-w-[200px] max-w-[400px] truncate text-sm">
                  {item.description}
                </td>
                <td className="table-body flex h-10 w-[150px] items-center justify-center text-sm">
                  {item.session.length}
                </td>
                <td className="table-body flex h-10 w-[150px] items-center justify-center truncate">
                  <Link
                    href={`${pathName}/${item.idService}`}
                    className="flex w-fit rounded-inner bg-primary p-1 text-background"
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

export default TableServices;
