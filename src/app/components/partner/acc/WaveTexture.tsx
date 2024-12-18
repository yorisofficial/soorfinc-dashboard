"use client";

import Image from "next/image";
import React from "react";

const WaveTexture = ({ zindex }: { zindex?: string }) => {
  return (
    <>
      <div
        className={`acc-wave absolute bottom-0 left-0 ${zindex ? zindex : "-z-10"}`}
      >
        <Image
          src={"/acc/wave-bottom-left.svg"}
          alt="wave illustration"
          width={800}
          height={800}
          priority
          className="h-fit w-32 object-contain xl:w-full"
        />
      </div>
      <div
        className={`acc-wave absolute right-0 top-0 ${zindex ? zindex : "-z-10"}`}
      >
        <Image
          src={"/acc/wave-top-right.svg"}
          alt="wave illustration"
          width={800}
          height={800}
          priority
          className="h-fit w-32 object-contain xl:w-full"
        />
      </div>
    </>
  );
};

export default WaveTexture;
