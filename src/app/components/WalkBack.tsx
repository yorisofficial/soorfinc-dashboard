"use client";

import Link from "next/link";
import React from "react";

const WalkBack = () => {
  return (
    <>
      <div className="walk-back top-margin w-full border-b border-bordered pb-8">
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
