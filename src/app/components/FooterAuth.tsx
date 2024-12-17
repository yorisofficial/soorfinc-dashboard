"use client";

import Link from "next/link";
import React from "react";

const FooterAuth = () => {
  return (
    <div>
      <div className="absolute bottom-4 left-1/2 -z-10 z-0 flex -translate-x-1/2 items-center gap-4">
        <ul className="flex w-full items-center gap-4">
          <li className="w-full text-nowrap border-r pr-4">
            <Link
              target="_blank"
              href="https://soorfinc.vercel.app/en/about"
              className="text-xs font-light underline-offset-4 hover:underline"
            >
              About us
            </Link>
          </li>
          <li className="w-full text-nowrap border-r pr-4">
            <Link
              target="_blank"
              href="https://soorfinc.vercel.app/en/support"
              className="text-xs font-light underline-offset-4 hover:underline"
            >
              Customer support
            </Link>
          </li>
          <li className="w-full text-nowrap">
            <Link
              target="_blank"
              href="https://soorfinc.vercel.app/en/regulation"
              className="text-xs font-light underline-offset-4 hover:underline"
            >
              Term and regulations
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterAuth;
