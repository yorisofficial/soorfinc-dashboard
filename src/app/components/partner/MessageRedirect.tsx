"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const MessageRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const second = setTimeout(() => {
      router.push("/auth");
    }, 1000);

    return () => {
      clearTimeout(second);
    };
  }, [router]);

  return (
    <>
      <div className="absolute left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-brand px-4">
        <Image
          src={"/Brand/soorfinc-logo-white.svg"}
          alt="Soorfinc logo"
          width={1500}
          height={500}
          priority
          className="h-24 w-fit animate-pulse object-contain xl:h-20"
        />
      </div>
    </>
  );
};

export default MessageRedirect;
