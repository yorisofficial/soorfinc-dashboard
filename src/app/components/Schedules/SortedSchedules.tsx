"use client";

import { SortAscending, SortDescending } from "@phosphor-icons/react";
import React, { useState } from "react";

const SortedSchedules = () => {
  const [sort, setSort] = useState("desc");

  const handleSorted = () => {
    if (sort === "asc") {
      setSort("desc");
    } else {
      setSort("asc");
    }
  };

  return (
    <>
      <div className="filtering">
        <button
          aria-label="sort by newest"
          onClick={handleSorted}
          className={`btn-primary flex items-center justify-center gap-2 rounded-soorfinc ${sort === "asc" ? "bg-brand" : "bg-foreground"} px-4 py-2 text-sm text-primary xl:text-base`}
        >
          Newest{" "}
          {sort === "asc" ? (
            <SortAscending size={24} />
          ) : (
            <SortDescending size={24} />
          )}
        </button>
      </div>
    </>
  );
};

export default SortedSchedules;
