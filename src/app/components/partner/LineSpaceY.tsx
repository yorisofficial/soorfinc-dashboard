"use client";

import React from "react";

const LineSpaceY = ({ className }: { className?: string }) => {
  return (
    <>
      <hr className={`${className ? className : "my-4 text-primary/20"}`} />
    </>
  );
};

export default LineSpaceY;
