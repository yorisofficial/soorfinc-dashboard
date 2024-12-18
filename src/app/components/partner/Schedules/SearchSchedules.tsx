"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";

const SearchNotification = () => {
  return (
    <>
      <div className="search-bar w-[180px]">
        <form action="">
          <label htmlFor="name" className="relative h-10 w-fit">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="find notification"
              className="h-10 w-full rounded-inner bg-bordered p-4 py-2 text-sm outline-none placeholder:text-sm placeholder:capitalize placeholder:text-primary/30 focus:outline-4 focus:outline-primary/30"
            />
            <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center">
              <button aria-label="search">
                <MagnifyingGlass size={20} className="flex-shrink-0" />
              </button>
            </div>
          </label>
        </form>
      </div>
    </>
  );
};

export default SearchNotification;
