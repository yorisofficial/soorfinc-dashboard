"use client";

import Image from "next/image";
import React from "react";

const WaveTexture = () => {
  return (
    <>
      <div className="acc-wave absolute bottom-0 left-0">
        <Image
          src={"/acc/wave-bottom-left.svg"}
          alt="wave illustration"
          width={800}
          height={800}
          priority
          className="h-fit w-full object-contain"
        />
      </div>
      <div className="acc-wave absolute right-0 top-0">
        <Image
          src={"/acc/wave-top-right.svg"}
          alt="wave illustration"
          width={800}
          height={800}
          priority
          className="h-fit w-full object-contain"
        />
      </div>
    </>
  );
};

export default WaveTexture;
