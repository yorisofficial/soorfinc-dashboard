"use client";

import React from "react";

const LineSpaceY = ({ className }: { className?: string }) => {
  return (
    <>
      <hr className={`${className ? className : "my-6 text-lightblack/20"}`} />
    </>
  );
};

export default LineSpaceY;
