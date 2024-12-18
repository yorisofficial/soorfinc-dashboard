"use client";

import Link from "next/link";
import React from "react";

const WalkBack = ({ title }: { title?: string }) => {
  return (
    <>
      <div className="walk-back flex w-full items-center justify-between border-b border-bordered pb-8">
        {title && <h1 className="text-base font-bold xl:text-2xl">{title}</h1>}
        <Link
          href={"/dashboard/yorisofficial"}
          className="rounded-soorfinc bg-brand px-4 py-2 text-primary hover:bg-brand"
        >
          Back to dashboard
        </Link>
      </div>
    </>
  );
};

export default WalkBack;
