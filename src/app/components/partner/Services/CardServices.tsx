"use client";
import { ServiceProps } from "@/lib/type/type";
import { ArrowUpRight, DotsThree } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";
import LineSpaceY from "../LineSpaceY";

const CardServices = ({ data }: { data: ServiceProps[] }) => {
  return (
    <>
      <div className="card-services h-fit max-h-[500px] w-full rounded-soorfinc border border-bordered bg-foreground p-4 xl:p-8">
        <div className="header-page flex w-full items-center justify-between sm:flex-row">
          <h1 className="text-base font-semibold xl:text-2xl">Your services</h1>
          <Link
            href={"/"}
            aria-label="add new service"
            className="flex items-center gap-2 rounded-inner bg-brand py-2 pl-4 pr-2 text-xs text-primary duration-300 hover:bg-brand/90 xl:text-sm"
          >
            Add new service <ArrowUpRight size={16} className="flex-shrink-0" />
          </Link>
        </div>
        <LineSpaceY />
        <div className="list-services flex w-full flex-col items-start gap-2">
          {data.map((item) => (
            <div
              key={item.id}
              aria-label="details service"
              className="item-services group flex w-full items-center justify-between rounded-soorfinc border border-bordered px-4 py-2 duration-300"
            >
              <div className="flex flex-col items-start justify-start gap-2">
                <h1 className="text-base font-semibold">{item.title}</h1>
                <p className="text-sm">
                  {item.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    currencyDisplay: "code",
                    maximumFractionDigits: 0,
                  })}
                </p>
              </div>
              <div className="">
                <Link
                  href={"/"}
                  aria-label="details service"
                  className="flex h-fit w-fit rounded-soorfinc border border-bordered bg-background p-2 duration-300"
                >
                  <DotsThree size={24} className="flex-shrink-0" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardServices;
