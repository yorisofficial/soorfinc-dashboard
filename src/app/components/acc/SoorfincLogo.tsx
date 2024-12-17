import Image from "next/image";
import React from "react";

const SoorfincLogo = () => {
  return (
    <>
      <div className="logo-brand">
        <Image
          src={"/Brand/soorfinc-logo.svg"}
          alt="soorfinc-logo"
          width={100}
          height={100}
          quality={75}
          priority
          className="h-8 w-full"
        />
      </div>
    </>
  );
};

export default SoorfincLogo;
